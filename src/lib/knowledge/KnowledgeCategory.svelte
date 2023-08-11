<script>
  import Category from '../Category.svelte';
  import Knowledge from './Knowledge.svelte';
</script>

<Category name='Knowledge'>
  <Knowledge name='General' items={['Object-oriented programming', 'Patterns', 'Algorithms', 'Data structures']} />
  <Knowledge name='Java' items={[
          'Core language', 'Generics', 'Reflection', 'Annotation processing', 'Collections', 'I/O', 'Gson', 'Jackson',
          'Reflections', 'Exp4j', 'JUnit', 'Gradle', 'Gradle plugin development', 'Guava', 'Apache commons', 'Lombok',
          'Spigot'
        ]} />
  <Knowledge name='Web' items={[
          'JS', 'HTML', 'CSS', 'Node.js', 'Vite', 'Sass', 'Scss', 'Bootstrap', 'jQuery', 'Tailwind CSS', 'Svelte',
          'SvelteKit', 'Electron', 'Canvas API', 'Strapi', 'Leaflet', 'Markdown', 'Docusaurus', 'Vercel'
        ]} />
  <Knowledge name='C#' items={['Core language', 'Generics', 'Collections', 'I/O', 'Unity']} />
  <Knowledge name='C' items={['Core language', 'Memory management', 'I/O', 'OpenGL', 'GLFW', 'GLSL']} />
</Category>
