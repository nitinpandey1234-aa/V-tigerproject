import { test, Page, expect, Locator } from '@playwright/test';
import { LeadData } from '../tests/utils/leadexcel';

export class leadhome{

private icon:Locator;
private drop:Locator;
 private lastName: Locator;
   private company: Locator;
   private title: Locator;
  private  phone: Locator;
   private email: Locator;
   private website: Locator;
   private button:Locator






constructor(private page: Page) {
    this.icon = this.page.getByTitle('Create Lead...');
    this.drop = this.page.locator('.small');
    this.lastName = this.page.locator('input[name="lastname"]');
    this.company = this.page.locator('//input[@name="company"]');
    this.title = this.page.locator('#designation');
    this.phone = this.page.locator('#phone');
    this.email = this.page.locator('#email');
    this.website = this.page.locator('input[name="website"]');
    this.button = this.page.locator('input[title="Save"], input[value="Save"], button:has-text("Save")').first();
}

async dropdown(){
  await this.drop.selectOption('Mr.');
}

async clickIcon()
{
   await this.icon.click();
}
async getUrl(){
  console.log(await this.page.url());
}
async save(){
  await this.button.waitFor({ state: 'visible' });
  await this.button.click();
}

async fillLeadForm(data: LeadData) {
    await this.lastName.fill(data.lastName);
    await this.company.fill(data.company);
    await this.title.fill(data.title);
    await this.phone.fill(data.phone);
    await this.email.fill(data.email);
    await this.website.fill(data.website);
}

}
