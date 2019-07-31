export class App {
  private dave: string;
  sam: string;

  constructor() {
    this.dave = 'its dave!';
    this.sam = 'damn! sam';
  }

  public get _dave() {
    return this.dave;
  }
}
