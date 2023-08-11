<script>
  import Header from './lib/Header.svelte';
  import ProjectCategory from './lib/project/ProjectCategory.svelte';
  import KnowledgeCategory from './lib/knowledge/KnowledgeCategory.svelte';
  import LanguageCategory from './lib/language/LanguageCategory.svelte';
  import AchievementCategory from './lib/achievement/AchievementCategory.svelte';
  import Background from './lib/background/Background.svelte';
</script>

<Background />
<Header />
<div class='container mb-5'>
  <div class='row'>
    <div class='col'>
      <ProjectCategory />
    </div>
    <div class='col'>
      <KnowledgeCategory />
      <LanguageCategory />
      <AchievementCategory />
    </div>
  </div>
</div>
