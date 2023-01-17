<script setup>
import Cards from "../components/cards/Cards.vue";
import Photo from "../components/Photo.vue";

const textPresentation = ["Hola", "Soy Edson Cuno", "Estudiante de Ingeniería Informática", "Soy Edson Diego Cuno Tipso. Nací y resido en Lima - Perú. Soy estudiante de la Universidad Ricardo Palma, interesado en el desarrollo de aplicaciones y servicos web."]

const textTools = ["Herramientas utilizadas"];
const itemsTools = [
  { name: "React", classicon: "fa fa-brands fa-react fa-2xl" },
  { name: "Github", classicon: "fa fa-brands fa-github" },
  { name: "CSS3", classicon: "fa fa-brands fa-css3-alt" },
  { name: "HTML5", classicon: "fa fa-brands fa-html5" },
  { name: "Angular", classicon: "fa fa-brands fa-angular" },
  { name: "Vue.js", classicon: "fa fa-brands fa-vuejs" },
  { name: "NodeJS", classicon: "fa fa-brands fa-node-js" },
  { name: "Git", classicon: "fa fa-brands fa-git-alt" },
  { name: "Sass", classicon: "fa fa-brands fa-sass" },
  { name: "Gnu/Linux", classicon: "fa fa-brands fa-linux" },
]

const titleProjects = "Mis Proyectos";
const itemsProjects = [
  { titulo: "Flights NestJS", mensaje: "Backend de la aplicacion 'Flights' que administra el registro de los vuelos.", src: "https://i.postimg.cc/JzbgtWm7/nestjs-original-fligh.jpg", href: "https://github.com/edsoncuno/flights-nestjs" },
  { titulo: "Flights AngularJS", mensaje: "Frontend de la aplicacion 'Flights' hecha en AngularJS.", src: "https://i.postimg.cc/D0RLRgvj/angular.png", href: "https://github.com/edsoncuno/flights-angularjs" },
  { titulo: "Flights React", mensaje: "Frontend de la aplicacion 'Flights' hecha en React.", src: "https://i.postimg.cc/c4FFkMZW/rn.png", href: "https://github.com/edsoncuno/flights-react" },
  { titulo: "Flights Vue.js", mensaje: "Frontend de la aplicacion 'Flights' hecha en Vue.js.", src: "https://i.postimg.cc/P57bDdns/vuejs-ar21.png", href: "https://github.com/edsoncuno/flights-vuejs" },
  { titulo: "Panaderia Vue.js", mensaje: "Pagina web como ejemplo para una panaderia", src: "https://i.postimg.cc/L6dsdtBv/th.png", href: "https://github.com/edsoncuno/panaderia-vuejs" },
]
</script>

<template>
  <main>
    <div class="presentation">
      <div class="text1">{{ textPresentation[0] }}</div>
      <div class="text2">{{ textPresentation[1] }}</div>
      <div class="photo">
        <Photo />
      </div>
      <div class="text3">{{ textPresentation[2] }}</div>
      <div class="text4">{{ textPresentation[3] }}</div>
    </div>
    <div class="tools">
      <div class="title">{{ textTools[0]}}</div>
      <div class="icons">
        <div class="icon" v-for="item in itemsTools">
          <font-awesome-icon :icon="item.classicon" />
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="projects">
      <Cards :titulo="titleProjects" :items="itemsProjects" />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 3rem;

  .presentation {
    display: flex;
    flex-direction: column;

    .text1 {
      font-size: 1.5rem;
    }

    .text2 {
      font-size: 3rem;
      font-weight: bold;
    }
    .photo {
      display: none;
      margin: auto;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }
    @media all and (max-width:890px) {
      .photo {
        width: 50%;
        display: flex;
      }
    }
    @media all and (max-width:600px) {
      .photo {
        width: 80%;
      }
    }
    .text3 {
      font-size: 2rem;
    }

    .text4 {
      padding-top: 1rem;
      font-size: 1.2rem;
    }
  }

  .tools {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .title {
      font-size: 2rem;
      font-weight: bold;
    }

    .icons {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      .icon {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        margin: 0rem 0.5rem;

        .name {
          font-size: 1rem;
        }
      }
    }
  }

  .projects {
    margin: 2rem 0rem;
  }
}
</style>