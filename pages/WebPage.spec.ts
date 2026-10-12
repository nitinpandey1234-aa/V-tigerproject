import { Locator, Page } from '@playwright/test';

export class WebPage {
    private page: Page;
    private lead:Locator;
     private org:Locator;
      private contact:Locator;



    constructor(page: Page) {
      this.page = page;
    this.lead  = this.page.locator('//a[@href="index.php?module=Leads&action=index"]');
     this.org = this.page.getByText('');
      this.contact = this.page.locator('');

    }
    async clickLead(){
      await   this.lead.click();

    }
     async clikorg(){
        this.org.click();

    }
     async clickcontact(){
        this.contact.click();

    }
    async geturl(){
       console.log( await this.page.url()) ;
    }
    
}