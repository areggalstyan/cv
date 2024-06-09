<script>
  import Fa from 'svelte-fa';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

  export let title;
  export let award;
  export let date;
  export let link;
</script>

<div class='border-2 rounded border-tertiary p-5 bg-secondary flex flex-col'>
  <h2 class='text-2xl'>{title} <span class='font-light'>–</span> <span class='font-semibold'>{@html award}</span></h2>
  <h3 class='text-xl'>{date}</h3>
  {#if link}
    <a href={link} target='_blank' class='hover:underline'>
      <Fa icon={faArrowUpRightFromSquare} class='inline' />
      olymp.am
    </a>
  {/if}
</div>
