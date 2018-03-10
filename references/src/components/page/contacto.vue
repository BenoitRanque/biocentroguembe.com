<template lang="html">
  <div class="layout-padding">

    <div class="row justify-center">

      <div class="col-xs-12 col-sm-10 col-md-8 col-xl-6">
        <q-card class="bg-white">
          <q-card-title>
            <span class="text-primary">
              Consulta Disponibilidad Ahora!
            </span>
            <span slot="subtitle"></span>
          </q-card-title>
          <q-card-main>
            <div class="row xs-gutter">
              <div class="col-md-12">
                <q-field icon="person" >
                  <q-input
                  v-model="comonparams.fullname"
                  :float-label="$t('fullname')"
                  ></q-input>
                </q-field>
              </div>
              <div class="col-md-12 col-lg-6">
                <q-field icon="email" >
                  <q-input
                  v-model="comonparams.email"
                  :float-label="$t('email')"
                  ></q-input>
                </q-field>
              </div>
              <div class="col-md-12 col-lg-6">
                <q-field icon="phone" >
                  <q-input
                  v-model="comonparams.phone"
                  :float-label="$t('phone')"
                  ></q-input>
                </q-field>
              </div>
              <template v-if="mode === 'resort'">
                <div class="col-md-12 col-lg-6">
                  <q-field icon="accessibility" >
                    <q-input
                    type="number"
                    v-model="resortparams.adults"
                    :float-label="$t('adultcount')"
                    ></q-input>
                  </q-field>
                </div>
                <div class="col-md-12 col-lg-6">
                  <q-field icon="child_care" >
                    <q-input
                    type="number"
                    v-model="resortparams.teens"
                    :float-label="$t('teencount')"
                    ></q-input>
                  </q-field>
                </div>
                <div class="col-md-12 col-lg-6">
                  <q-field icon="child_care" >
                    <q-input
                    type="number"
                    v-model="resortparams.children"
                    :float-label="$t('childrencount')"
                    ></q-input>
                  </q-field>
                </div>
                <div class="col-md-12 col-lg-6">
                  <q-field icon="event" >
                    <q-datetime
                      v-model="resortparams.date"
                      type="date"
                      :monday-first="true"
                      :day-names="dias"
                      :month-names="meses"
                      :float-label="$t('checkin')"
                      :ok-label="$t('ok')"
                      :cancel-label="$t('cancel')"
                      :clear-label="$t('clear')"
                      no-clear
                      >
                    </q-datetime>
                  </q-field>
                </div>

              </template>
              <template v-else-if="mode === 'hotel'">
                <div class="col-md-12 col-lg-6">
                  <q-field icon="accessibility" >
                    <q-input
                    type="number"
                    v-model="hotelparams.adults"
                    :float-label="$t('adultcount')"
                    ></q-input>
                  </q-field>
                </div>
                <div class="col-md-12 col-lg-6">
                  <q-field icon="child_care" >
                    <q-input
                    type="number"
                    v-model="hotelparams.children"
                    :float-label="$t('childrencount')"
                    ></q-input>
                  </q-field>
                </div>
                <div class="col-md-12 col-lg-6">
                  <q-field icon="event" >
                    <q-datetime
                      v-model="hotelparams.checkin"
                      type="date"
                      :monday-first="true"
                      :day-names="dias"
                      :month-names="meses"
                      :float-label="$t('checkin')"
                      :ok-label="$t('ok')"
                      :cancel-label="$t('cancel')"
                      :clear-label="$t('clear')"
                      no-clear
                      >
                    </q-datetime>
                  </q-field>
                </div>
                <div class="col-md-12 col-lg-6">
                  <q-field icon="event" >
                    <q-datetime
                      v-model="hotelparams.checkout"
                      type="date"
                      :monday-first="true"
                      :day-names="dias"
                      :month-names="meses"
                      :float-label="$t('checkout')"
                      :ok-label="$t('ok')"
                      :cancel-label="$t('cancel')"
                      :clear-label="$t('clear')"
                      no-clear
                      >
                    </q-datetime>
                  </q-field>
                </div>
              </template>
              <template v-else-if="mode === 'event'">
                <div class="col-md-12 col-lg-6">
                  <q-field icon="event" >
                    <q-datetime
                      v-model="eventparams.date"
                      type="date"
                      :monday-first="true"
                      :day-names="dias"
                      :month-names="meses"
                      :float-label="$t('checkout')"
                      :ok-label="$t('ok')"
                      :cancel-label="$t('cancel')"
                      :clear-label="$t('clear')"
                      no-clear
                      >
                    </q-datetime>
                  </q-field>
                </div>
                <div class="col-md-12 col-lg-6">
                  <q-field icon="event" >

                  </q-field>
                </div>

              </template>

              <div class="col-12">
                <q-field icon="edit" >
                  <q-input
                  type="textarea"
                  v-model="comonparams.message"
                  :float-label="$t('message')"
                  ></q-input>
                </q-field>
              </div>
            </div>
          </q-card-main>
          <q-card-actions align="end">
            <q-btn color="primary" flat iconRight="forward">
              {{$t('send')}}
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script>
import ResponsiveImage from '@/ResponsiveImage'
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
  name: 'Reservar',
  i18nOptions: { namespaces: 'formularios' },
  components: {
    ResponsiveImage,
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
      mode: 'normal',
      comonparams: {
        fullname: '',
        email: '',
        phone: '',
        message: ''
      },
      resortparams: {
        children: 0,
        teens: 0,
        adults: 0
      },
      hotelparams: {
        children: 0,
        teens: 0,
        adults: 0,
        room: '',
        checkin: new Date(),
        checkout: new Date() + 86400000
      },
      eventparams: {
        children: 0,
        teens: 0,
        adults: 0,
        date: new Date()
      }
    }
  },
  computed: {
    valid () {
      switch (this.mode) {
        case 'event':

          break
        case 'hotel':

          break
        case 'resort':

          break
        case 'normal':

          break
      }
    },
    meses () {
      let m = this.$t('meses')
      if (typeof m === 'object') {
        return m
      }
      return undefined
    },
    dias () {
      let d = this.$t('dias')
      if (typeof d === 'object') {
        return d
      }
      return undefined
    }
  },
  mounted () {
    this.mode = this.$route.query ? this.$route.query.mode : 'normal'
  }
}
</script>

<style lang="css">
</style>
