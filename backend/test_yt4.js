const { YoutubeTranscript } = require('youtube-transcript');

async function test() {
  try {
    const t = await YoutubeTranscript.fetchTranscript('dQw4w9WgXcQ');
    console.log('Lines:', t.length);
    const text = t.map(l => l.text).join(' ');
    console.log('Text length:', text.length);
    console.log('Sample:', text.substring(0, 200));
  } catch(e) { console.log('Err:', e.message); }
  
  try {
    const t2 = await YoutubeTranscript.fetchTranscript('jNQXAC9IVRw');
    console.log('\nTest2 lines:', t2.length);
    const text2 = t2.map(l => l.text).join(' ');
    console.log('Sample:', text2.substring(0, 200));
  } catch(e) { console.log('Err2:', e.message); }
}
test();
