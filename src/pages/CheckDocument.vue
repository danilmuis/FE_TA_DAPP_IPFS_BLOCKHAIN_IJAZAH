<template>
    <fragment>
    <div class="bg-blue" style="height:100%;width:100%;">
        <div class="container">
        <div class="row">
        <div class="col-md-6" style="text-align:left;">
                    <a href="/"><img src="../../src/assets/img/ristekdikti.png" alt="Ristek Dikti" style="margin-top:50px;width:150px;"></a>
                    <h1
                        style="color: #fff;font-weight: 500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                        SIVIL-CHAIN</h1>
                    <h6
                        style="color: #fff;text-transform: none; font-size:16px;font-weight: 500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                        Sistem Verifikasi Dokumen Elektronik Ijazah dan Transkrip Berbasis Blockchain</h6>
                    <hr style="background-color:darkorange;">
                    <h6
                        style="color: #fff;text-transform: none; margin-top: 20px;font-weight: 500;font-size:16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                        Untuk memastikan keabsahan ijazah dan transkrip
                        anda, pastikan
                        file ijazah dan transkrip anda dapat diverifikasi melalui SIVIL.
                        <br>Apabila file ijazah dan transkrip tidak terdaftar, silakan hubungi Perguruan Tinggi
                        yang menerbitkan ijazah dan transkrip untuk memastikan data anda telah dilaporkan melalui
                        PD-DIKTI.
                    </h6>
                </div>
           <div class="col-md-6" style="margin:auto;"> 
               
    <vue-dropzone ref="dropzone" id="drop1" :options="dropOptions" v-on:vdropzone-error="error" v-on:vdropzone-success="success" v-on:vdropzone-sending="sendingEvent"></vue-dropzone>
    </div>
    </div>
    </div>
    </div>
    <main-footer></main-footer>
    </fragment>
</template>
<script>
    import {MainFooter} from "@/pages";
    import vueDropzone from "vue2-dropzone";
    export default{
        name:'check-document',
        components: {
            MainFooter,
            vueDropzone
        },
        
        data() {
            return  {
                dropOptions: {
                    url: process.env.VUE_APP_ENDPOINT_API+'/stakeholder',
                }

            }
        },
        mounted() {
            
        },
        methods: {
            removeAllFiles() {
                this.$refs.dropzone.removeAllFiles();
            },
            sendingEvent(){
                this.$refs.dropzone.removeAllFiles();
            },
            success(file,response){
                swal({
                    title : "Dokumen Valid",
                    text : 'Hash : '+response.message,
                    icon: "success",
                });
            },
            error(file,response,xhr){
                swal({
                    title : "Dokumen Tidak Valid",
                    icon: "error",
                });
            }
        }
    }
</script>
<style>
    .bg-blue {
        background-color:#1c3b61;
        
    }
    
    .card-bege{
        width: 25rem; margin: auto;  background-color: #faf9e8;
    }
    @media only screen and (max-width:600px){
        .card-bege{
        width: 10rem; margin: auto;  background-color: #faf9e8;
    }
    .gambar{
        width:100px;
    }
    
    .box {
            position: relative;
            background: #ffffff;
            width: 100%;
        }

        .box-header {
            color: #444;
            display: block;
            padding: 10px;
            position: relative;
            border-bottom: 1px solid #f4f4f4;
            margin-bottom: 10px;
        }

        .box-tools {
            position: absolute;
            right: 10px;
            top: 5px;
        }
    
    
}

    
</style>