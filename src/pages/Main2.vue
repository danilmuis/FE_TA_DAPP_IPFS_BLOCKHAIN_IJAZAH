<template>
    <fragment>
    <main-navbar></main-navbar>
    <div class="bg-blue" style="height:80%">
        <div id="particles-js"  ></div><br><br>
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
                                    <a href="/stakeholder"><img src="../../src/assets/img/stakeholder.png" alt="stakeholder"
                                            width="150"></a>

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
            particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 380,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        }
    }
</script>
<style>
.bg-blue {
        background-color:#1c3b61;
    }
    #particles-js {
  position: absolute;
  width: 100%;
  height: 80%;
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