<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <form @submit.prevent="register">
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Silahkan Lengkapi form dibawah untuk mengubah profile</h4>
              <p class="category"></p>
            </md-card-header>
            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Email</label>
                    <md-input v-model="email" type="text" disabled></md-input>
                  </md-field>
                </div>
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
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Password</label>
                    <md-input
                      v-model="password"
                      name="password"
                      type="password"
                    ></md-input>
                  </md-field>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-size-100"
                  v-if="password != ''"
                >
                  <md-field>
                    <label>Ketik Ulang Password</label>
                    <md-input
                      v-model="re_password"
                      name="re_password"
                      type="password"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Upload TTD</label>
                    <md-file
                      name="ttd"
                      v-model="label_ttd"
                      accept="image/*"
                      v-on:change="previewImage($event)"
                    />
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-card>
                    <md-card-media-actions>
                      <md-card-media class="center">
                        <img
                          v-if="ttdImage"
                          :src="ttdImage"
                          style="width: 400px; height: 200px"
                        />
                      </md-card-media>
                    </md-card-media-actions>
                  </md-card>
                </div>

                <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-success" type="submit">
                    Simpan
                  </md-button>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { regisStaff } from "./services";
import { required, email, numeric } from "vuelidate/lib/validators";
import { passwordLength, alphaSpace, alphaNumeric } from "./validators";
import swal from "sweetalert";
export default {
  name: "input-transkrip-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      regisData: {
        email: "",
        password: "",
        role: "",
      },
      nama: "",
      email: "email_email@gmail.com",
      password: "",
      re_password: "",
      ttdImage: null,
      ttd: "",
      label_ttd: "",
      displayError: false,
      error: {
        "border-bottom": "1px solid",
        "border-color": "#9c27b0 !important",
        "border-style": "double",
      },
      
    };
  },

  validations: {
    nama: {
      required,
    },
  },
  methods: {
    register() {
      this.$v.$touch();
      if (this.password != "") {
        if (this.password != this.re_password) {
          swal({
            title: "Silahkan Cek Kembali Form Anda",
            icon: "error",
          });
          return;
        }
      }
      if (this.$v.$invalid) {
        this.displayError = true;
        swal({
          title: "Silahkan Cek Kembali Form Anda",
          icon: "error",
        });
      } else {
        let loading = this.$vs.loading({
          text: "Loading....",
          color: "#4dc3ff",
        });
        //send logic here

        loading.close();
        this.notifyVue("Setting Updated..!", true);
      }
      // regisStaff({
      //   email: this.regisData.email,
      //   password: this.regisData.password,
      //   role: this.regisData.role
      // })
      // .then(response =>{
      //   swal({
      //     title : "Akun Berhasil Terdaftar",
      //     icon: "success",
      //   })
      //   this.regisData.email =''
      //   this.regisData.password=''
      //   this.regisData.role=''
      // })
      // .catch(errors => {
      //   // console.log(errors)
      //   swal({
      //     title : "Email Telah Terdaftar",
      //     icon: "error",
      //   });
      // });
    },
    notifyVue(text, success) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message: text,
        icon: success ? "check" : "close",
        horizontalAlign: "right",
        verticalAlign: "top",
        type: this.$type[color]
      });
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file && file["type"].split("/")[0] === "image") {
        const reader = new FileReader();
        if (event.target.name == "pas") {
          this.pas = event.target.files[0];
          reader.onload = (event) => {
            this.pasImage = event.target.result;
          };
        } else {
          this.ttd = file;
          reader.onload = (event) => {
            this.ttdImage = event.target.result;
          };
        }
        reader.readAsDataURL(file);
      } else {
        this.pas = "";
        this.ttd = "";
        this.ttdImage = null;
        swal({
          title: "Only Image Allowed",
          icon: "error",
        });
      }
    },
  },
};
</script>
<style>
.center {
  width: 75%;
  margin: 10px auto;
}
img {
  height: 200px;
  width: 300px;
}
</style>
