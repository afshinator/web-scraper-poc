export interface ConfigEntry {
  url: string;
  kind: string;
  saveSnapshots: boolean;
  snapshotDetails: { frequency: string; recordsToStore: number };
}

export const ENDPOINTS: Record<string, ConfigEntry> = {
  TE_CHINA_M2: {
    url: "https://tradingeconomics.com/china/money-supply-m2",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },
  TE_US_M2: {
    url: "https://tradingeconomics.com/united-states/money-supply-m2",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },
  TE_JAPAN_M2: {
    url: "https://tradingeconomics.com/japan/money-supply-m2",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },
  TE_EURO_M2: {
    url: "https://tradingeconomics.com/euro-area/money-supply-m2",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },
  TE_UK_M2: {
    url: "https://tradingeconomics.com/united-kingdom/money-supply-m2",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },
  ALL_MONEY_SUPPLY: {
    url: "https://tradingeconomics.com/country-list/money-supply-m2",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },

  },
  FED_BALANCE_SHEET: {
    url: "https://tradingeconomics.com/united-states/central-bank-balance-sheet",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },
  US_TGA_BALANCE: {
    url: "https://tradingeconomics.com/united-states/deposits-with-federal-reserve-banks-other-than-reserve-balances-u-s-treasury-general-account-bil-of-$-w-nsa-fed-data.html",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },
  US_REVERSE_REPO: {
    url: "https://tradingeconomics.com/united-states/overnight-reverse-repurchase-agreements-total-securities-sold-by-the-federal-reserve-in-the-temporary-open-market-operations-fed-data.html",
    kind: "web",
    saveSnapshots: true,
    snapshotDetails: { frequency: "daily", recordsToStore: 7 },
  },

};

export const EXCLUSION_LIST: string[] = [
  ".aspNetHidden",
  ".navbar",
  ".te-chat-widget",
  ".ad-div",
  ".ad-container",
  ".te-footer",
  ".pagetabs",
  ".pagemenu",
  "#sidebar",
  '[id$="_DivArticles"]', // CSS selector for "ID ends with _DivArticles"
];
