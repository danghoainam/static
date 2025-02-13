// Your CryptoCompare API key
export const apiKey = '431ff8c0f95eb55452d8d75732c02fb0cc7cf905cfa69803d6dd6cec0dcc07bd';

// Makes requests to CryptoCompare API
export async function makeApiRequest(path) {
  try {
    const url = new URL(`https://min-api.cryptocompare.com/${path}`);
    url.searchParams.append('api_key', apiKey);
    const response = await fetch(url.toString());
    return response.json();
  } catch (error) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

// Generates a symbol ID from a pair of the coins
export function generateSymbol(exchange, fromSymbol, toSymbol) {
  const short = `${fromSymbol}/${toSymbol}`;
  return {
    short,
  };
}

// Returns all parts of the symbol
export function parseFullSymbol(fullSymbol) {
  const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/);
  if (!match) {
    return null;
  }
  return { exchange: match[1], fromSymbol: match[2], toSymbol: match[3] };
}
