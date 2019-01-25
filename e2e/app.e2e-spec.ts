import { A2AdminPage } from './app.po';

describe('a2-admin App', () => {
  let page: A2AdminPage;

  beforeEach(() => {
    page = new A2AdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
