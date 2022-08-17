import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const todosStore: Writable<todo[]> = writable([]);
export const archivedTodosStore: Writable<todo[]> = writable([]);
