import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
type todo = {
	date?: Date;
	header: string;
	body?: string;
};

export const todos: Writable<todo[]> = writable([]);
