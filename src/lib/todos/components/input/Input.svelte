<script>
	let todo = {};

	onSubmit = (e, value) => {
		e.preventDefault();
		console.log('submited');
	};
</script>

<h4>Add A Todo:</h4>
<form>
	<label>Todo</label>
	<input />
	<label>Description</label>
	<input />
	<label>Date</label>
	<input />

	<input type="submit" />
</form>
