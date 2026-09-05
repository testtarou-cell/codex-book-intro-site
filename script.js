const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const exampleButton = document.querySelector('#example-button');
const promptExample = document.querySelector('#prompt-example');
const closeExample = document.querySelector('.close-example');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-scroll-to]').forEach((button) => button.addEventListener('click', () => {
  document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
}));

exampleButton?.addEventListener('click', () => {
  promptExample.hidden = false;
  promptExample.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
closeExample?.addEventListener('click', () => { promptExample.hidden = true; });
