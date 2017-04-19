import { Ipm2Page } from './app.po';

describe('ipm2 App', () => {
  let page: Ipm2Page;

  beforeEach(() => {
    page = new Ipm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
