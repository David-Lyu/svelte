import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { todo } from '$lib/todos/types/todo';

export const todos: Writable<todo[]> = writable([]);
