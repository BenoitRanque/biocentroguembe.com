<template>
  <q-page>
    <q-backdrop>
      <q-responsive-img src="aviario_exterior_1" format="slide"></q-responsive-img>
    </q-backdrop>
    <div class="layout-padding page-width">
      <div class="row gutter-sm">
        <div class="col-12">
          <q-card>
            <q-card-media>
              <white-wave :caption="$t(`page.${$route.name.replace(/\//g, '-') }`)">
                <q-responsive-img src="aviario_1" format="slide" sizes="md 864px"></q-responsive-img>
              </white-wave>
            </q-card-media>
          </q-card>
        </div>
        <div class="col-6" v-for="card in cards" :key="card.name">
          <q-card class="bg-white">
            <q-card-media>
              <white-wave>
                <q-responsive-img :src="card.img" format="card" sizes="md 424px, xs 50vw"></q-responsive-img>
              </white-wave>
            </q-card-media>
            <q-card-title class="text-primary">
              <em>{{$t(`${card.name}.title`)}}</em>
              <span slot="subtitle">{{$t(`${card.name}.subtitle`)}}</span>
            </q-card-title>
            <q-card-main>
              <p>
                <template v-for="n in card.bodyLength">{{$t(`${card.name}.body[${n - 1}]`)}}<br :key="n"></template>
              </p>
            </q-card-main>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import QResponsiveImg from 'components/QResponsiveImg'
import QBackdrop from 'components/QBackdrop'
import WhiteWave from 'components/WhiteWave'
export default {
  name: 'Aviario',
  components: {
    QResponsiveImg,
    QBackdrop,
    WhiteWave
  },
  data () {
    return {
      cards: [
        {
          name: 'aviario1',
          img: 'aviario_card_1',
          bodyLength: 1
        },
        {
          name: 'aviario2',
          img: 'aviario_card_2',
          bodyLength: 1
        },
        {
          name: 'specieslist.parabasietecolores',
          img: 'parabasietecolores_card',
          bodyLength: 6
        },
        {
          name: 'specieslist.parabaazul',
          img: 'parabaazul_card',
          bodyLength: 1
        },
        {
          name: 'specieslist.parabafrenteroja',
          img: 'parabafrenteroja_card',
          bodyLength: 2
        },
        {
          name: 'specieslist.pavoreal',
          img: 'pavoreal_card',
          bodyLength: 1
        },
        {
          name: 'specieslist.tucan',
          img: 'tucan_card',
          bodyLength: 1
        },
        {
          name: 'specieslist.lorohablador',
          img: 'lorohablador_card',
          bodyLength: 3
        }
      ]
    }
  }
}
</script>

<style>
</style>

<i18n>
{
  "es": {
    "aviario1": {
      "title": "El aviario más grande de Sudámerica",
      "subtitle": " ",
      "body": [
        "Una de las estructuras más impresionantes del Biocentro, con 35 metros de altura y los más de 2800 metros de superficie, es considerado el aviario más grande de la región, ya que alberga a más de 150 aves y cerca de 32 especies diferentes."
      ]
    },
    "aviario2": {
      "title": "Estructura imponente",
      "subtitle": " ",
      "body": [
        "Un puente a la altura de la copa de los árboles y un impresionante mirador desde el que podemos admirar la selva que tapiza los alrededores de Santa Cruz y el Parque Nacional Amboró."
      ]
    },
    "specieslist": {
      "parabasietecolores": {
        "title": "Ara Macao",
        "subtitle": "Paraba Siete Colores",
        "body": [
            "Distribuida en los departamentos de Pando, Beni, La Paz, Cochabamba y Santa",
            "Cruz, habitando principalmente Bosques Amazónicos",
            "Sus amenazas están ligadas principalmente a la pérdida de los bosques Amazónicos",
            "causada por el avance de la frontera agrícola. De igual manera la captura",
            "para el comercio de mascotas diezmó sus poblaciones durante los años 80 y en",
            "la actualidad esta actividad ilícita sigue afectando sus poblaciones."
        ]
      },
      "parabaazul": {
        "title": "Ara Ararauna",
        "subtitle": "Paraba Barba Negra",
        "body": [
            "Su distribución en muy amplia en Bolivia, es contantemente confundida con la Paraba Barba Azul ya que sus características son muy similares, una de las diferencias más marcadas es precisamente su barba de color azul oscuro casi negro. Su principal amenaza es la captura para el tráfico ilegal para ser comercializada como mascota."
        ]
      },
      "parabafrenteroja": {
        "title": "Ara Rubrogenys",
        "subtitle": "Paraba Frente Roja",
        "body": [
            "Es una especie Endémica de Bolivia, habita los Bosques Secos Interandinos y parte del Bosque Tucumano Boliviano. Ocupa aproximadamente 500.000 ha.",
            "Se calcula que entre los años 2.004 y 2.007 se comercializaron al menos 42 individuos posiblemente destinados al mercado internacional, lo que sin duda implica un brusco impacto sobre sus poblaciones que en estado natural no sobrepasarían los 800 individuos."
        ]
      },
      "pavoreal": {
        "title": "Pavo Cristatus",
        "subtitle": "Pavo Real",
        "body": [
            "Sin duda uno de los mayores atractivos del aviario, una especie que desde tiempos antiguos destacó entre los animales admirados por el hombre a causa del extraordinario abanico policromado que constituye la cola de los machos."
        ]
      },
      "tucan": {
        "title": "Ramphastus Toco",
        "subtitle": "Tucan",
        "body": [
          "Estos amiguitos siempre llenan de alegría el aviario, les encanta esperar en el ingreso a cada uno de los visitantes, de amplia distribución en Bolivia se encuentra en los departamentos de Santa Cruz, Beni, Pando llegando hasta Cochabamba, Tarija y Sucre, es muy requerido para su comercialización como mascota en edad Juvenil y usualmente abandonados cuando llegan a la Adultez por presentar agresividad."
        ]
      },
      "lorohablador": {
        "title": "Amazona Aestiva",
        "subtitle": "Loro Hablador",
        "body": [
          "Su gran peculiaridad en la capacidad que tiene para repetir de forma mecánica algunas frases, es así que te sorprenderás cuando alguno de los individuos que tenemos en el aviario te salude amablemente, Llega a medir hasta 37 cm. Se distingue por la cabeza amarilla, con azul verdoso en frente y mejilla.",
          "Habita en tierras bajas hasta los 1.600 ms.n.m. Es muy común verlas en parejas o bandadas, tienen dormideros comunitarios de muchos individuos.",
          "Su principal Amenaza es la captura destinada al Mascotismo."
        ]
      }
    }
  },
  "en": {

  }
}

</i18n>
