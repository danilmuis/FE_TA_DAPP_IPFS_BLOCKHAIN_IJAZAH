<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <form @submit.prevent="register">
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Lengkapi Semua Form Membuat Akun Baru</h4>
              <p class="category"></p>
            </md-card-header>
            
            <md-card-content>
                
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>E-Mail</label>
                    <md-input v-model="regisData.email" name="email" type="text"></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="regisData.password" name="password" type="password"></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100 text-left">
                  <md-button class="md-raised md-success" type="submit" >Buat Akun</md-button>
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
import { regisSuperAdmin } from "./services";
import { required,email,numeric } from 'vuelidate/lib/validators'
import { usernameLength,alphaSpace,alphaNumeric } from "./validators";

export default {
  name: "input-transkrip-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
      return {
          regisData: {
              email:'',
              password:''
          }
      }
  },
  validations: {
    nomor : {
      required
    },
    nomorRektor : {
      required
    }
  },
  methods: {
      register() {
        regisSuperAdmin({
          email: this.regisData.email,
          password: this.regisData.password,
        })
        .then(response =>{
          swal({
            title : "Akun Berhasil Terdaftar",
            icon: "success",
          })
          this.regisData.email =''
          this.regisData.password=''
        })
        .catch(errors => {
          console.log(errors)
          swal({
            title : "Email Telah Terdaftar",
            icon: "error",
          });
        });
      }
    }
  
};
</script>
<style>
  .center{
    width: 75%;
    margin: 10px auto;
  }
  img{
    height:200px;
    width:300px;
  }
  
</style>
