import { AngularLearningProjectPage } from './app.po';

describe('angular-learning-project App', () => {
  let page: AngularLearningProjectPage;

  beforeEach(() => {
    page = new AngularLearningProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
