<template>
    <div class="bg-green">
        <!-- <span class="title"><br>
            Prototipe Sistem Pengamanan dan Pencegahan Dokumen Ijazah dan Transkrip Elektronik
            Palsu Berbasis
            Blockchain<br>
        </span> -->
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-6 col-xs-12" style="text-align:left;align:center">
                    <img src="img/ristekdikti.png" alt="Ristek Dikti" class="gambar">
                </div>
                <div class="col-md-7 col-6 col-xs-12" style="text-align:left;align:center">
                    <h3 class="teks">Pastikan Keabsahan Ijazah dan Transkripmu</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'main-navbar'
    }
</script>
<style>
    .teks {
        color:#faf9e8;
        font-family: 'Raleway', sans-serif;
        height: 100%;
        font-size:3rem;
        margin-top : 200px;
        text-align:center;
    }
    .gambar{
        margin-top:50px;
        width:70%;
        margin-top : 50px;
        margin-bottom : 50px;
    }
    .bg-green {
        background-color:#46A24B;
        text-align:right;
        border-style : solid;
        border : 1px solid ;
        min-height : 300px;
        border-end-end-radius: 30%;
        border-end-start-radius: 30%;

    }
    .title{
        color:#faf9e8;
        font-family: 'Raleway', sans-serif;
        height: 100%;
        font-size:1rem;
    }
    @media only screen and (max-width:600px){
        .title{
            color:#faf9e8;
            font-family: 'Raleway', sans-serif;
            height: 100%;
            font-size:12px;
        }
        .bg-blue {
            background-color:#1c3b61;
            text-align:center;

        }
        .bg-green {
            background-color:#46A24B;
            text-align:right;
            border-style : solid;
            border : 1px solid ;
            min-height : 100px;
            border-end-end-radius: 30%;
            border-end-start-radius: 30%;

        }
        .teks {
            color:#faf9e8;
            font-family: 'Raleway', sans-serif;
            height: 100%;
            font-size:1rem;
            margin-top : 60px;
            text-align:center;
            font-weight:bolder;
        }
        

        
}
</style>