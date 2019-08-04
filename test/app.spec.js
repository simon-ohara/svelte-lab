import App from '../src/app.svelte';
import { render, cleanup } from '@testing-library/svelte'

beforeEach(cleanup);

describe('App', () => {
  it('has a public method dave', () => {
    const { getByText } = render(App, { props: { name: 'world' } })
    expect(getByText('Hello world!'))
  });

  it('has a steve method sam', () => {
    const { getByText } = render(App, { props: { name: 'steve' } })
    expect(getByText('Hello steve!'))
  });
});
