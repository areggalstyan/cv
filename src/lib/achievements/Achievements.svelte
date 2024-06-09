<script>
  import TopBar from '../TopBar.svelte';
  import Achievement from './Achievement.svelte';
  import achievements from './achievements.json';
</script>

<TopBar title='Achievements' />
<div class='p-5 grid sm:grid-cols-2 gap-5'>
  {#each achievements as { title, date, award, link }}
    <Achievement {title} {date} {award} {link} />
  {/each}
</div>
