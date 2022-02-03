<template>
    <div class="app">
        <carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img class="slider" :src="slide" :alt="slide">
                <!-- <p>{{slide}}</p>  -->
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from './components/carousel/Carousel.vue';
import CarouselSlide from './components/carousel/CarouselSlide';
export default {
    data(){
        return {
            slides: [ 
                'https://picsum.photos/id/230/600/300',
                'https://picsum.photos/id/231/600/300',
                'https://picsum.photos/id/232/600/300',
                'https://picsum.photos/id/233/600/300',
                'https://picsum.photos/id/234/600/300',
                'https://picsum.photos/id/235/600/300',
                'https://picsum.photos/id/236/600/300',
            ],
            
      images: [],
        }
    },
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    },
  async created() {
    console.log(this.slides)
    const res = await fetch("http://37.46.133.192:8094/api/v1/slider/get");
    this.images = await res.json(); 
    this.slides=[];
    for(let i=0; i<this.images.length; i++){
      this.slides[i] = 'http://37.46.133.192:8094/' + this.images[i].image
    }
    console.log(this.slides) 
  },
}
</script>

<style>
    .app {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
        display: flex;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        width: 500px;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
    .slider{ 
        width: 100%;
    }
</style