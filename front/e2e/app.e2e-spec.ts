import { Src1Page } from './app.po';

describe('src1 App', () => {
  let page: Src1Page;

  beforeEach(() => {
    page = new Src1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
