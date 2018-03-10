<template lang="html">
  <q-card class="bg-white">
    <q-card-title>
      <span class="text-primary">
        Contactenos!
      </span>
      <span slot="subtitle">Solo Consultas Generales</span>
    </q-card-title>
    <q-card-separator></q-card-separator>
    <q-card-main>
      <p>
        Consultas de
        <router-link to="/resort">Resort</router-link>,
        <router-link to="/hotel">Hotel</router-link>, y
        <router-link to="/Eventos">Eventos</router-link> tienen formularios especializados.
      </p>
    </q-card-main>
    <q-card-separator></q-card-separator>
    <q-card-main>
      <q-field icon="person" >
        <q-input
        v-model="fullname"
        float-label="Nombre Completo"
        ></q-input>
      </q-field>
      <q-field icon="email" >
        <q-input
        v-model="email"
        float-label="Coreo Electronico"
        type="email"
        ></q-input>
      </q-field>
      <q-field icon="phone" >
        <q-input
        v-model="phone"
        float-label="Telefono"
        type="text"
        ></q-input>
      </q-field>
      <q-field icon="message" >
        <q-input
        v-model="message"
        float-label="Mensaje o Consulta"
        type="textarea"
        ></q-input>
      </q-field>
    </q-card-main>
    <q-card-separator></q-card-separator>
    <q-card-actions align="end">
      <q-btn color="primary" :disable="!valid" flat iconRight="forward">
        Enviar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import {
  QCard,
  QCardMedia,
  QCardSeparator,
  QCardActions,
  QCardTitle,
  QCardMain,
  QField,
  QInput,
  QBtn
} from 'quasar'
export default {
  components: {
    QCard,
    QCardMedia,
    QCardSeparator,
    QCardActions,
    QCardTitle,
    QCardMain,
    QField,
    QInput,
    QBtn
  },
  data: function () {
    return {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  computed: {
    valid () {
      if (!this.fullname) return false
      return true
    }
  },
  methods: {
    send () {
      let xhr = new XMLHttpRequest()

      xhr.open('POST', '/php/contactusinfo.php')
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.onload = function () {
        if (xhr.status === 200) {
          alert(xhr.responseText)
        }
        else {
          alert(xhr.status)
        }
      }
      xhr.send(encodeURI(`?fullname=${this.fullname}&email=${this.email}`))
    }
  }
}
</script>

<style lang="css">
</style>
