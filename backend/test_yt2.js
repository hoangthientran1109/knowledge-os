const axios = require('axios');
const cheerio = require('cheerio');

async function fetch(videoId) {
  // M1: youtubetranscript.com
  try {
    const r = await axios.get('https://youtubetranscript.com/?v=' + videoId, {timeout:10000});
    const ct = cheerio.load(r.data);
    let t = ct('#transcript-text').text() || ct('body').text();
    t = t.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
    if (t.length > 200 && !t.includes('No transcript')) { console.log('M1 OK:', t.substring(0,300)); return; }
    console.log('M1 failed, len:', t.length);
  } catch(e) { console.log('M1 err:', e.message); }

  // M2: YouTube page
  try {
    const ytRes = await axios.get('https://www.youtube.com/watch?v=' + videoId, {timeout:15000});
    const ytData = ytRes.data;
    const si = ytData.indexOf('ytInitialPlayerResponse');
    if (si >= 0) {
      const js = ytData.indexOf('{', si);
      let d=0, ei=js;
      for (let i=js;i<ytData.length&&d>=0;i++) {
        if (ytData[i]=='{') d++;
        if (ytData[i]=='}') d--;
        if (d===0) { ei=i; break; }
      }
      const player = JSON.parse(ytData.substring(js, ei+1));
      const capts = player?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
      if (capts) {
        console.log('Found', capts.length, 'caption tracks');
        for (const c of capts) console.log(' -', c.languageCode, c.kind||'manual', c.name?.simpleText||'');
        const track = capts.find(c=>c.kind!=='asr') || capts[0];
        const cRes = await axios.get(track.baseUrl, {timeout:10000});
        const lines = [];
        const re = /<text[^>]*>(.*?)<\/text>/g;
        let m;
        while ((m = re.exec(cRes.data))) lines.push(m[1].replace(/<[^>]*>/g,''));
        const r2 = lines.join(' ').replace(/\s+/g,' ').trim();
        console.log('M2 OK, len:', r2.length);
        console.log(r2.substring(0,300));
        return;
      }
    }
    console.log('M2: no captions found');
  } catch(e) { console.log('M2 err:', e.message); }
}

// Test with a video that definitely has subtitles
fetch('jNQXAC9IVRw'); // "Me at the zoo" - first YT video, has auto-captions
