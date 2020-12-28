<template>
  <div>
    <md-button class="md-raised" :class="[ijazah ? 'md-warning' : '']" @click="changeBerkas" >Ijazah </md-button>
    <md-button class="md-raised" :class="[!ijazah ? 'md-warning' : '']" @click="changeBerkas" >Transkrip</md-button>
    <md-table :table-header-color="tableHeaderColor">
      <md-table-row >
        <md-table-head>No</md-table-head>
        <md-table-head>NIK</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Hash</md-table-head>
        <md-table-head>Download</md-table-head>
      </md-table-row>
      <md-table-row v-for="(item,index) in data" :key="index">
        <md-table-cell md-label="No" >{{ index+1 }}</md-table-cell>
        <md-table-cell md-label="NIK">{{item.nik}}</md-table-cell>
        <md-table-cell md-label="Name">{{item.nama}}</md-table-cell>
        <md-table-cell md-label="Hash">{{ item.data }}</md-table-cell>
        <md-table-cell md-label="download"><md-button class ="md-success md-hue-1" @click="downloadAsync(item.data)">Download</md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
  
</template>

<script>
import {getIjazah} from "../../pages/services"
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      ijazah : true,
      data:null,
      ipfs:null,
    };
  },
  mounted(){
    const ipfsClient = require('ipfs-http-client')
    this.ipfs = ipfsClient(process.env.VUE_APP_ENDPOINT_IPFS);
    getIjazah()
      .then(response =>{
        this.data = response;
      })
      .catch(errors => {
        //console.log(errors);
      });
    
  },
  methods:{
    changeBerkas(){
      this.ijazah = !this.ijazah;
    },
    async downloadAsync(hash){
      for await (const file of this.ipfs.get(hash)) {

        if (!file.content) continue;

        const content = [];
        for await (const chunk of file.content) {
          content.push(chunk);
        }
        let length = 0;
        content.forEach(item => {
          length += item.length;
        });

        // Create a new array with total length and merge all source arrays.
        let mergedArray = new Uint8Array(length);
        let offset = 0;
        content.forEach(item => {
          mergedArray.set(item, offset);
          offset += item.length;
        });
        var blob = await new Blob([mergedArray], {type: 'application/pdf'});
        saveAs(blob,new Date().getTime()+".pdf");
      }
    },
    
  }
  
};
</script>
