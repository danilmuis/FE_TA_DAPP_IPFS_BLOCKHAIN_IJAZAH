<template>
  <form v-on:submit.prevent="send">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Lengkapi Semua Form untuk Membuat Ijazahmu</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label >Nomor Surat</label>
              <md-input v-bind:style="[$v.nomor.$error && displayError ? error : '']"  v-model.trim="$v.nomor.$model" name="nomor" type="text" ></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.nomor.required && displayError">Form harus diisi</p>
            
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nama</label>
              <md-input @input="nama = $event.toUpperCase()" v-bind:style="[$v.nama.$error && displayError ? error : '']" v-model.trim="$v.nama.$model" name="nama" type="text" ></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.nama.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.nama.alphaSpace && displayError">Hanya huruf yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Tempat Lahir</label>
              <md-input @input="tempat_lahir = $event.toUpperCase()" v-bind:style="[$v.tempat_lahir.$error && displayError ? error : '']" v-model.trim="$v.tempat_lahir.$model" name="tempat_lahir" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.tempat_lahir.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.tempat_lahir.alphaSpace && displayError">Hanya huruf yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <VueCtkDateTimePicker v-model="tanggal_lahir" only-date label="Tanggal Lahir" formatted="DD/MM/YYYY" output-format="DD/MM/YYYY" />
            </md-field>
            <p class="error-msg" v-if="!$v.tanggal_lahir.required && displayError">Form harus diisi</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email</label>
              <md-input v-bind:style="[$v.email.$error && displayError ? error : '']"  v-model.trim="$v.email.$model" name="email" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.email.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.email.email && displayError">Harus berupa email yang valid</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>NIM</label>
              <md-input v-bind:style="[$v.nim.$error && displayError ? error : '']"  v-model.trim="$v.nim.$model" name="nim" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.nim.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.nim.numeric && displayError">Hanya angka yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nama Lembaga</label>
              <md-input @input="lembaga = $event.toUpperCase()" v-bind:style="[$v.lembaga.$error && displayError ? error : '']"  v-model.trim="$v.lembaga.$model" name="lembaga" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.lembaga.required && displayError">Form harus diisi</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Jenjang Pendidikan</label>
              <md-select v-bind:style="[$v.jenjang.$error && displayError ? error : '']"  v-model.trim="$v.jenjang.$model" name="jenjang">
                <md-option value="S1">S1</md-option>
                <md-option value="S2">S2</md-option>
                <md-option value="S3">S3</md-option>
              </md-select>
            </md-field>
            <p class="error-msg" v-if="!$v.jenjang.required && displayError">Form harus diisi</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Program Studi</label>
              <md-input @input="prodi = $event.toUpperCase()" v-bind:style="[$v.prodi.$error && displayError ? error : '']" v-model.trim="$v.prodi.$model" name="prodi" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.prodi.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.prodi.alphaSpace && displayError">Hanya huruf yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Gelar</label>
              <md-input v-bind:style="[$v.gelar.$error && displayError ? error : '']" v-model.trim="$v.gelar.$model" name="gelar" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.gelar.required && displayError">Form harus diisi</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <VueCtkDateTimePicker v-model="tglLulus" only-date label="Tanggal Lulus" formatted="DD/MM/YYYY" output-format="DD/MM/YYYY" />
            </md-field>
          <p class="error-msg" v-if="!$v.tglLulus.required && displayError">Form harus diisi</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nama Rektor</label>
              <md-input @input="rektor = $event.toUpperCase()" v-bind:style="[$v.rektor.$error && displayError ? error : '']" v-model.trim="$v.rektor.$model" name="rektor" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.rektor.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.rektor.alphaSpace && displayError">Hanya huruf yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>NIP Rektor</label>
              <md-input v-bind:style="[$v.nipRektor.$error && displayError ? error : '']" v-model.trim="$v.nipRektor.$model" name="nipRektor" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.nipRektor.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.nipRektor.numeric && displayError">Hanya angka yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nama Dekan</label>
              <md-input @input="dekan = $event.toUpperCase()" v-bind:style="[$v.dekan.$error && displayError ? error : '']" v-model.trim="$v.dekan.$model" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.dekan.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.dekan.alphaSpace && displayError">Hanya huruf yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>NIP Dekan</label>
              <md-input v-bind:style="[$v.nipDekan.$error && displayError ? error : '']" v-model.trim="$v.nipDekan.$model" name="nipDekan" type="text"></md-input>
            </md-field>
            <p class="error-msg" v-if="!$v.nipDekan.required && displayError">Form harus diisi</p>
            <p class="error-msg" v-if="!$v.nipDekan.numeric && displayError">Hanya angka yang diperbolehkan</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Pas Foto</label>
              <md-file name="pas" accept="image/*" v-on:change="previewImage($event)"/>
            </md-field>
            <p class="error-msg" v-if="!$v.pas.required && displayError">Form harus diisi</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Logo Universitas</label>
              <md-file name="logo" accept="image/*" v-on:change="previewImage($event)"/>
            </md-field>
            <p class="error-msg" v-if="!$v.logo.required && displayError">Form harus diisi</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-card >
              <md-card-media-actions>
                <md-card-media class="center" >
                  <img v-if="pasImage" :src="pasImage">
                </md-card-media>
              </md-card-media-actions>
            </md-card>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-card>
              <md-card-media-actions >
                <md-card-media class="center">
                  <img v-if="logoImage" :src="logoImage">
                </md-card-media>
              </md-card-media-actions>
            </md-card>
          </div>
          <div class="md-layout-item md-size-100 text-left">
            <md-button class="md-raised md-success" type="submit" >Buat Ijazahmu </md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { sendIjazah } from "../services";
import { required,email,numeric } from 'vuelidate/lib/validators'
import { usernameLength,alphaSpace,alphaNumeric } from "../validators";
import swal from 'sweetalert';
export default {
  name: "input-ijazah-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  mounted: function(){
    // console.log(alphaSpace);
    console.log(this.$v.nomor);
  },
  data() {
    return {
      nomor:'',
      nama: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      email: '',
      nim: '',
      lembaga: '',
      prodi: '',
      jenjang: '',
      gelar: '',
      tglLulus: '',
      rektor: '',
      nipRektor: '',
      dekan: '',
      nipDekan: '',
      pas: '',
      logo: '',
      pasImage:null,
      logoImage:null,
      displayError : false,
      error:{
        'border-bottom': '1px solid',
        'border-color':'#9c27b0 !important',
        'border-style':'double',
      }
    };
  },
  validations: {
    nomor : {
      required
    },
    nama : {
      alphaSpace,
      required
    },
    tempat_lahir : {
      alphaSpace,
      required
    },
    tanggal_lahir : {
      required
    },
    email : {
      required,
      email
    },
    nim : {
      required,
      numeric
    },
    lembaga : {
      required
    },
    jenjang : {
      required
    },
    prodi : {
      required,
      alphaSpace
    },
    gelar : {
      required
    },
    tglLulus : {
      required
    },
    rektor : {
      required,
      alphaSpace
    },
    nipRektor : {
      required,
      numeric
    },
    dekan : {
      required,
      alphaSpace
    },
    nipDekan : {
      required,
      numeric
    },
    logo : {
      required
    },
    pas : {
      required
    }
  },
  methods: {
    validationStatus : function(validation){
      return typeof validation != "undefined" ? validation.$error : false;
    },
    previewImage(event){
      const file = event.target.files[0];
      if(file && file['type'].split('/')[0] === 'image'){
        const reader = new FileReader();
        if(event.target.name == "pas"){
          this.pas = event.target.files[0];
          reader.onload = (event) =>{
            this.pasImage = event.target.result;
          }
        }else{
          this.logo = file;
          reader.onload = (event) =>{
            this.logoImage = event.target.result;
          }
        }
        reader.readAsDataURL(file);
      }else{
        this.pas = '';
        this.logo = '';
        this.logoImage = null;
        this.pasImage = null;
        swal({
          title : "Only Image Allowed",
          icon: "error",
        }); 
      }
    },
    send(){
      this.$v.$touch();
      if(this.$v.$invalid){
        this.displayError = true;
        swal({
          title : "Silahkan Cek Kembali Form Anda",
          icon: "error",
        }); 
      }else{
        let loading = this.$vs.loading({
          text : "Loading....",
          color : "#4dc3ff"
        });
        sendIjazah({
          nomor: this.nomor,
          logo: this.logo,
          pas: this.pas,
          lembaga: this.lembaga,
          nama: this.nama,
          ttl: this.tempat_lahir+', '+this.tanggal_lahir,
          nim: this.nim,
          jenjang: this.jenjang,
          prodi: this.prodi,
          tglLulus: this.tglLulus,
          rektor: this.rektor,
          nipRektor: this.nipRektor,
          dekan: this.dekan,
          nipDekan: this.nipDekan,
          email: this.email,
          gelar : this.gelar,

        }).then(response =>{
            loading.close();
            swal({
              title : "Ijazah Berhasil dikirimkan",
              icon: "success",
            }).
            then(()=>{
              window.location.href = this.$route.path;
            });
        }).catch(errors =>{
            loading.close();
            swal({
              title : "Ijazah Gagal dibuat",
              icon: "error",
            });
            console.log(JSON.stringify(errors));
        });
      }
      
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
  .is-error{
    color: #e85600;
  }
  .error-form{
    border-bottom:1px solid;
    border-color:#9c27b0 !important;
    border-style:double;
  }
  #error-form{
    border-bottom:1px solid;
    border-color:#9c27b0 !important;
    border-style:double;
  }
  .error-msg{
    color:red !important;
    font-size:10px;
    margin-top:-20px;
  }
</style>
