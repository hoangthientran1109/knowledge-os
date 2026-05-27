const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
  const url = 'https://feeds.bbci.co.uk/news/world/rss.xml';
  try {
    const r = await axios.get(url, {timeout:10000, headers:{'User-Agent':'Mozilla/5.0'}});
    const cparser = cheerio.load(r.data, {xmlMode:true});
    console.log('BBC item count:', cparser('item').length);
    console.log('BBC entry count:', cparser('entry').length);
  } catch(e) {
    console.log('BBC Error:', e.message);
  }

  const url2 = 'https://hnrss.org/frontpage';
  try {
    const r2 = await axios.get(url2, {timeout:10000, headers:{'User-Agent':'Mozilla/5.0'}});
    const c2 = cheerio.load(r2.data, {xmlMode:true});
    console.log('HN item count:', c2('item').length);
  } catch(e) {
    console.log('HN Error:', e.message);
  }
}
test();
