<template>
    <fragment>
    <main-navbar></main-navbar>
    <div class="bg-blue" style="height:30%">
        <div class="card card-bege" >
            <div class="card-header text-center border border-success  ">
                <h6 style="color:blue;">Choose Access</h6>
            </div>
            <div class="card-body text-center border border-success col-xs-12 ">
                <div class="row">
                    <div class="col-md-6  img1 img-responsive">
                        <a href="/admin"><img src="../../src/assets/img/admin.png" alt="admin" width="150"></a>
                    </div>
                    <div class="col-md-6  img2 img-responsive">
                        <a href="/checker"><img src="../../src/assets/img/stakeholder.png" alt="stakeholder" width="150"></a>
                    </div>
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
    .bg-blue {
        margin-top : 40px;
        background-color:#EEEEEE;
    }
    
    .card-bege{
        width: 25rem; margin: auto;  background-color: #faf9e8;
    }
    @media only screen and (max-width:600px){
        .card-bege{
            width: 10rem; margin: auto;  background-color: #faf9e8;
        }
    }

    
</style>