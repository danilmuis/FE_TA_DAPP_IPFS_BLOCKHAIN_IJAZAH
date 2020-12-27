<template>
    <fragment>
    <main-navbar></main-navbar>
    <div class="bg-blue">
        <div class=" col-xs-12 text-center ">
            <div class="row">
                <div class="col-md-6">
                    <a href="/admin"><img src="img/admin.png" alt="admin" class="gambar-dashboard"  ></a>
                    <p class="text-dashboard">Pengajuan Ijazah & Transkrip</p>
                </div>
                <div class="col-md-6">
                    <a href="/checker"><img src="img/stakeholder.png" alt="stakeholder" class="gambar-dashboard"  ></a>
                    <p class="text-dashboard">Verifikasi Ijazah & Transkrip</p>
                </div>
            </div>
        </div>
    </div>
    <main-footer></main-footer>
    </fragment>
</template>
<script>
    import {MainNavbar,MainFooter} from "@/pages";
    
    export default{
        name:'main-dashboard',
        components: {
            MainNavbar,
            MainFooter
        },
        mounted() {
        }
    }
</script>
<style>
    .gambar-dashboard {
        width:200px;
    }
    .text-dashboard {
        color:#46A24B;
        font-family: 'Raleway', sans-serif;
        height: 100%;
        font-size:2rem;
        text-align:center;
        margin-top:50px;
    }
    /* .bg-blue {
        margin-top : 40px;
        background-color:#EEEEEE;
        height:30%
    } */
    
    .card-bege{
        width: 25rem; margin: auto;  background-color: #faf9e8;
    }
    @media only screen and (max-width:600px){
        .card-bege{
            width: 10rem; margin: auto;  background-color: #faf9e8;
        }
        .text-dashboard {
            color:#46A24B;
            font-family: 'Raleway', sans-serif;
            height: 100%;
            font-size:1rem;
            text-align:center;
            margin-top:20px;
        }
        .gambar-dashboard {
            width:100px;
        }
    }

    
</style>