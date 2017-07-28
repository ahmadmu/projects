import { BurogiPage } from './app.po';

describe('burogi App', () => {
  let page: BurogiPage;

  beforeEach(() => {
    page = new BurogiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
