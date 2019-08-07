import '@/index';

describe('index entry', () => {
  it('renders the App component into #target-element', () => {
    expect(document.getElementById('target-element').innerHTML).toContain('Test Application');
  });
});
