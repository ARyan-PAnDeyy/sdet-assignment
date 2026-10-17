import { test as base } from '@playwright/test';
import { InputPage } from '../pages/InputPage';
import { ResultPage } from '../pages/ResultPage';

type Pages = {
  inputPage: InputPage;
  resultPage: ResultPage;
};

export const test = base.extend<Pages>({
  inputPage: async ({ page }, use) => {
    await use(new InputPage(page));
  },
  resultPage: async ({ page }, use) => {
    await use(new ResultPage(page));
  },
});

export { expect } from '@playwright/test';