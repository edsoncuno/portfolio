<script setup>
import Card from "./Card.vue";

const titulo = "Mis Proyectos"
const items = [
    { titulo: "Flights NestJS", mensaje: "Backend de la aplicacion 'Flights' que administra el registro de los vuelos.", src: "https://i.postimg.cc/JzbgtWm7/nestjs-original-fligh.jpg", href: "https://github.com/edsoncuno/flights-nestjs" },
    { titulo: "Flights AngularJS", mensaje: "Frontend de la aplicacion 'Flights' hecha en AngularJS.", src: "https://i.postimg.cc/D0RLRgvj/angular.png", href: "https://github.com/edsoncuno/flights-angularjs" },
    { titulo: "Flights React", mensaje: "Frontend de la aplicacion 'Flights' hecha en React.", src: "https://i.postimg.cc/c4FFkMZW/rn.png", href: "https://github.com/edsoncuno/flights-react" },
    { titulo: "Flights Vue.js", mensaje: "Frontend de la aplicacion 'Flights' hecha en Vue.js.", src: "https://i.postimg.cc/P57bDdns/vuejs-ar21.png", href: "https://github.com/edsoncuno/flights-vuejs" },
]

</script>

<template>
    <div class="style">
        <div class="titulo">{{ titulo }}</div>
        <div v-for="(item, index) in items">
            <hr v-show="index != 0">
            <Card :titulo="item.titulo" :mensaje="item.mensaje" :src="item.src" :href="item.href" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.style {
    margin: 1.5rem 0rem;

    .titulo {
        font-size: 2rem;
        font-weight: bold;
    }
}
</style>