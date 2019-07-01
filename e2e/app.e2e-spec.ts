import { MontyHallPage } from './app.po';

describe('monty-hall App', () => {
  let page: MontyHallPage;

  beforeEach(() => {
    page = new MontyHallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
