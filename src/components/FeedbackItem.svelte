<script>
  import Card from "./Card.svelte";
  import {createEventDispatcher} from 'svelte';
  export let feedItem;

  const dispatch = createEventDispatcher();

  const handleDelete = (id) => {
    console.log(id)
    dispatch('delete-feedback', id)
  }
</script>

<Card>
  <div class="num-display">
    {feedItem.rating}
  </div>
  <button class="close" on:click={(e)=> handleDelete(feedItem.id)}>
    X
  </button >
  <p class="text-display">
    {feedItem.text}
  </p>
</Card>

<style>
    .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
