const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// TODO: Add RSS feed support

async function fetchNews() {
  const sources = [
    { name: 'Cointelegraph', url: 'https://api.allorigins.win/raw?url=https://cointelegraph.com' },
    { name: 'Decrypt', url: 'https://api.allorigins.win/raw?url=https://decrypt.co' },
    { name: 'CoinDesk', url: 'https://api.allorigins.win/raw?url=https://coindesk.com' },
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
