import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('http://localhost:5173'); // updated from 3000 to 5173
  }

  async login(username: string, password: string) {
    await this.page.fill('input[placeholder="Username"]', username);
    await this.page.fill('input[placeholder="Password"]', password);
    await this.page.click('button:text("Login")');
  }
}
