import { Angular2LearningPage } from './app.po';

describe('angular2-learning App', function() {
  let page: Angular2LearningPage;

  beforeEach(() => {
    page = new Angular2LearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
