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
              <label>Nomor Surat</label>
              <md-input v-model="nomor" name="nomor" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nama</label>
              <md-input v-model="nama" name="nama" type="text" ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Tempat Lahir</label>
              <md-input v-model="tempat_lahir" name="tempat_lahir" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Tanggal Lahir</label>
              <md-input v-model="tanggal_lahir" name="tanggal_lahir" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" name="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>NIM</label>
              <md-input v-model="nim" name="nim" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nama Lembaga</label>
              <md-input v-model="lembaga" name="lembaga" type="text"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Program Studi</label>
              <md-input v-model="prodi" name="prodi" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Jenjang Pendidikan</label>
              <md-select  v-model="jenjang" name="jenjang">
                <md-option value="S1">S1</md-option>
                <md-option value="S2">S2</md-option>
                <md-option value="S3">S3</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Gelar</label>
              <md-input v-model="gelar" name="gelar" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Tanggal Lulus</label>
              <md-input v-model="tglLulus" name="tglLulus" type="text"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nama Rektor</label>
              <md-input v-model="rektor" name="rektor" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>NIP Rektor</label>
              <md-input v-model="nipRektor" name="nipRektor" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nama Dekan</label>
              <md-input v-model="dekan" name="dekan" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>NIP Dekan</label>
              <md-input v-model="nipDekan" name="nipDekan" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Pas Foto</label>
              <md-file name="pas" accept="image/*" v-on:change="previewImage($event)"/>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Logo Universitas</label>
              <md-file name="logo" accept="image/*"  v-on:change="previewImage($event)"/>
              
            </md-field>
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
import { sendIjazah } from "../services"
export default {
  name: "input-ijazah-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  mounted: function(){
    //alert(this.pas);
  },
  data() {
    return {
      nomor:null,
      nama: null,
      tempat_lahir: null,
      tanggal_lahir: null,
      email: null,
      nim: null,
      lembaga: null,
      prodi: null,
      jenjang: null,
      gelar: null,
      tglLulus: null,
      rektor: null,
      nipRektor: null,
      dekan: null,
      nipDekan: null,
      pas: null,
      logo: null,
      pasImage:null,
      logoImage:null,
    };
  },
  methods: {
    previewImage(event){
      const file = event.target.files[0];
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
      
    },
    send(){
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

      }).then(response =>{
          alert(response);
          alert(JSON.stringify(response));
      }).catch(errors =>{
          alert(errors);
          alert(JSON.stringify(errors));
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
