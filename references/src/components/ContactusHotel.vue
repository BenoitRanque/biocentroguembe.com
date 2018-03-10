<template lang="html">
  <q-card class="bg-white">
    <q-card-title>
      <span class="text-primary">
        Consulta Disponibilidad Ahora!
      </span>
      <span slot="subtitle"></span>
    </q-card-title>
    <q-card-main>
      <div class="row xs-gutter">
        <div class="col-md-12 col-lg-6">
          <q-field icon="person" >
            <q-input
            v-model="firstname"
            float-label="Nombre"
            ></q-input>
          </q-field>
        </div>
        <div class="col-md-12 col-lg-6">
          <q-field icon="person" >
            <q-input
            v-model="lastname"
            float-label="Apellido"
            ></q-input>
          </q-field>
        </div>
        <div class="col-md-12 col-lg-6">
          <q-field icon="email" >
            <q-input
            v-model="email"
            float-label="Correo Electronico"
            ></q-input>
          </q-field>
        </div>
        <div class="col-md-12 col-lg-6">
          <q-field icon="phone" >
            <q-input
            v-model="phone"
            float-label="Telefono"
            ></q-input>
          </q-field>
        </div>
        <div class="col-md-12 col-lg-6">
          <q-field icon="accessibility" >
            <q-input
            type="number"
            v-model="adults"
            float-label="Cant. Adultos (13+ Años)"
            ></q-input>
          </q-field>
        </div>
        <div class="col-md-12 col-lg-6">
          <q-field icon="child_care" >
            <q-input
            type="number"
            v-model="children"
            float-label="Cant. Niños (3-12 Años)"
            ></q-input>
          </q-field>
        </div>
        <div class="col-md-12 col-lg-6">
          <q-field icon="event" >
            <q-datetime
            v-model="daterange.from"
            float-label="Checkin"
            >
            </q-datetime>
          </q-field>
        </div>
        <div class="col-md-12 col-lg-6">
          <q-field icon="event" >
            <q-datetime
            v-model="daterange.to"
            float-label="Checkout"
            >
            </q-datetime>
          </q-field>
        </div>
        <div class="col-12">
          <q-field icon="edit" >
            <q-input
            type="textarea"
            v-model="message"
            float-label="Comentario o Mensaje"
            ></q-input>
          </q-field>
        </div>
      </div>
    </q-card-main>
    <q-card-actions align="end">
      <q-btn color="primary" flat iconRight="forward">
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
  QBtn,
  QDatetime
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
    QBtn,
    QDatetime
  },
  data: function () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      daterange: {
        from: '',
        to: ''
      },
      children: '',
      adults: '',
      roomtype: '',
      comment: '',
      message: ''
    }
  }
}
</script>

<style lang="css">
</style>
