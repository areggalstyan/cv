<script>
  import photo from '../../assets/photo.jpg';
  import InlineFa from '../InlineFa.svelte';
  import { faLocationDot, faSchool } from '@fortawesome/free-solid-svg-icons';
</script>

<div class='w-full text-center mt-5'>
  <img src={photo} alt='' class='w-32 h-32 rounded-full inline-block xl:hidden'>
</div>
<h1 class='text-center mt-5 text-6xl font-thin'>Areg Galstyan</h1>
<p class='text-center mt-5'>
  <InlineFa icon={faLocationDot} />
  Yerevan, Armenia<br>
  <InlineFa icon={faSchool} />
  A. Shahinyan PhysMath School
</p>
