import { test, expect } from '../fixtures/pages';
import data from '../test-data/inputs.json';

test.describe('Functional: output correctness', () => {
  for (const tc of data) {
    test(`${tc.id}: "${tc.input}" returns ${tc.expected}`, async ({ page, inputPage, resultPage }) => {
      await inputPage.goto();
      await inputPage.submitString(tc.input);

      await expect(page).toHaveURL(/\/qa\/result/);
      await expect(resultPage.outputValue).toHaveText(tc.expected);
    });
  }
});

test.describe('Validation and navigation', () => {
  test('empty input stays on the input page', async ({ page, inputPage }) => {
    await inputPage.goto();
    await inputPage.submitString('');

    await expect(page).toHaveURL(/\/qa\/input/);
  });

  test('Back to Home returns to an empty input page', async ({ page, inputPage, resultPage }) => {
    await inputPage.goto();
    await inputPage.submitString('abc');
    await resultPage.goBackHome();

    await expect(page).toHaveURL(/\/qa\/input/);
    await expect(inputPage.inputField).toHaveValue('');
  });

  test('new input after Back to Home shows the new result', async ({ inputPage, resultPage }) => {
    await inputPage.goto();
    await inputPage.submitString('abcabcbb');
    await expect(resultPage.outputValue).toHaveText('3');

    await resultPage.goBackHome();
    await inputPage.submitString('bbbbb');
    await expect(resultPage.outputValue).toHaveText('1');
  });
});