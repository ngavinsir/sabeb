import { SabebPage } from './app.po';

describe('sabeb App', () => {
  let page: SabebPage;

  beforeEach(() => {
    page = new SabebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
