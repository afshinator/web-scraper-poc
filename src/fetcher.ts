import fetch from 'node-fetch';

/**
 * Fetches a single URL and returns raw HTML string.
 */
export const fetchPage = async (url: string): Promise<string> => {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' } // Useful for TradingEconomics
  });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  return response.text();
};