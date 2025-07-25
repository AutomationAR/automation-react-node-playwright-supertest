import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('valid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('admin', 'admin');
  await expect(page.locator('text=Add')).toBeVisible();
});

test('invalid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('admin', 'wrong');
  await expect(page.locator('text=Login')).toBeVisible();
});
