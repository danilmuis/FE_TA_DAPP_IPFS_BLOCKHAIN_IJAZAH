<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Berkas Ijazah dan Transkrip</h4>
            <p class="category" >Klik Signature untuk menandatangani file</p>
          </md-card-header>
          <md-card-content>
            
            <md-button class="md-raised" :class="[ijazah ? 'md-warning' : '']" @click="changeBerkas" >Ijazah </md-button>
            <md-button class="md-raised" :class="[!ijazah ? 'md-warning' : '']" @click="changeBerkas" >Transkrip</md-button>
            <data-table2
              :items="items" 
              :fields="fields" 
              :meta="meta" 
              @per_page="handlePerPage" 
              @pagination="handlePagination" 
              @search="handleSearch" 
              @sort="handleSort"
              @signature="handleSignature"
            />
          </md-card-content>
        </md-card>
      </div>

    </div>
  </div>
</template>

<script>
import { SimpleTable } from "@/components";
import { DataTable2 } from "@/components";

import { getFile} from "./services";
import { saveAs } from 'file-saver';
import { getIjazah } from "@/pages/services"
import { signature } from "@/pages/services"
export default {
  components: {
    DataTable2
  },
  methods: {
    setItems(){
      let current_page = this.search == '' ? this.current_page:1
      if(this.search != ''){
        this.items = this.data.filter((data) => data.berkas==this.ijazah);
        var res = this.items.filter((item)=>{
          let kunci = ((this.search >= 0 )) ? "nim" : "nama";
          return Object.keys(item).some((key)=>item[kunci].includes(this.search.toUpperCase()));
        });
        this.items = res;
      }else{
        if (this.role == 4) {  // dekan
          this.items = this.data.filter((data) => data.berkas==this.ijazah && data.kaprodi==true);
        } else if (this.role == 5) { //warek
          this.items = this.data.filter((data) => data.berkas==this.ijazah && data.kaprodi==true && data.dekan==true);
        } else if (this.role == 6) { //rektor
          this.items = this.data.filter((data) => data.berkas==this.ijazah && data.kaprodi==true && data.dekan==true && data.warek==true);
        } else { // kaprodi
          this.items = this.data.filter((data) => data.berkas==this.ijazah);
        }
      }
      this.meta.total = this.items.length;
      this.items = this.items.slice((current_page-1)*this.per_page,this.per_page*(current_page));
      
    },
    changeBerkas(){
      this.ijazah = !this.ijazah;
      this.setItems();
    },
    async handleSignature(val){
      swal({
        title: "Anda yakin?",
        icon: "warning",
        buttons: true
      })
      .then((confirm) => {
        if (confirm) {
          if (this.role == 3) {
            val.kaprodi = true;
          } else if (this.role == 4) {
            val.dekan = true;
          } else if (this.role == 5) {
            val.warek = true;
          } else if (this.role == 6) {
            val.rektor = true;
          }
          signature({
            hash: val.data,
            role : this.role
          })
          .then(response =>{
            console.log(response);
          })
          .catch(errors => {
            console.log(errors)
            swal({
              title : "Server Error",
              icon: "error",
            });
          });
          swal({
              title : "Berkas Berhasil Di Tanda Tangani",
              icon: "success",
            });
          this.setItems();
        }
      });
      
    },
    handlePerPage(val) {
      this.per_page = val;
      this.setItems();
    },
    handlePagination(val) {
        this.current_page = val;
        this.setItems();
    },
    handleSearch(val) {
        this.search = val;
        this.setItems();
    },
    handleSort(val) {
        this.sortBy = val.sortBy;
        this.sortByDesc = val.sortDesc;
        this.setItems();
        this.items.sortOn(this.sortBy);
    }
    
  },
  data() {
    return {
      fields: [
        {key: 'no', sortable: false},
        {key: 'nim', sortable: true, label: 'NIM'},
        {key: 'nama', sortable: true},
        {key: 'check', sortable: false, label: 'TTD'},
        {key: 'signature', sortable: false, label: 'Confirm'}
      ],
      items: [],
      meta: {
        per_page:10,
        current_page:1,
        total:3
      },
      current_page: 1,
      per_page:10,
      search: '',
      sortBy: 'Nama', 
      sortByDesc: false,
      data : [],
      ijazah:true,
      role: 0
    }
  },
  mounted(){
    const user = this.$session.get('user');
    this.role = user.role;
    Array.prototype.sortOn = function(key){
      this.sort(function(a, b){
          if(a[key] < b[key]){
              return -1;
          }else if(a[key] > b[key]){
              return 1;
          }
          return 0;
      });
    }
    const ipfsClient = require('ipfs-http-client')
    this.ipfs = ipfsClient(process.env.VUE_APP_ENDPOINT_IPFS);
    getIjazah()
      .then(response =>{
        this.data = response;
        this.setItems();
      })
      .catch(errors => {
        console.log(errors)
        swal({
          title : "Server Error",
          icon: "error",
        });
      });
  },

};
</script>
