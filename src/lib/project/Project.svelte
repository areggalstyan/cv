<script>
  export let name;
  export let technologies;
  export let github = undefined;
  export let links = {};

  if (github) {
    links['GitHub'] = `https://github.com/areggalstyan/${github}`;
    links['README.md'] = `https://github.com/areggalstyan/${github}/blob/master/README.md`;
  }
</script>

<div class='card'>
  <div class='card-body'>
    <h5 class='card-title'>{name}</h5>
    <h6 class='card-subtitle mb-1 text-body-secondary'>
      {#each technologies as technology}
        <span class='badge bg-secondary me-1 mb-1'>{technology}</span>
      {/each}
    </h6>
    <p class='card-text'><slot /></p>
    {#each Object.entries(links) as [name, href]}
      <a {href} target='_blank' class='card-link'>{name}</a>
    {/each}
  </div>
</div>
