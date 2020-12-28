<template>
    <fragment>
        <div class="new-bg" style="">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 teksnya" style="">
                        <a href="/"><img src="img/ristekdikti.png" alt="Ristek Dikti" class="check-gambar"></a>
                        <h1
                            class="text-check">
                            SIVIL-CHAIN
                        </h1>
                        <h6
                            class="text-check check2">
                            Sistem Verifikasi Dokumen Elektronik Ijazah dan Transkrip Berbasis Blockchain dan IPFS
                        </h6>
                        <hr style="background-color:#000000;">
                        <h6 class="text-check check3">
                            Untuk memastikan keabsahan ijazah dan transkrip
                            anda, pastikan
                            file ijazah dan transkrip anda dapat diverifikasi melalui SIVIL.
                            <br>Apabila file ijazah dan transkrip tidak terdaftar, silakan hubungi Perguruan Tinggi
                            yang menerbitkan ijazah dan transkrip untuk memastikan data anda telah dilaporkan melalui
                            PD-DIKTI.
                        </h6>
                    </div>
                    <div class="col-md-6" style="margin:auto;"> 
                        <vue-dropzone :useCustomSlot=true ref="dropzone" v-on:vdropzone-thumbnail="thumbnail" id="customdropzone" :options="dropOptions" v-on:vdropzone-error="error" v-on:vdropzone-success="success" v-on:vdropzone-sending="sendingEvent">
                            <div class="dropzone-custom-content">
                                <h4 class="dropzone-custom-title">Seret Dokumenmu Untuk dicek Keasliannya</h4>
                                <div class="subtitle">...atau Klik Untuk Memilih Dokumen</div>
                            </div>
                        </vue-dropzone>
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
                })
            },
            error(file,response,xhr){
                //console.log(response);
                swal({
                    title : "Dokumen Tidak Valid",
                    icon: "error",
                })
            },
           
        }
    }
</script>
<style>
    .teksnya{
        text-align:justify;
    }
    .text-check{
        color: #fff;
        text-transform: none; 
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .check2{
        font-size:16px;
    }
    .check3{
        font-size:16px; 
        margin-top: 20px;
    }
    .check-gambar{
        margin-top:50px;
        width:150px;
    }
    #customdropzone {
        border:2px dashed darkgreen;
        background-color:#EEEEEE;
        font-family: Arial,sans-serif;
        letter-spacing: .2px;
        color: #46A24B;
        -webkit-transition: .2s linear;
        transition: .2s linear;
        margin-top:100px;
        margin-left:100px;
    }
    #customdropzone .dz-preview  {
        position: relative;
        display: inline-block;
        vertical-align: top;
        margin-right: 80px;
        min-height: 100px;
    }
    #customdropzone .dz-preview .dz-details  {
        
        background-color:lightgreen;
    }
    .new-bg {
        background-color:#46A24B;
        text-align:right;
        border-style : solid;
        border : 1px solid ;
        min-height : 560px;
        border-end-end-radius: 30%;
        border-end-start-radius: 30%;
        height:70%;
        width:100%;
        
    }
    .card-bege{
        width: 25rem; margin: auto;  background-color: #faf9e8;
    }
    @media only screen and (max-width:600px){
        .check-gambar{
            margin-top:50px;
            width:150px;
            margin-left:80px;
        }
        .card-bege{
            width: 10rem; margin: auto;  background-color: #faf9e8;
        }
        .new-bg {
            background-color:#46A24B;
            text-align:right;
            border-style : solid;
            border : 1px solid ;
            min-height : 50px;
            border-end-end-radius: 30%;
            border-end-start-radius: 30%;
            height:30%;
            width:100%;
        
        }
        .text-check{
            color:#46A24B;
            text-transform: none; 
            font-weight: 500;
            margin-top:50px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .check2{
            font-size:16px;
            margin-top:10px;
        }
        .check3{
            font-size:16px; 
            margin-top: 20px;
            margin-top:10px;
        }
        #customdropzone {
            border:2px dashed darkgreen;
            background-color:#EEEEEE;
            font-family: Arial,sans-serif;
            letter-spacing: .2px;
            color: #46A24B;
            -webkit-transition: .2s linear;
            transition: .2s linear;
            margin-top:30px;
            margin-left:20px;
            margin-bottom:200px;
        }
        #customdropzone .dz-preview  {
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin-right: 15px;
            min-height: 100px;
            z-index: 0;
        }
        #customdropzone .dz-preview .dz-details  {
            
            background-color:lightgreen;
        }
    /* .gambar{
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
        } */
    
    
}

    
</style>