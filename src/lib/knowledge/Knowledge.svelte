<script>
  import TopBar from '../TopBar.svelte';
  import KnowledgeCategory from './KnowledgeCategory.svelte';
  import knowledge from './knowledge.json';
</script>

<TopBar title='Knowledge' />
<div class='p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
  {#each knowledge as { title, tags }}
    <KnowledgeCategory {title} {tags} />
  {/each}
</div>
