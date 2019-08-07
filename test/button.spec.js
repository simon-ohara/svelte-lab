import Button from '@/button.svelte';
import { render, cleanup } from '@testing-library/svelte'

beforeEach(cleanup);

describe('Button', () => {
  it('can have its label set by props', () => {
    const label = 'My Button';
    const { getByText } = render(Button, { props: { label }});
    expect(getByText(label, { selector: 'button' }));
  });
});

