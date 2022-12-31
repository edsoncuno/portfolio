<script setup>
defineProps({
    titulo: String,
    mensaje: String,
    src: String,
    href: String
})
</script>

<template>
    <a :href=href target="_blank">
        <div class="style">
            <div class="imagen">
                <img :src="src" :alt="titulo" />
            </div>
            <div class="descripcion">
                <div class="titulo">{{ titulo }}</div>
                <div class="mensaje">{{ mensaje }}</div>
            </div>
        </div>
    </a>
</template>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: black;

    .style {
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-template-rows: 1fr;
        border-radius: 1rem;
        transition: transform 0.25s;

        .imagen {
            padding: 1rem;

            img {
                width: 100%;
                height: 8rem;
                border-radius: 1rem;
            }

        }

        .descripcion {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .titulo {
                font-size: 1.5rem;
                font-weight: bold;
            }

            .mensaje {
                padding-top: 0.5rem;
                font-size: 1rem;
            }
        }
    }

    .style:hover {
        box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.2);
        transform: scale(1.02)
    }
}
</style>