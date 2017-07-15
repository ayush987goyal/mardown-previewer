import { MardownPreviewerPage } from './app.po';

describe('mardown-previewer App', () => {
  let page: MardownPreviewerPage;

  beforeEach(() => {
    page = new MardownPreviewerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
