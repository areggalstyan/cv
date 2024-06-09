<script>
  export let title;
  export let tags;
</script>

<div class='border-8 border-tertiary p-5 bg-secondary flex flex-col'>
  <h2 class='text-4xl font-black'>{title}</h2>
  <div class='mt-3'>
    {#each tags as tag, i}
      <span class='text-xl'>{tag}{i === tags.length - 1 ? '' : ', '}</span>
    {/each}
  </div>
</div>
