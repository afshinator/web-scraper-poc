import * as cheerio from "cheerio";

export const EXCLUSION_LIST: string[] = [
    ".aspNetHidden",
    ".navbar",
    ".pagetabs",
    ".te-chat-widget",
    ".ad-div",
    ".ad-container",
    ".te-footer",
    ".pagetabs",
    ".pagemenu",
    "#sidebar",
    "#anchor-ad-slot",
    "#summary",
    "script",
    "style",
    "noscript",
    "iframe",
    '[id$="_DivArticles"]',
    '[id$="_pageMenu"]',
    '[id$="_rightSideMenu"]',
];

export const processHtml = (html: string) => {
  const $ = cheerio.load(html);

  // 1. Remove unnecessary noise and the exclusion list
  $("script, style, noscript, iframe").remove();
  $(EXCLUSION_LIST.join(", ")).remove();

  // 2. Extract Tables (The "fine job" version)
  let tableOutput = "";
  $("table").each((_, table) => {
    $(table)
      .find("tr")
      .each((_, tr) => {
        const cells = $(tr)
          .find("th, td")
          .map((_, cell) => $(cell).text().trim())
          .get();
        if (cells.length > 0) tableOutput += cells.join(" | ") + "\n";
      });
    tableOutput += "\n---\n"; // Separator between different tables
  });

  // 3. Extract Cleaned Body Text
  const bodyText = $("body").text().replace(/\s+/g, " ").trim();

  return {
    tableData: tableOutput.trim(),
    textContent: bodyText,
  };
};
