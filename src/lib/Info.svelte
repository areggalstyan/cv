<script>
  import Fa from 'svelte-fa';

  export let icon;
</script>

<span class='badge bg-success'><Fa icon={icon} /> <slot /></span>
