<script>
  export let title;
  export let tags;
</script>

<div class='border-2 rounded border-tertiary p-5 bg-secondary flex flex-col'>
  <h2 class='text-2xl'>{title}</h2>
  <div class='mt-3'>
    {#each tags as tag, i}
      {tag}{i === tags.length - 1 ? '' : ', '}
    {/each}
  </div>
</div>
