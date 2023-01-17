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
        <div class="container">
            <div class="imagen">
                <img :src="src" alt="" />
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

    .container {
        color: black;
        display: flex;
        flex-wrap: wrap;
        border-radius: 1rem;
        transition: all 0.25s ease;

        .imagen {
            padding: 1rem;
            width: 30%;

            img {
                width: 100%;
                height: 8rem;
                border-radius: 1rem;
            }

        }

        .descripcion {
            width: 70%;
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

        @media all and (max-width: 890px) {
            .imagen {
                margin: 0 auto;
                width: 50%;

                img {
                    height: 8rem;
                }
            }

            .descripcion {
                width: 100%;
                align-items: center;
                padding: 0 0.5rem;
                .mensaje {
                    text-align: justify;
                }
            }
        }

        @media all and (max-width: 600px) {
            .imagen {
                width: 80%;
            }
        }
    }

    @media all and (max-width: 890px) {
        .container {
            padding-bottom: 0.5rem;
        }
    }

    .container:hover {
        box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.2);
        transform: scale(1.01)
    }
}
</style>