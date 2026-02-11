import { ENDPOINTS, type ConfigEntry } from "./config.js";
import { fetchPage } from "./fetcher.js";
import { 
  processHtml, 
   
} from "./cleaners.js";

const OUTPUT_LEN = 2500; // Increased to see more historical data

async function runTask(targetKey?: keyof typeof ENDPOINTS): Promise<void> {
  const entries: [string, ConfigEntry][] = targetKey 
    ? (ENDPOINTS[targetKey] ? [[targetKey, ENDPOINTS[targetKey]]] : [])
    : Object.entries(ENDPOINTS);

  for (const [key, config] of entries) {
    console.log(`\n>>> EXECUTING: ${key}`);

    try {
      const rawHtml = await fetchPage(config.url);
      

      const { tableData, textContent } = processHtml(rawHtml);


      console.log(`[${key}] Final Table Rows: ${tableData.split('\n').length}`);
      console.log(`[${key}] Text Chars: ${textContent.length}`);

      console.log(`\n--- FINAL DATA OUTPUT ---\n${tableData}...`);
      console.log(`\n--- BODY TEXT ---\n${textContent}...`);
    } catch (err) {
      console.error(`[${key}] Failed:`, err instanceof Error ? err.message : err);
    }
  }
}



// runTask("TE_CHINA_M2");
// runTask("TE_US_M2");
// runTask("TE_JAPAN_M2");
// runTask("TE_EURO_M2");
// runTask("TE_UK_M2");
// runTask("ALL_MONEY_SUPPLY");
// runTask("FED_BALANCE_SHEET");
runTask("US_TGA_BALANCE");
runTask("US_REVERSE_REPO");