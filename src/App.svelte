<script>
import FeedbackForm from './components/FeedbackForm.svelte';

	import FeedbackList from './components/FeedbackList.svelte'
import FeedbackStats from './components/FeedbackStats.svelte';

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: "Lorem ipsum"
		},
		{
			id: 2,
			rating: 9,
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores laudantium, ipsa veniam soluta itaque distinctio. Optio dicta similique provident tempora non aliquid error pariatur repellendus. Incidunt totam voluptatem nulla."
		},
		{
			id: 3,
			rating: 8,
			text: "hello world"
		}
	]

	$: count = feedback.length
	$: average = feedback.reduce((a,{rating}) => a + rating, 0) /count

	const addFeedback = (e) => {
		feedback = [e.detail, ...feedback ]
	}

	const deleteFeedback = (e) => {
		console.log(e.detail)
		const itemId = e.detail;
		feedback = feedback.filter((item)=> item.id !== itemId);
	}
</script>

<main class="container">
	<FeedbackForm on:add-feedback={addFeedback}/>
	<FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
