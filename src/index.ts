import App from '@/app.svelte';

const target = document.createElement('div');
target.id = 'target-element';
document.body.append(target);

const title = 'Test Application';

const app = new App({
  target,
  props: { title }
});

