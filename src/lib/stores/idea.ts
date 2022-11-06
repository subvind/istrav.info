// export let appData = writable({});

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser ? window.localStorage.getItem('idea') ?? defaultValue : defaultValue;
 
const idea = writable<string>(initialValue);
 
idea.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('idea', value);
  }
});
 
export default idea;