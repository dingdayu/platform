import { type Locator, type Page } from '@playwright/test'

export class TrackerNavigationMenuPage {
  readonly page: Page
  readonly buttonIssues: Locator
  readonly buttonTemplates: Locator

  constructor (page: Page) {
    this.page = page
    this.buttonIssues = page.locator('a span', { hasText: 'Issues' })
    this.buttonTemplates = page.locator('a[href$="templates"]')
  }
}