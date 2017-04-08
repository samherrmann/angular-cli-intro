import { browser, element, by } from 'protractor';

export class Forward2017Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fw-root h1')).getText();
  }
}
