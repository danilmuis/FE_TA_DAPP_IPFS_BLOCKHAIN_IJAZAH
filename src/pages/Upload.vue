<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">IPFS Ijazah dan Transkrip</h4>
                        <p class="category">Klik Download untuk mengunduh file</p>
                    </md-card-header>
                    <md-card-content>
                        <vue-dropzone ref="dropzone" id="drop1" :useCustomSlot=true :options="dropOptions" v-on:vdropzone-error="error" v-on:vdropzone-success="success" v-on:vdropzone-sending="sendingEvent" class="dz-message">
                            <div class="dropzone-custom-content">
                                <h3 class="dropzone-custom-title">Seret Berkasmu Untuk Upload</h3>
                                <div class="subtitle">...atau Klik Untuk Memilih File</div>
                            </div>
                        </vue-dropzone>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>
<script>
    import vueDropzone from "vue2-dropzone";
    export default {
        components: {
            vueDropzone
        },
        data() {
            return  {
                dropOptions: {
                    url: process.env.VUE_APP_ENDPOINT_API+'/upload',
                }

            }
        },
        methods:{
            success(file,response){
                console.log(response);
                alert(response.message);
            },
            error(file,response,xhr){
                console.log(response);
                alert(response);
            },
            sendingEvent(){
                this.$refs.dropzone.removeAllFiles();
            },
        }
    }
</script>
<style>

</style>