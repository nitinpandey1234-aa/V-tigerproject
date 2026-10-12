
import { test ,Page,expect} from '@playwright/test';

export class loginPage{
    constructor(private page:Page){}

     async open() {
        await this.page.goto('http://localhost:8888/index.php?module=Users&action=Logout');
        await this.page.waitForTimeout(3000);
    }
    async loginuser(username:string,password:string){
        await this.page.locator('input[name="user_name"]').fill(username);
        await this.page.locator('input[name="user_password"]').fill(password);
        await this.page.locator('#submitButton').click();//    
          

    }
}
     