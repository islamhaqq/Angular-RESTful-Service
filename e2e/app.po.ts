import { browser, element, by } from 'protractor';

export class AJS2RESTfulServicePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
