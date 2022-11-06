// export let appData = writable({});

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser ? window.localStorage.getItem('namespace') ?? defaultValue : defaultValue;
 
const namespace = writable<string>(initialValue);
 
namespace.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('namespace', value);
  }
});
 
export default namespace;