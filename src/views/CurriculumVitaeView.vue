<script setup>
import html2pdf from "html2pdf.js";

function descargar() {
    let element = document.getElementById("element-to-print");
    let opt = {
        filename: 'curriculum-vitae.pdf',
        html2canvas: { scale: 6 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
}

/** DATOS*/

const cursos = [
    {
        nombre: "Mantenimiento y Reparación de celulares y tablets",
        lugar: 'idat',
        fecha: '2019'
    },
    {
        nombre: "Reparación de computadoras",
        lugar: 'El centro cultural de telecomunicaciones Hector Delgado Parker, a través de la "Asociación Ingenieros UNI"',
        fecha: '2011'
    },
    {
        nombre: "Diseño Gráfico",
        lugar: 'El centro cultural de telecomunicaciones Hector Delgado Parker, a través de la "Asociación Ingenieros UNI"',
        fecha: '2011'
    }
]

const superior = [
    {
        nombre: "10º Ciclo de Ingeniería Informática",
        lugar: 'Universidad Ricardo Palma',
        fecha: ' 2015-2022'
    },
    {
        nombre: "3º Ciclo de Ingeniería Mecatrónica",
        lugar: 'Universidad Ricardo Palma',
        fecha: '2014-2015'
    }
]

const utilizados = [
    'React',
    'Vue.js',
    'NestJS',
    'AngularJS',
    'Visual Studio Code (JavaScript, TypeScript, HTML, CSS, SASS)',
    'Gnu/Linux (Ubuntu, Debian, Archlinux)',
    'Visual Studio Community (C#, Visual Basic)',
    'Netbeans (Java)',
    'Node.js'
]

const datos = [
    { nombre: "Email", valor: "edsoncuno1@gmail.com" },
    { nombre: "Teléfono Celular", valor: "970555161" },
    { nombre: "Dirección", valor: "Av. Rio Perene Mz E Lt 16 Urb Sol de Vitarte Sector G - Ate Vitarte" },
    { nombre: "DNI", valor: "73205427" },
];

/** STYLE */

const styleBorder = {
    width: "794px",
    height: "1120px",
    boxShadow: "0px 15px 15px 15px rgba(0, 0, 0, 0.2)"
}

const styleCv = {
    fontFamily: "system-ui, sans-serif"
}
const styleTitulo = {
    width: "100%",
    textAlign: "center",
    fontSize: "3rem",
    paddingBottom: "1rem",
}

const styleColumnas = {
    with: "100%",
    display: "grid",
    gridTemplateColumns: "35% 65%",
    gridTemplateRows: "1fr"
}

const styleColumnaIzquierda = {
    paddingLeft: "0.5rem",
    backgroundColor: "#415D65",
    color: "white"
}

const styleColumnaDerecha = {
    paddingLeft: "2rem"
}

const styleSubtitulo = {
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: "bolder",
    padding: "1rem 0rem",
}

const styleDato = {
    margin: "2rem 0rem",
}

const styleDatoNombre = {
    width: "100%",
    fontSize: "1rem",
    fontWeight: "bolder",
    marginBottom: "1rem"
}

const styleDatoValor = {
    width: "100%",
    fontSize: "1rem",
}

const styleDatoLink = {
    color: "#0000ee",
}

const styleNombre = {
    width: "100%",
    fontSize: "2rem",
    fontWeight: "bolder",
}

const styleSubSubtitulo = {
    width: "100%",
    fontSize: "1rem",
    fontWeight: "bolder",
}

const styleEducacionBox = {
    paddingLeft: "2rem",
    margin: "1rem 0rem",
}

</script>
<template>
    <main>
        <div class="container">
            <button @click="descargar">Descargar CV como pdf</button>
            <div class="sheet" id="element-to-print" :style="styleBorder">
                <div :style="styleCv">
                    <div :style="styleTitulo">Curriculum Vitae</div>
                    <div :style="styleColumnas">
                        <div :style="styleColumnaIzquierda">
                            <div :style="styleSubtitulo">Información de contacto</div>
                            <div :style="styleDato" v-for="item in datos">
                                <div :style="styleDatoNombre">{{ item.nombre }}</div>
                                <div :style="styleDatoValor">{{ item.valor }}</div>
                            </div>
                        </div>
                        <div :style="styleColumnaDerecha">
                            <div :style="styleNombre">Edson Diego Cuno Tipso</div>
                            <div :style="styleDato">
                                <div :style="styleDatoNombre">Portafolio de proyectos</div>
                                <div :style="styleDatoValor"><a :style="styleDatoLink"
                                        href="https://edsoncuno.github.io/portfolio/"
                                        target="_blank">https://edsoncuno.github.io/portfolio/</a>
                                </div>
                            </div>
                            <div :style="styleSubtitulo">Educación</div>
                            <div :style="styleSubSubtitulo">Superior</div>
                            <div v-for="item in superior" :style="styleEducacionBox">
                                <div>{{ item.nombre }}</div>
                                <div>{{ item.lugar }}</div>
                                <div>{{ item.fecha }}</div>
                            </div>
                            <div :style="styleSubSubtitulo">Cursos</div>
                            <div v-for="item in cursos" :style="styleEducacionBox">
                                <div>{{ item.nombre }}</div>
                                <div>{{ item.lugar }}</div>
                                <div>{{ item.fecha }}</div>
                            </div>
                            <div :style="styleSubtitulo">Herramientas y software utilizados</div>
                            <ul>
                                <li v-for="item in utilizados">{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped lang="scss">
main {
    padding: 0 3rem;

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            font-family: "Comfortaa", cursive;
            width: 60%;
            height: 5rem;
            border-radius: 1rem;
            background-color: #415D65;
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }

        button:hover {
            opacity: 0.8;
        }

        @media all and (max-width: 850px) {
            .sheet {
                display: none;
            }

            button {
                margin: auto;
            }
        }

        @media all and (max-width: 650px) {
            button {
                width: 90%;
                //margin: auto;
            }
        }
    }

    @media all and (max-width: 850px) {
        .container {
            width: 100%;
            height: 94vh;
            background: url("https://i.postimg.cc/h4TPZh4n/pexels-life-of-pix-8892.jpg");
            background-position: center;
            background-size: cover;
        }
    }
}
</style>