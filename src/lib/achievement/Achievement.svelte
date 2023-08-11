<script>
  export let year;
  export let file = undefined;
</script>

<div class='card'>
  <div class='card-body'>
    <h5 class='card-title'><slot /></h5>
    <h6 class='card-subtitle text-body-secondary' class:mb-2={file}>{year}</h6>
    {#if file}
      <a href='https://olymp.am/sites/default/file/problems/{file}' target='_blank' class='card-link'>File</a>
    {/if}
  </div>
</div>
