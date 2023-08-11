<script>
  import { onMount } from 'svelte';
  import Renderer from './renderer';

  let canvas;
  let renderer;
  onMount(() => (renderer = new Renderer(canvas)).init());
</script>

<svelte:window on:resize={() => renderer.resize()} />
<canvas bind:this={canvas} class='w-100 h-100 position-fixed z-n1'></canvas>
