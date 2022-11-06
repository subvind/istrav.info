// export let appData = writable({});

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser ? window.localStorage.getItem('client') ?? defaultValue : defaultValue;
 
const client = writable<string>(initialValue);
 
client.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('client', value);
  }
});
 
export default client;