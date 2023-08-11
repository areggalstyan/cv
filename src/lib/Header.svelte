<script>
  import photo from '../assets/photo.jpg';
  import {
    faEnvelope,
    faLocationDot,
    faSchool,
    faSquareRootVariable,
    faAtom,
    faCode,
    faBirthdayCake
  } from '@fortawesome/free-solid-svg-icons';
  import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
  import Info from './Info.svelte';
</script>

<header class='pt-5'>
  <div class='container'>
    <div class='d-flex gap-5 justify-content-center align-items-center header-content'>
      <img src={photo} alt='' class='rounded-circle border header-photo'>
      <div class='header-info'>
        <h1 class='display-5'>Hi, I'm Areg Galstyan</h1>
        <div class='card'>
          <div class='card-body'>
            <p class='card-text'>
              <Info icon={faBirthdayCake}>14</Info>
              <Info icon={faLocationDot}>Yerevan, Armenia</Info>
              <Info icon={faSchool}>PhysMath School after A. Shahinyan</Info>
              <Info icon={faSquareRootVariable}>Mathematics</Info>
              <Info icon={faAtom}>Physics</Info>
              <Info icon={faCode}>Programming</Info>
              <Info icon={faEnvelope}>areg.galstyan.levon@gmail.com</Info>
              <Info icon={faDiscord}>areggalstyan</Info>
              <Info icon={faGithub}>areggalstyan</Info>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  .header-photo {
      width: 15rem;
  }

  @media only screen and (max-width: 1024px) {
      .header-content {
          flex-direction: column;
      }

      .header-info {
          text-align: center;
      }
  }
</style>
