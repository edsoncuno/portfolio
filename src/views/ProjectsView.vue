<script setup>
import Cards from "../components/cards/Cards.vue";

const desarrollos = {
    titulo: "Proyectos desarrollados", items: [
        { titulo: "Flights NestJS", mensaje: "Backend de la aplicacion 'Flights' que administra el registro de los vuelos.", src: "https://i.postimg.cc/JzbgtWm7/nestjs-original-fligh.jpg", href: "https://github.com/edsoncuno/flights-nestjs" },
        { titulo: "Flights AngularJS", mensaje: "Frontend de la aplicacion 'Flights' hecha en AngularJS.", src: "https://i.postimg.cc/D0RLRgvj/angular.png", href: "https://github.com/edsoncuno/flights-angularjs" },
        { titulo: "Flights React", mensaje: "Frontend de la aplicacion 'Flights' hecha en React.", src: "https://i.postimg.cc/c4FFkMZW/rn.png", href: "https://github.com/edsoncuno/flights-react" },
        { titulo: "Flights Vue.js", mensaje: "Frontend de la aplicacion 'Flights' hecha en Vue.js.", src: "https://i.postimg.cc/P57bDdns/vuejs-ar21.png", href: "https://github.com/edsoncuno/flights-vuejs" },
        { titulo: "Panaderia Vue.js", mensaje: "Pagina web como ejemplo para una panaderia", src: "https://i.postimg.cc/L6dsdtBv/th.png", href: "https://github.com/edsoncuno/panaderia-vuejs" },
    ]
}

const endesarrollo = {
    titulo: "Proyectos en dessarrollo", items: [
        { titulo: "EMCO V1 React", mensaje: "Frontend de la App EMCO para administrar un inventario", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/emco-v1-react" },
        { titulo: "EMCO V1 Node.js", mensaje: "Backend de la App EMCO para administrar un inventario", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/emco-v1-nodejs" },
        { titulo: "EMCO NestJS", mensaje: "Backend de la App EMCO para administrar un inventario, esta version reemplaza la version EMCO V1", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/emco-nestjs" },
        { titulo: "EMCO Vue.js", mensaje: "Frontend de la App EMCO para administrar un inventario, esta version reemplaza la cersion EMCO V1", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/emco-vuejs" },
        { titulo: "Platzi auth", mensaje: "Curso de authentificacion de Platzi", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/platzi-auth" },
        { titulo: "IA Vue.js", mensaje: "Ejercicios de inteligencia artificial hechos en JS.", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/ia-vuejs" },
        { titulo: "EDA Vue.js", mensaje: "Ejercicios de estrucutura de datos hecho en JS", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/eda-vuejs" },
        { titulo: "Platzi auth", mensaje: "Curso de authentificacion de Platzi", src: "https://i.postimg.cc/hGb92hKs/question.jpg", href: "https://github.com/edsoncuno/platzi-auth" },
    ]
}
</script>
<template>
    <main>
        <Cards :titulo="desarrollos.titulo" :items="desarrollos.items" />
        <Cards :titulo="endesarrollo.titulo" :items="endesarrollo.items" />
    </main>
</template>
<style scoped>
main {
    padding: 3rem;
}
</style>