<script>
  import Tag from './Tag.svelte';
  import Fa from 'svelte-fa';
  import { faArrowUpRightFromSquare, faDownload } from '@fortawesome/free-solid-svg-icons';

  export let title;
  export let link;
  export let tags;
  export let description;
</script>

<div class='border-2 rounded border-tertiary inline-block p-5 bg-secondary'>
  <div class='flex flex-col sm:flex-row items-center'>
    <h2 class='text-2xl text-center flex items-center'>
      {#if title === 'Reforging'}
        Reforging <span class='text-base font-normal ml-3'><Fa icon={faDownload} class='inline' /> 5.3K+</span>
      {:else if title === 'Pets'}
        Pets <span class='text-base font-normal ml-3'><Fa icon={faDownload} class='inline' /> 2.6K+</span>
      {:else}
        {title}
      {/if}
    </h2>
    <a href={link.href} target='_blank' class='hover:underline sm:ml-auto'>
      <Fa icon={faArrowUpRightFromSquare} class='inline' />
      {link.name}
    </a>
  </div>
  <div class='mt-3'>
    {#each tags as tag}
      <Tag>{tag}</Tag>
    {/each}
  </div>
  <p>{description}</p>
</div>
