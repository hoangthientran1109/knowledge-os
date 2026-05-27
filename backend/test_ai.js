const { OpenAI } = require('openai');

async function test() {
  const client = new OpenAI({
    apiKey: '17ae3301fb674a619530f1ac28392a27.Jy8KrAoEcj3eEV9-xkeAFCne',
    baseURL: 'https://ollama.com/v1'
  });
  try {
    const list = await client.models.list();
    console.log('Available models:');
    list.data.forEach(m => console.log(' -', m.id));
  } catch(e) {
    console.log('List error:', e.message);
  }
  try {
    const r = await client.chat.completions.create({
      model: 'llama3',
      messages: [{role:'user',content:'Say hi in 3 words'}],
      temperature: 0.7
    });
    console.log('Llama3 test:', r.choices[0].message.content);
  } catch(e) {
    console.log('Llama3 error:', e.message);
  }
  try {
    const r2 = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{role:'user',content:'Say hi'}],
      temperature: 0.7
    });
    console.log('gpt-4o-mini test:', r2.choices[0].message.content);
  } catch(e) {
    console.log('gpt-4o-mini error:', e.message);
  }
}
test();
