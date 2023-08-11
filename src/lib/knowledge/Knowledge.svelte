<script>
  export let name;
  export let items;
</script>

<div class='card'>
  <div class='card-body'>
    <h5 class='card-title'>{name}</h5>
    <p class='card-text'>
      {#each items as item}
        <span class='badge bg-primary me-1'>{item}</span>
      {/each}
    </p>
  </div>
</div>
