import { ShoppingListPage } from './app.po';

describe('shopping-list App', () => {
  let page: ShoppingListPage;

  beforeEach(() => {
    page = new ShoppingListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
