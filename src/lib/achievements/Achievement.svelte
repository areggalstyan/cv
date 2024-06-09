<script>
  import Fa from 'svelte-fa';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

  export let title;
  export let link;
</script>

<div class='border-8 border-tertiary p-5 bg-secondary flex flex-col'>
  <h2 class='text-2xl font-black'>{@html title}</h2>
  <a href={link} target='_blank' class='hover:underline'>
    <Fa icon={faArrowUpRightFromSquare} class='inline' />
    olymp.am
  </a>
</div>
