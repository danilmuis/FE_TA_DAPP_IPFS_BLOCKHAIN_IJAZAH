<template>
<fragment>
  <div class="md-layout-item md-small-size-100 md-size-10" id="remove">
    <md-field>
      <button @click="deleteRow"><md-icon>remove_circle</md-icon></button>
    </md-field>
  </div>
  <div class="md-layout-item md-small-size-100 md-size-20">
    <md-field>
      <label>Kode Mata Kuliah </label>
      <md-input v-model="kode_matkul" name="kode_matkul" type="text" ></md-input>
    </md-field>
  </div>
  <div class="md-layout-item md-small-size-100 md-size-20">
    <md-field>
      <label>Mata Kuliah</label>
      <md-input v-model="matkul" name="matkul" type="text"></md-input>
    </md-field>
  </div>
  <div class="md-layout-item md-small-size-100 md-size-10">
    <md-field>
      <label>Semester</label>
      <md-input v-model="semester" name="semester" type="text"></md-input>
    </md-field>
  </div>
  <div class="md-layout-item md-small-size-100 md-size-20" >
    <md-field>
      <label>Jumlah SKS</label>
      <md-input v-model="sks" name="sks" type="text"></md-input>
    </md-field>
  </div>
  <div class="md-layout-item md-small-size-100 md-size-20" id="nilai" >
    <md-field>
      <label>Nilai </label>
      <md-input v-model="nilai" name="nilai" type="text"></md-input>
    </md-field>
  </div>
</fragment>


</template>
<script>

export default {
  name: "mata-kuliah",
  props:['submit'],
  data(){
    return{
      nilai:null,
      sks:null,
      semester:null,
      matkul:null,
      kode_matkul:null
    }
  },
  watch: { 
    submit: function() {
       // watch it
      const data = {
        nilai:this.nilai,
        sks:this.sks,
        semester:this.semester,
        matkul:this.matkul,
        kode_matkul:this.kode_matkul,
      }
      this.$emit('mk',data);
    }
  },
  methods: {
    display(){
      console.log(this.nilai,this.sks,this.semester,this.matkul,this.kode_matkul);
    },
    deleteRow(event){
      event.preventDefault();
      this.$emit("hapus");
    }
    
  }
};
</script>
