import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type Todos from '$lib/todos/components/todos/Todos.svelte';

export const todos: Writable<Todos[]> = writable([]);
export const archivedTodos: Writable<todo[]> = writable([]);
