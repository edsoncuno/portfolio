<script setup>
import Presentation from "../components/home/Presentation.vue";
import Cards from "../components/cards/Cards.vue";

const titulo = "Mis Proyectos"
const items = [
  { titulo: "Flights NestJS", mensaje: "Backend de la aplicacion 'Flights' que administra el registro de los vuelos.", src: "https://i.postimg.cc/JzbgtWm7/nestjs-original-fligh.jpg", href: "https://github.com/edsoncuno/flights-nestjs" },
  { titulo: "Flights AngularJS", mensaje: "Frontend de la aplicacion 'Flights' hecha en AngularJS.", src: "https://i.postimg.cc/D0RLRgvj/angular.png", href: "https://github.com/edsoncuno/flights-angularjs" },
  { titulo: "Flights React", mensaje: "Frontend de la aplicacion 'Flights' hecha en React.", src: "https://i.postimg.cc/c4FFkMZW/rn.png", href: "https://github.com/edsoncuno/flights-react" },
  { titulo: "Flights Vue.js", mensaje: "Frontend de la aplicacion 'Flights' hecha en Vue.js.", src: "https://i.postimg.cc/P57bDdns/vuejs-ar21.png", href: "https://github.com/edsoncuno/flights-vuejs" },
  { titulo: "Panaderia Vue.js", mensaje: "Pagina web como ejemplo para una panaderia", src: "https://i.postimg.cc/L6dsdtBv/th.png", href: "https://github.com/edsoncuno/panaderia-vuejs" },
]

</script>

<template>
  <main class="homeview">
    <Presentation />
    <Cards :titulo="titulo" :items="items" />
  </main>
</template>

<style>
.homeview {
  margin: 0rem 5rem 0rem 25rem;
  padding-top: 3rem;
}
</style>