import { App } from '../src/app';

describe('App', () => {
  it('has a public method dave', () => {
    expect((new App())._dave).toBe('its dave!');
  });

  it.todo('something to do');

  it('has a private method sam', () => {
    expect((new App()).sam).toBe('damn! sam')
  });
});
