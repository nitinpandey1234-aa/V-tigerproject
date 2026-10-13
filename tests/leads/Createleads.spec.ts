import { test, expect } from '@playwright/test';
import { loginPage } from '../../pages/loginPage.spec.ts';
import { WebPage } from '../../pages/WebPage.spec.ts';
import { leadhome } from '../../pages/leadhome.spec.ts';
import { readLeadData } from '../utils/leadexcel';

test('Create Lead', async ({ page }) => {
    const login = new loginPage(page);
    await page.waitForTimeout(3000);

    const allLeads = await readLeadData();
  //  console.log(allLeads);

    const web = new WebPage(page);
    const lead = new leadhome(page);

    await login.open();
    await login.loginuser('admin', 'manager');
    await expect(page).toHaveURL('http://localhost:8888/index.php?action=index&module=Home');
    await expect(page).toHaveTitle('Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM');

    await web.clickLead();
    await web.geturl();
    await expect(page).toHaveURL('http://localhost:8888/index.php?module=Leads&action=index');

    
        await lead.clickIcon();
        for (const data of allLeads.slice(0, 1)) {
    await lead.fillLeadForm(data);
}
       
        await lead.save();
    }
);
