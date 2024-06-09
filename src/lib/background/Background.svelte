<script>
  import { onMount } from 'svelte';
  import Renderer from './renderer';

  let canvas;
  let renderer;
  onMount(() => (renderer = new Renderer(canvas)).init());
</script>

<svelte:window on:resize={() => renderer.resize()} />
<canvas bind:this={canvas} class='fixed -z-10'></canvas>
