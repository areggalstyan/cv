<script>
  import TopBar from '../TopBar.svelte';
  import Project from './Project.svelte';
  import projects from './projects.json';

  let selectedCategory = '';
</script>

<TopBar title='Projects' />
<ul class='flex gap-10 justify-center mt-5'>
  <li>
    <button class='hover:underline' on:click={() => selectedCategory = ''}>All</button>
  </li>
  <li>
    <button class='hover:underline' on:click={() => selectedCategory = 'JS'}>Web</button>
  </li>
  <li>
    <button class='hover:underline' on:click={() => selectedCategory = 'Java'}>Java</button>
  </li>
  <li>
    <button class='hover:underline' on:click={() => selectedCategory = 'C#'}>C#</button>
  </li>
  <li>
    <button class='hover:underline' on:click={() => selectedCategory = 'C'}>C</button>
  </li>
</ul>
<div class='p-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-5'>
  {#each projects as { title, link, tags, description }}
    {#if selectedCategory === '' || tags.includes(selectedCategory)}
      <Project {title} {link} {tags} {description} />
    {/if}
  {/each}
</div>
