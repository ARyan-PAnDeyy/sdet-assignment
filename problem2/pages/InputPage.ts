import {Page , Locator} from '@playwright/test';

export class InputPage {
    readonly page:Page;
    readonly inputField: Locator;
    readonly submitButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.inputField = page.locator('#inputString');
        this.submitButton = page.getByRole('button',{name : 'Submit'});
    }

    async goto(){
        await this.page.goto('/qa/input');
    }

    async submitString(text: string){
        await this.inputField.fill(text);
        await this.submitButton.click();
    }
}