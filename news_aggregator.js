const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchNews() {
  const sources = [
    { name: 'Cointelegraph', url: 'https://api.allorigins.win/raw?url=https://cointelegraph.com' },
    { name: 'Decrypt', url: 'https://api.allorigins.win/raw?url=https://decrypt.co' }
  ];

  for (const source of sources) {
    try {
      const response = await fetch(source.url);
      const text = await response.text();
      console.log(`Fetched data from ${source.name}, length: ${text.length}`);
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error.message);
    }
  }
}

fetchNews();
