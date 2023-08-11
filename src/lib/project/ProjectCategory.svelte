<script>
  import Category from '../Category.svelte';
  import Project from './Project.svelte';
  import Downloads from './Downloads.svelte';

  const reforgingLinks = {
    'SpigotMC': 'https://www.spigotmc.org/resources/105707/',
    'bStats': 'https://bstats.org/plugin/bukkit/Reforging/16827'
  };
  const petsLinks = {
    'SpigotMC': 'https://www.spigotmc.org/resources/106830/',
    'bStats': 'https://bstats.org/plugin/bukkit/Pets/17178'
  };
</script>

<Category name='Projects'>
  <Project name='DeltaLang' technologies={['Java', 'Gson', 'Gradle']} github='deltalang'>
    DeltaLang is a simple interpreted programming language
  </Project>
  <Project name='QuarkEngine' technologies={['C', 'OpenGL', 'GLFW', 'GLSL']} github='quarkengine'>
    QuarkEngine is a simple graphics engine written using OpenGL and GLFW, capable of real-time rendering of basic 3D
    shapes
  </Project>
  <Project name='Reforging' technologies={['Java', 'Guava', 'Gson', 'Exp4j', 'Spigot', 'Gradle']} github='reforging'
           links={reforgingLinks}>
    Reforging is a new mechanic for enhancing weapons with various stat boosts and unique abilities
    <Downloads>2.5</Downloads>
  </Project>
  <Project name='Pets' technologies={['Java', 'Guava', 'Gson', 'Exp4j', 'Spigot', 'Gradle']} github='pets'
           links={petsLinks}>
    Pets are a new mechanic for enhancing the combat experience by providing various stat boosts
    <Downloads>1.5</Downloads>
  </Project>
  <Project name='Delta' technologies={[
          'Java', 'Guava', 'Gson', 'Reflections', 'Spigot', 'Jackson', 'Gradle API', 'Doclet', 'Gradle', 'Lombok'
          ]} github='delta'>
    Delta is the backbone of my plugins: Reforging and Pets
  </Project>
  <Project name='Sea battle' technologies={['C#', 'Unity']} github='Sea-battle'>
    Sea battle is a virtual board for the eponymous board game for two
  </Project>
  <Project name='violin.am' technologies={[
          'JS', 'HTML', 'CSS', 'Node.js', 'Svelte', 'SvelteKit', 'Leaflet', 'Tailwind CSS', 'Strapi', 'Vercel'
          ]} links={{ 'Website': 'https://www.violin.am/' }}>
    violin.am is the biography website of an armenian violinist Anahit Tsitsikyan.
  </Project>
  <Project name='Photon' technologies={['Java', 'Gson', 'Gradle']} github='photon'>
    Photon is a simple mathematical expression evaluator that supports variables
  </Project>
  <Project name='WebTracker' technologies={['JS', 'HTML', 'CSS', 'Node.js', 'Electron']} github='webtracker'>
    WebTracker is a simple password generator and manager
  </Project>
  <Project name={'Aregcraft\'s Plugins'} technologies={['JS', 'Node.js', 'Docusaurus', 'Markdown', 'Vercel']}
           github='aregcraft-plugins' links={{ 'Website': 'https://aregcraft.vercel.app/' }}>
    Aregcraft's Plugins is the official documentation website for my plugins
  </Project>
</Category>
