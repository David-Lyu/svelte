<script lang="ts">
	import { todosStore } from '../../../utils/store/store.ts';
	import type { todo } from '$lib/todos/types/todo.d.ts';
	let userInput = {
		header: ''
	};

	let isHeaderTouched = false;
	let isHeaderValid = false;

	const onKeyDown = (e) => {
		console.log(e);
		if (e.currentTarget.value.length > 0) {
			isHeaderTouched = true;
		}
	};

	const onSubmit = (e, value) => {
		e.preventDefault();
		if (!userInput.header) {
			//should alert user that this field cannot be blank
			isHeaderValid = false;
			return;
		}
		console.log(userInput);
		todosStore.update((todos) => {
			isHeaderTouched = false;
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
	<div>
		<input id="todo" bind:value={userInput.header} on:keydown={onKeyDown} />
		{#if isHeaderTouched && !isHeaderValid}
			<p>This field cannot be blank</p>
		{/if}
	</div>
	<label name="description">Description</label>
	<input id="description" bind:value={userInput.description} />
	<label name="date">Date</label>
	<input id="date" bind:value={userInput.date} />

	<input type="submit" />
</form>
