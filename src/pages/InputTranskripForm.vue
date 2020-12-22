<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <form v-on:submit.prevent="send">
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Lengkapi Semua Form untuk Membuat Transkrip Nilaimu</h4>
              <p class="category"></p>
            </md-card-header>
            
            <md-card-content>
                
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Nomor Surat</label>
                  <md-input v-bind:style="[$v.nomor.$error && displayError ? error : '']"  v-model.trim="$v.nomor.$model" name="nomor" type="text"></md-input>
                </md-field>
                <p class="error-msg" v-if="!$v.nomor.required && displayError">Form harus diisi</p>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Nomor Surat Keputusan Rektor</label>
                  <md-input v-bind:style="[$v.nomorRektor.$error && displayError ? error : '']"  v-model.trim="$v.nomorRektor.$model" name="nomorRektor" type="text"></md-input>
                </md-field>
                <p class="error-msg" v-if="!$v.nomorRektor.required && displayError">Form harus diisi</p>
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
                
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Program Studi</label>
                    <md-input @input="prodi = $event.toUpperCase()" v-bind:style="[$v.prodi.$error && displayError ? error : '']" v-model.trim="$v.prodi.$model" name="prodi" type="text"></md-input>
                  </md-field>
                  <p class="error-msg" v-if="!$v.prodi.required && displayError">Form harus diisi</p>
                  <p class="error-msg" v-if="!$v.prodi.alphaSpace && displayError">Hanya huruf yang diperbolehkan</p>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Fakultas</label>
                    <md-input @input="fakultas = $event.toUpperCase()" v-bind:style="[$v.fakultas.$error && displayError ? error : '']"  v-model.trim="$v.fakultas.$model" name="fakultas" type="text"></md-input>
                  </md-field>
                  <p class="error-msg" v-if="!$v.fakultas.required && displayError">Form harus diisi</p>
                  <p class="error-msg" v-if="!$v.fakultas.alphaSpace && displayError">Hanya huruf yang diperbolehkan</p>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
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
                <div class="md-layout-item md-small-size-100 md-size-25">
                  <md-field>
                    <label>IPK</label>
                    <md-input  v-bind:style="[$v.ipk.$error && displayError ? error : '']"  v-model.trim="$v.ipk.$model" name="ipk" type="number"></md-input>
                  </md-field>
                  <p class="error-msg" v-if="!$v.ipk.required && displayError">Form harus diisi</p>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-25">
                  <md-field>
                    <label>Judul Tugas Akhir</label>
                    <md-input @input="prodi = $event.toUpperCase()" v-bind:style="[$v.ta.$error && displayError ? error : '']" v-model.trim="$v.ta.$model" name="ta" type="text"></md-input>
                  </md-field>
                  <p class="error-msg" v-if="!$v.ta.required && displayError">Form harus diisi</p>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-25">
                  <md-field>
                    <label>Gelar</label>
                    <md-input v-bind:style="[$v.gelar.$error && displayError ? error : '']" v-model.trim="$v.gelar.$model" name="gelar" type="text"></md-input>
                  </md-field>
                  <p class="error-msg" v-if="!$v.gelar.required && displayError">Form harus diisi</p>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-25">
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
                <div class="md-layout-item md-size-100 text-left">
                  <md-button v-if="formMK" class="md-raised md-success" @click="swap">Matakuliah with data </md-button>
                  <md-button v-if="!formMK" class="md-raised md-success" @click="swap">Matakuliah with file </md-button>
                </div>
                <div v-if="formMK" class="md-layout-item md-size-100 text-left">
                  <md-button class="md-raised md-success" @click="tambah" >Tambah Mata Kuliah</md-button>
                </div>
                <div v-if="!formMK" class="md-layout-item md-size-100 text-left">
                  <md-field>
                    <label>Upload Data Matakuliah</label>
                    <md-file name="fileMK" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" v-on:change="loadForm($event)"/>
                  </md-field>
                </div>
                  <!-- MK -->
                <mata-kuliah :submit="submit" v-for="(data,index) in items" :key="index" @hapus="$delete(items,index)" @mk="pushData" > </mata-kuliah>
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
                  <md-button class="md-raised md-success" type="submit" >Buat Transkrip Nilaimu </md-button>
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
import { MataKuliah } from "@/pages";
import { getIjazah,sendTranskrip } from "./services"
import { required,email,numeric } from 'vuelidate/lib/validators'
import { usernameLength,alphaSpace,alphaNumeric } from "./validators";
import swal from 'sweetalert';
export default {
  name: "input-transkrip-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  components : {
    MataKuliah
  },
  data() {
    return {
      submit:0,
      items: [1],
      jumlah : 1,
      nomor:'',
      nomorRektor:'',
      nama: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      email: '',
      nim: '',
      lembaga: '',
      prodi: '',
      fakultas:'',
      jenjang: '',
      ipk:'',
      ta:'',
      gelar: '',
      tglLulus: '',
      rektor: '',
      nipRektor: '',
      dekan: '',
      nipDekan: '',
      pas: '',
      logo: '',
      kode_matkul: [],
      matkul: [],
      semester: [],
      sks: [],
      nilai: [],
      pasImage:null,
      logoImage:null,
      displayError : false,
      error:{
        'border-bottom': '1px solid',
        'border-color':'#9c27b0 !important',
        'border-style':'double',
      },
      formMK : true,
    };
  },
  validations: {
    nomor : {
      required
    },
    nomorRektor : {
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
    fakultas : {
      required,
      alphaSpace
    },
    ipk : {
      required,
      numeric
    },
    ta : {
      required,
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
    async swap(){
      this.formMK = !this.formMK;
      if(this.formMK){
        console.log('ini data');
        this.jumlah = 1;
        this.items = [1];
      }else{
        console.log('ini file');
        this.jumlah = 0;
        var jumlah  = this.items.length;
        for( var i = 0 ; i< jumlah ; i++){
          await this.$delete(this.items,0);
        }
        // await this.$delete(this.items,0);
      }
      console.log(this.jumlah);
      console.log(this.items);
    },
    loadForm(event){
      const file = event.target.files[0];
      console.log(file);
    },
    tambah(){
      this.jumlah = this.jumlah + 1;
      this.items.push(this.jumlah);
      
    },
    previewImage(event){
      const file = event.target.files[0];
      if(file && file['type'].split('/')[0] === 'image'){
        const reader = new FileReader();

        if(event.target.name == "pas"){
          this.pas = file;
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
    finished(value){
      this.jumlah = value;
    },
    ijazah(){
      getIjazah()
        .then(response =>{
          console.log(response);
        })
        .catch(errors => {
          console.log(errors);
        });
    },
    async pushData(data){
      this.kode_matkul.push(data.kode_matkul);
      this.matkul.push(data.matkul);
      this.semester.push(data.semester);
      this.sks.push(data.sks);
      this.nilai.push(data.nilai);
    },
    send(){
      this.submit=this.submit+1;
      this.$v.$touch();
      this.readMatakuliah();
      return;
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
        setTimeout(()=> {
          sendTranskrip({
            nomor: this.nomor,
            nomorRektor: this.nomorRektor,
            fakultas: this.fakultas,
            ipk: this.ipk,
            ta: this.ta,
            logo: this.logo,
            pas: this.pas,
            lembaga: this.lembaga,
            gelar : this.gelar,
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
            matkul: this.matkul,
            kode_matkul: this.kode_matkul,
            semester: this.semester,
            sks: this.sks,
            nilai: this.nilai,

          }).then(response =>{
              loading.close();
              swal({
                title : "Transkrip Berhasil dikirimkan",
                icon: "success",
              }).
              then(()=>{
                window.location.href = this.$route.path;
              });
          }).catch(errors =>{
              loading.close();
              swal({
                title : "Transkrip Gagal dibuat",
                icon: "error",
              });
              console.log(JSON.stringify(errors));
          });
        },1000);
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
