import { writable } from 'svelte/store';

export const hash = writable(window.location.hash);

window.addEventListener('hashchange', () => hash.set(window.location.hash));
