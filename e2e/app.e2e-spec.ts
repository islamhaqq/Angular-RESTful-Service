import { AJS2RESTfulServicePage } from './app.po';

describe('ajs2-restful-service App', function() {
  let page: AJS2RESTfulServicePage;

  beforeEach(() => {
    page = new AJS2RESTfulServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
