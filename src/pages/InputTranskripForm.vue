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
                  <md-input v-model="nomor" name="nomor" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Nomor Surat Keputusan Rektor</label>
                  <md-input v-model="nomorRektor" name="nomorRektor" type="text"></md-input>
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
                    <md-input v-model="email" name="email" type="email" ></md-input>
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
                
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Program Studi</label>
                    <md-input v-model="fakultas" name="fakultas" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Fakultas</label>
                    <md-input v-model="prodi" name="prodi" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Jenjang Pendidikan</label>
                    <md-select  v-model="jenjang" name="jenjang">
                      <md-option value="S1">S1</md-option>
                      <md-option value="S2">S2</md-option>
                      <md-option value="S3">S3</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-25">
                  <md-field>
                    <label>IPK</label>
                    <md-input v-model="ipk" name="ipk" type="number"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-25">
                  <md-field>
                    <label>Judul Tugas Akhir</label>
                    <md-input v-model="ta" name="ta" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-25">
                  <md-field>
                    <label>Gelar</label>
                    <md-input v-model="gelar" name="gelar" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-25">
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
                <div class="md-layout-item md-size-100 text-left">
                  <md-button class="md-raised md-success" @click="tambah">Tambah Mata Kuliah </md-button>
                </div>
                  <!-- MK -->
                <mata-kuliah :submit="submit" v-for="(data,index) in items" :key="index" @hapus="$delete(items,index)" @mk="pushData" > </mata-kuliah>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Pas Foto </label>
                    <md-file name="pas" accept="image/*" v-on:change="previewImage($event)"/>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Logo Universitas</label>
                    <md-file name="logo" accept="image/*" v-on:change="previewImage($event)"/>
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
      nomor:null,
      nomorRektor:null,
      nama: null,
      tempat_lahir: null,
      tanggal_lahir: null,
      email: null,
      nim: null,
      lembaga: null,
      prodi: null,
      fakultas:null,
      jenjang: null,
      ipk:null,
      ta:null,
      gelar: null,
      tglLulus: null,
      rektor: null,
      nipRektor: null,
      dekan: null,
      nipDekan: null,
      pas: null,
      logo: null,
      kode_matkul: [],
      matkul: [],
      semester: [],
      sks: [],
      nilai: [],
      pasImage:null,
      logoImage:null,
    };
  },
  methods: {
    
    tambah(){
      this.jumlah = this.jumlah + 1;
      this.items.push(this.jumlah);
      console.log(this.items);
      // alert(this.jumlah)
    },
    previewImage(event){
      const file = event.target.files[0];
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
            alert(response);
            alert(JSON.stringify(response));
        }).catch(errors =>{
            alert(errors);
            alert(JSON.stringify(errors));
        });
      },1000);
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
