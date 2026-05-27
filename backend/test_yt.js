const axios = require('axios');
const cheerio = require('cheerio');

async function fetchTranscript(videoId) {
  // Method 1
  try {
    const r = await axios.get('https://youtubetranscript.com/?v=' + videoId, {timeout:10000});
    const t = cheerio.load(r.data)('body').text().replace(/\s+/g,' ').trim();
    if (t.length > 200) { console.log('Method 1 OK, length:', t.length); return t; }
  } catch(e) { console.log('M1 err:', e.message); }

  // Method 2: ytInitialPlayerResponse
  try {
    const ytRes = await axios.get('https://www.youtube.com/watch?v=' + videoId, {timeout:15000});
    const ytData = ytRes.data;
    
    // Find ytInitialPlayerResponse with brace counting
    const startIdx = ytData.indexOf('ytInitialPlayerResponse = {');
    if (startIdx >= 0) {
      const jsonStart = ytData.indexOf('{', startIdx);
      let depth = 0;
      let endIdx = jsonStart;
      for (let i = jsonStart; i < ytData.length; i++) {
        if (ytData[i] === '{') depth++;
        if (ytData[i] === '}') depth--;
        if (depth === 0) { endIdx = i; break; }
      }
      const jsonStr = ytData.substring(jsonStart, endIdx + 1);
      const player = JSON.parse(jsonStr);
      const captions = player?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
      if (captions) {
        console.log('Found captions:', captions.length, 'tracks');
        console.log('Track 0:', captions[0]?.languageCode, captions[0]?.baseUrl?.substring(0,80));
        const track = captions.find(c => c.languageCode === 'en') || captions[0];
        const baseUrl = track.baseUrl;
        const cRes = await axios.get(baseUrl, {timeout:10000});
        const lines = [];
        const re = /<text[^>]*>(.*?)<\/text>/g;
        let m;
        while ((m = re.exec(cRes.data)) !== null) {
          lines.push(m[1].replace(/<[^>]*>/g,'').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/&quot;/g,'"'));
        }
        const result = lines.join(' ').replace(/\s+/g,' ').trim();
        if (result.length > 100) { console.log('Method 2 OK, length:', result.length); return result; }
      } else { console.log('No captions found in player'); }
    }
  } catch(e) { console.log('M2 err:', e.message); }

  return null;
}

async function test() {
  const vid = 'dQw4w9WgXcQ'; // Rick Astley
  console.log('Testing video:', vid);
  const t = await fetchTranscript(vid);
  if (t) console.log('SUCCESS:', t.substring(0, 200));
  else console.log('FAILED');
}
test();
