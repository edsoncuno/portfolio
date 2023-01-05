<script setup>
import Icon from "./Icon.vue";

const titulo = "Herramientas utilizadas";

const itemsIcon = [
    { text: "React", classicon: "fa fa-brands fa-react fa-2xl" },
    { text: "Github", classicon: "fa fa-brands fa-github" },
    { text: "CSS3", classicon: "fa fa-brands fa-css3-alt" },
    { text: "HTML5", classicon: "fa fa-brands fa-html5" },
    { text: "Angular", classicon: "fa fa-brands fa-angular" },
    { text: "Vue.js", classicon: "fa fa-brands fa-vuejs" },
    { text: "NodeJS", classicon: "fa fa-brands fa-node-js" },
    { text: "Git", classicon: "fa fa-brands fa-git-alt" },
    { text: "Sass", classicon: "fa fa-brands fa-sass" },
    { text: "Gnu/Linux", classicon: "fa fa-brands fa-linux" },
]
</script>

<template>
    <div class="herramientas">
        <div class="titulo">{{ titulo }}</div>
        <div class="iconos">
            <Icon v-for="item in itemsIcon" :text="item.text" :classicon="item.classicon" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.herramientas {
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;

    .titulo {
        font-size: 2rem;
        font-weight: bold;
    }

    .iconos {
        margin: 1rem 0rem 0rem 0rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}
</style>