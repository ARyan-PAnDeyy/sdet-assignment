import { Page, Locator } from "@playwright/test";   

export class ResultPage{
    readonly page: Page;
    readonly outputValue: Locator;
    readonly backToHomeButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.outputValue = page.locator("#output");
        this.backToHomeButton = page.getByRole('button',{name:'Back To Home'});
    }

    async getOutput(): Promise<String>{
        return ((await this.outputValue.textContent()??'').trim());
    }

    async goBackHome(){
        await this.backToHomeButton.click();
    }
}