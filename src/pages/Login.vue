<template>
  <div class="loginBack content">
    <div class="md-layout" style="margin: auto; width: fit-content;">
      <div >

        <form @submit.prevent="login" style="margin-top: 175px;">
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">SIVIL-CHAIN</h4>
              <p class="category"></p>
            </md-card-header>
            
            <md-card-content>
                
              <div class="md-layout" style="display:block; width:300px">
                <div class="md-layout-item md-small-size-100 md-size-50" style="max-width: inherit;">
                  <md-field>
                    <label>E-Mail</label>
                    <md-input v-model="loginData.email" name="email" type="text"></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-50" style="max-width: inherit;">
                  <md-field>
                    <label>Password</label>
                    <md-input v-model="loginData.password" name="password" type="password"></md-input>
                  </md-field>
                </div>
                
                <div class="md-layout-item md-size-100 text-left">
                  <md-button class="md-raised md-success" type="submit" >Masuk</md-button>
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
import { login } from "./services";
import { required,email,numeric } from 'vuelidate/lib/validators'
import swal from 'sweetalert';
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
            loginData: {
                email:'',
                password:''
            },
        }
    },
    methods: {
        login() {
            login({
              email: this.loginData.email,
              password: this.loginData.password
            })
            .then(response =>{
              console.log(response)
              if (response.status === 'OK') {
                this.$session.start()
                this.$session.set('user',response.user)
                
                if (response.user.role == 1) {
                    this.$router.push('/superAdmin')    
                } else if (response.user.role == 2) {
                    this.$router.push('/')
                } else if (response.user.role == 3  || response.user.role == 4 || response.user.role == 5 || response.user.role == 6) {
                    this.$router.push('/staff')
                } 
                // else if (response.user.role == 4) {
                //     this.$router.push('/dekan')
                // } else if (response.user.role == 5) {
                //     this.$router.push('/warek')
                // } else if (response.user.role == 6) {
                //     this.$router.push('/rektor')
                // }
              }
              
            })
            .catch(errors => {
              console.log(errors)
              swal({
                title : "Email atau Password Salah",
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
