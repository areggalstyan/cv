<script>
  import InlineFa from './InlineFa.svelte';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

  export let title;
</script>

<div class='p-5 border-b-2 border-secondary'>
  <h1 class='text-4xl'>
    <a href='#/'>
      <InlineFa icon={faArrowLeft} />
    </a>
    {title}
  </h1>
</div>
