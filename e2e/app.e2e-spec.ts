import { DihlappbgadPage } from './app.po';

describe('dihlappbgad App', function() {
  let page: DihlappbgadPage;

  beforeEach(() => {
    page = new DihlappbgadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
