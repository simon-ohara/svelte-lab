import App from '@/app.svelte';
import { render, cleanup } from '@testing-library/svelte'

beforeEach(cleanup);

describe('App', () => {
  it('has a default title', () => {
    const title = 'Default Title';
    const { getByText } = render(App);
    expect(getByText(title, { selector: 'h3' }));
  });

  it('can have its title set by props', () => {
    const title = 'Hello World!';
    const { getByText } = render(App, { props: { title }});
    expect(getByText(title, { selector: 'h3' }));
  });

  it('has a save button', () => {
    const { getByText } = render(App);
    expect(getByText('Save Button', { selector: 'button' }));
  });
});
