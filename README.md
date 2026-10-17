# AgriChain SDET Assignment – Aryan Pandey

## Project structure

```
sdet-assignment/
├── problem1/
│   └── LongestSubstring.java
└── problem2/
    ├── AgriChain_TestCases.xlsx
    ├── playwright.config.ts
    ├── pages/
    │   ├── InputPage.ts
    │   └── ResultPage.ts
    ├── fixtures/
    │   └── pages.ts
    ├── test-data/
    │   └── inputs.json
    └── tests/
        └── longestSubstring.spec.ts
```

## Problem 1

Length of the longest substring without repeating characters.

How to run the Program
```bash
cd problem1
javac LongestSubstring.java
java LongestSubstring
```
## Problem 2

**Test cases:** `problem2/AgriChain_TestCases.xlsx` 

**Google Sheets:** https://docs.google.com/spreadsheets/d/1RZpA1FkFrTPRpiRdZ7ndU8VqQZSxdDZd3wR3rdKHXoU/edit?usp=sharing
**Automation:** Playwright + TypeScript, Page Object Model, data-driven tests

```bash
cd problem2
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

**Note:** The website is hypothetical, so locators are assumed and the tests will fail.`
