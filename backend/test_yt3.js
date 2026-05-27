const { fetchYouTubeTranscript } = require('./services/extractor');

async function test() {
  console.log('Test 1: Rick Astley (has manual EN captions)');
  const t1 = await fetchYouTubeTranscript('dQw4w9WgXcQ');
  console.log('Result:', t1 ? 'OK - ' + t1.substring(0, 200) : 'FAILED');
  
  console.log('\nTest 2: Me at the zoo (auto-captions)');
  const t2 = await fetchYouTubeTranscript('jNQXAC9IVRw');
  console.log('Result:', t2 ? 'OK - ' + t2.substring(0, 200) : 'FAILED');
}
test();
