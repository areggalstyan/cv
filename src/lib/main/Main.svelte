<script>
  import photo from '../../assets/photo.jpg';
  import Header from './Header.svelte';
  import Menu from './Menu.svelte';
  import Contacts from './Contacts.svelte';
</script>

<div class='flex h-full'>
  <img src={photo} alt='' class='hidden xl:block'>
  <div class='w-full flex flex-col'>
    <Header />
    <Menu />
    <Contacts />
  </div>
</div>
