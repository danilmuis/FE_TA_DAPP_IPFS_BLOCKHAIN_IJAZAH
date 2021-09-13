<template>
  <form v-on:submit.prevent="send">
    <md-card style="margin-top: 50px">
      <md-card-header data-background-color="green">
        <h4 class="title">Lengkapi Semua Form untuk Mendapatkan SKLmu</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nama Lengkap</label>
              <md-input
                v-bind:style="[$v.nama.$error && displayError ? error : '']"
                v-model.trim="$v.nama.$model"
                name="nama"
                type="text"
              ></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.nama.required && displayError">
              Form harus diisi
            </p>
            <p class="error-msg" v-if="!$v.nama.alphaSpace && displayError">
              Hanya huruf yang diperbolehkan
            </p>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nomor Induk Mahasiswa</label>
              <md-input
                v-bind:style="[$v.nim.$error && displayError ? error : '']"
                v-model.trim="$v.nim.$model"
                name="nim"
                type="text"
              ></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.nim.required && displayError">
              Form harus diisi
            </p>
            <p class="error-msg" v-if="!$v.nim.numeric && displayError">
              Hanya angka yang diperbolehkan
            </p>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <multiselect
              v-model="fakultas"
              deselect-label="Can't remove this value"
              track-by="name"
              label="name"
              placeholder="Pilih Fakultas"
              :options="options"
              :allow-empty="false"
            >
              <template slot="singleLabel" slot-scope="{ option }"
                ><strong>{{ option.desc }}</strong></template
              >
            </multiselect>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <multiselect
              v-model="prodi"
              deselect-label="Can't remove this value"
              track-by="name"
              label="name"
              placeholder="Pilih Prodi"
              :options="options"
              :allow-empty="false"
            >
              <template slot="singleLabel" slot-scope="{ option }"
                ><strong>{{ option.desc }}</strong></template
              >
            </multiselect>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nomor Handphone</label>
              <md-input
                v-bind:style="[$v.no_hp.$error && displayError ? error : '']"
                v-model.trim="$v.no_hp.$model"
                name="nim"
                type="text"
              ></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.no_hp.required && displayError">
              Form harus diisi
            </p>
            <p class="error-msg" v-if="!$v.no_hp.numeric && displayError">
              Hanya angka yang diperbolehkan
            </p>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Tanggal Yudisium</label>

              <VueCtkDateTimePicker
                v-model="yudisium"
                only-date
                label="Tanggal Yudisium"
                formatted="DD/MM/YYYY"
                output-format="DD/MM/YYYY"
              />
            </md-field>
            <p class="error-msg" v-if="!$v.yudisium.required && displayError">
              Form harus diisi
            </p>
          </div>

          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Keperluan</label>
              <md-select v-bind:style="[$v.keperluan.$error && displayError ? error : '']"  v-model.trim="$v.keperluan.$model" name="keperluan">
                <md-option value="S1">S1</md-option>
                <md-option value="S2">S2</md-option>
                <md-option value="S3">S3</md-option>
                <md-option value="0">Lainnya</md-option>
              </md-select>
            </md-field>
            <p class="error-msg" v-if="!$v.keperluan.required && displayError">Form harus diisi</p>
          </div> -->

          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input
                v-bind:style="[$v.email.$error && displayError ? error : '']"
                v-model.trim="$v.email.$model"
                name="email"
                type="text"
              ></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.email.required && displayError">
              Form harus diisi
            </p>
            <p class="error-msg" v-if="!$v.email.email && displayError">
              Harus berupa email yang valid
            </p>
            <label class="text-muted">
              *Surat Ketarangan Lulus akan dikirim ke Email ini
            </label>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" type="submit">Submit</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import swal from "sweetalert";
import { required, email, numeric } from "vuelidate/lib/validators";
import { usernameLength, alphaSpace, alphaNumeric } from "./validators";
export default {
  name: "form-registrasi-skl-mahasiswa",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      nama: "",
      email: "",
      nim: "",
      no_hp: "",
      yudisium: "",
      fakultas: "",
      prodi: "",
      error: {
        "border-bottom": "1px solid",
        "border-color": "#9c27b0 !important",
        "border-style": "double",
      },
    };
  },
  validations: {
    nama: {
      alphaSpace,
      required,
    },
    email: {
      required,
      email,
    },
    nim: {
      required,
      numeric,
    },
    yudisium: {
      required,
    },
    no_hp: {
      required,
      numeric,
    },
    fakultas: {
      required,
    },
    prodi: {
      required,
    },
  },
  methods: {
    send() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.displayError = true;
        swal({
          title: "Silahkan Cek Kembali Form Anda",
          icon: "error",
        });
      } else {
        swal({
          title: "Apakah data yang anda isikan sudah benar?",
          text: "Jika data anda terdapat kesalahan maka SKL tidak akan dikirimkan!!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((yes) => {
          if (yes) {
            let loading = this.$vs.loading({
              text: "Loading....",
              color: "#4dc3ff",
            });
            //send data logic here

            loading.close();
            const text = "SKL anda sedang diproses dan akan dikirimkan dalam 3x24 jam";
            swal({
              title: text,
              icon: "success",
            });
            this.resetForm();
            this.displayError = false;
          }
        });
      }

      // this.resetForm();
    },
    resetForm() {
      this.nama = "";
      this.nim = "";
      this.email = "";
      this.yudisium = "";
      this.no_hp = "";
      this.fakultas = "";
      this.prodi = "";
    },
  },
};
</script>
<style>
.is-error {
  color: #e85600;
}
.error-form {
  border-bottom: 1px solid;
  border-color: #9c27b0 !important;
  border-style: double;
}
#error-form {
  border-bottom: 1px solid;
  border-color: #9c27b0 !important;
  border-style: double;
}
.error-msg {
  color: red !important;
  font-size: 10px;
  margin-top: -20px;
}
</style>
