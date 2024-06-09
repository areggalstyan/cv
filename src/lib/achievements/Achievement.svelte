<script>
  import Fa from 'svelte-fa';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

  export let title;
  export let link = null;
</script>

<div class='border-2 rounded border-tertiary p-5 bg-secondary flex flex-col'>
  <h2 class='text-2xl'>{@html title}</h2>
  {#if link}
    <a href={link} target='_blank' class='hover:underline'>
      <Fa icon={faArrowUpRightFromSquare} class='inline' />
      olymp.am
    </a>
  {/if}
</div>
