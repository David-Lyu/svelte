<script>
  import {v4 as uuidv4} from 'uuid';
  import {createEventDispatcher} from 'svelte'
  import Button from './Button.svelte'
  import RatingSelect from './RatingSelect.svelte';

  let btnDisabled = true;
  let text = '';
  let rating = 10;
  let min = 10;
  let message;

  const dispatch = createEventDispatcher();

  const handleSelect = e => rating = e.detail;
  const handleInput = (e) => {
    if(text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true;
      return;
    }
    message = null;
    btnDisabled = false;
  }
  const handleSubmit = () => {
    if(text.trim().length >= min) {
      const newFeedBack = {
        id: uuidv4(),
        text,
        rating: +rating,
      }
      console.log(newFeedBack)
      dispatch("add-feedback", newFeedBack)
      text = '';
    }
  }


</script>

<form on:submit|preventDefault={handleSubmit}>
  <RatingSelect on:rating-select={handleSelect} />
  <div class="input-group">
    <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
    {#if message}
      <div class="message">
        {message}
        </div>
    {/if}
    <Button type='submit' disabled={btnDisabled}>Send</Button>
  </div>
</form>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
