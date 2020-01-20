<template>
  <div id="container" class="col-lg-10 offset-lg-1 col-md-10 offset-md-1 container" style="">
   <div v-for="project in projects" :key="project.title" class="project-container">
    <!-- <p>{{ project.title }}</p> -->
    <img class="project-image image" :src="project.img" :alt="project.alt"  />
    <div class="overlay">
    <div class="text">{{ project.title }}</div>
    </div>
    <div>
  </div>
  
  </div>
</div>
</template>

<script>
export default {
    data() {
        return{
            projects: [
                { title: "Vue Stock Trader", img: require('../assets/screenshots/ss-vue-stock-trader.png'), alt: 'Vue Stock Trader Screenshot' },
                { title: "Meme Wars", img: require('../assets/screenshots/ss-memewars.png'), alt: 'Meme Wars Screenshot'},
                { title: "Puppy Click Game", img: require('../assets/screenshots/ss-react-click-game.png'), alt: 'Puppy Click Game Screenshot' },
                { title: "Positive News Scrape", img: require('../assets/screenshots/ss-newsscraper.png'), alt: 'Positive News Scrape Screenshot' },
                
            ]
        }
    }
}
</script>

<style scoped>
.container {
    border: 3px solid black;
    padding: 10px;
    background-color: whitesmoke;
    display: flex; 
    flex-wrap:wrap; 
    align-items: center
}

.project-image {
    width: 50%;
    padding: 1%;
}

.project-container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.project-container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
