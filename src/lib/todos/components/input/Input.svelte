<script lang="ts">
	import { todosStore } from '../../../utils/store/store.ts';
	import type { todo } from '$lib/todos/types/todo.d.ts';
	let userInput = {
		header: ''
	};

	const onSubmit = (e, value) => {
		e.preventDefault();
		console.log(userInput);
		todosStore.update((todos) => {
			console.log(todos);
			userInput = {
				header: ''
			};
			return [...todos, userInput];
		});
	};
</script>

<h4>Add A Todo:</h4>
<form on:submit={onSubmit}>
	<label name="todo">Todo</label>
	<input id="todo" bind:value={userInput.header} />
	<label name="description">Description</label>
	<input id="description" bind:value={userInput.description} />
	<label name="date">Date</label>
	<input id="date" bind:value={userInput.date} />

	<input type="submit" />
</form>
