<script>
  import Background from './lib/background/Background.svelte';
  import Main from './lib/main/Main.svelte';
  import Projects from './lib/projects/Projects.svelte';
  import Knowledge from './lib/knowledge/Knowledge.svelte';
  import Achievements from './lib/achievements/Achievements.svelte';
  import { hash } from './lib/hash';

  const componentsByAnchor = {
    '#projects': Projects,
    '#knowledge': Knowledge,
    '#achievements': Achievements
  }
</script>

<Background />
<div class='absolute inset-0'>
  <svelte:component this={componentsByAnchor[$hash] || Main} />
</div>
