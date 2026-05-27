const axios = require('axios');

async function debug() {
  try {
    const ytRes = await axios.get('https://www.youtube.com/watch?v=dQw4w9WgXcQ', {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9'
      }
    });
    const ytData = ytRes.data;
    console.log('Page length:', ytData.length);
    console.log('Has ytInitialPlayerResponse:', ytData.includes('ytInitialPlayerResponse'));
    
    const si = ytData.indexOf('ytInitialPlayerResponse');
    if (si < 0) return console.log('NOT FOUND');
    
    const jsonStart = ytData.indexOf('{', si);
    let depth = 0, endIdx = jsonStart;
    for (let i = jsonStart; i < ytData.length; i++) {
      if (ytData[i] === '{') depth++;
      if (ytData[i] === '}') depth--;
      if (depth === 0) { endIdx = i; break; }
    }
    
    const jsonStr = ytData.substring(jsonStart, endIdx + 1);
    console.log('JSON length:', jsonStr.length);
    
    const player = JSON.parse(jsonStr);
    console.log('Has captions:', !!player.captions);
    if (!player.captions) return console.log('Keys:', Object.keys(player));
    
    const capts = player.captions?.playerCaptionsTracklistRenderer?.captionTracks;
    console.log('Caption tracks:', capts?.length);
    if (!capts) return;
    
    const track = capts.find(c => c.languageCode === 'en' && c.kind !== 'asr') || capts.find(c => c.languageCode === 'en') || capts[0];
    console.log('Selected track:', track.languageCode, track.kind||'manual');
    
    let url = track.baseUrl.replace(/\\u0026/g, '&');
    console.log('URL:', url.substring(0, 60));
    
    const cookies = ytRes.headers['set-cookie'] || [];
    const cookieStr = Array.isArray(cookies) ? cookies.map(c => c.split(';')[0]).join('; ') : '';
    console.log('Cookies:', cookieStr.substring(0, 80));
    
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept-Language': 'en-US',
      'Referer': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    };
    if (cookieStr) headers['Cookie'] = cookieStr;
    
    for (const fmt of ['vtt', 'srv3', 'srv2', 'srv1']) {
      try {
        const r = await axios.get(url + '&fmt=' + fmt, { timeout: 8000, headers, responseType: 'text' });
        console.log(fmt, '-> len:', r.data.length, 'type:', r.headers['content-type']);
        if (r.data.length > 50) {
          console.log('SAMPLE:', r.data.substring(0, 300));
          break;
        }
      } catch(e) { console.log(fmt, 'err:', e.message); }
    }
  } catch(e) { console.log('ERR:', e.message); }
}
debug();
