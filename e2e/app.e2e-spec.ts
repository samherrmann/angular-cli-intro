import { Forward2017Page } from './app.po';

describe('forward2017 App', () => {
  let page: Forward2017Page;

  beforeEach(() => {
    page = new Forward2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fw works!');
  });
});
