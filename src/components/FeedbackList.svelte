<script>
  import FeedbackItem from "./FeedbackItem.svelte";

  export let feedback = [];
</script>

{#each feedback as feedItem (feedItem.id)}
  <FeedbackItem {feedItem} on:delete-feedback />
{/each}
