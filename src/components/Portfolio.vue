<template>
  <div id="container" class="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 container" style="margin-bottom: 2%;">
   <div v-for="project in projects" :key="project.title" class="project-container">
    <!-- <p>{{ project.title }}</p> -->
    <img class="project-image image" :src="project.img" :alt="project.alt"  />
    <div class="overlay">
    <div class="text">
        <h2>{{ project.title }}</h2>
        <p>Deployed: <br><a :href="project.deployed" target="_blank">{{ project.deployed}}</a></p>
        <p>Github: <a :href="project.github" target="_blank">{{ project.github }}</a></p>
        <p>Technologies: {{ project.technologies}}</p>
        <p class="description">Description: {{ project.description}}</p>
    </div>
    </div>
    <div>
  </div>
  
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {   title: "Vue Stock Trader", 
                    img: require('../assets/screenshots/ss-vue-stock-trader.png'), 
                    alt: 'Vue Stock Trader Screenshot',
                    deployed: 'http://vuejs-stock-trader-app-rhonda.s3-website.us-east-2.amazonaws.com/',
                    github: 'https://github.com/rhondakremer/vue-stock-trader',
                    technologies: 'Vue.js, Firebase, Axios, AWS S3',
                    description: 'Stock trader game to sell and buy stocks, end the day, and save and import information from a previous day.'
                    },
                {   title: "Meme Wars", 
                    img: require('../assets/screenshots/ss-meme-wars.png'), 
                    alt: 'Meme Wars Screenshot',
                    deployed: 'https://safe-depths-86355.herokuapp.com/',
                    github: 'https://github.com/rhondakremer/final-project',
                    technologies: 'React.js, MongoDB, Mongoose, Node.js, Express',
                    description: 'A social networking app to see who can make the best meme!'
                    },
                {   title: "Puppy Click Game", 
                    img: require('../assets/screenshots/ss-react-click-game.png'), 
                    alt: 'Puppy Click Game Screenshot',
                    deployed: 'https://rhondakremer.github.io/react-click-game/',
                    github: 'https://github.com/rhondakremer/react-click-game',
                    technologies: 'React.js',
                    description: 'A memory game- try not to click the same puppy twice!'
                },    
                {   title: "Positive News Scrape", 
                    img: require('../assets/screenshots/ss-news-scraper.png'), 
                    alt: 'Positive News Scrape Screenshot',
                    deployed: 'https://arcane-wave-64414.herokuapp.com/',
                    github: 'https://github.com/rhondakremer/news-scrape',
                    technologies: 'Axios, Cheerio, Express, MongoDB, Mongoose',
                    description: 'Life is hard enough- view only positive news scraped from Positive.news.'
                },
                
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
    flex-wrap: wrap; 
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
  background-color: navy;
}

.project-container:hover .overlay {
  opacity: 0.9;
}

.text {
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

a {
    color: whitesmoke;
}

a:hover {
   color: lightblue
}

@media screen and (max-width: 1024px) {
  .container {
    display: block;
  }

  .project-container {
    position: relative;
    width: 100%;
  }

  .overlay {
    opacity: 0.8;
    border: white solid 1px;
  }
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 20px;
    margin-top: 15px;
  }

  .text {
    font-size: 14px;
  }

  .description {
    display: none;
  }
}

@media screen and (max-width: 400px) {
  h2 {
    font-size: 18px;
    margin-top: 15px;
  }
  
  .text {
    font-size: 10px;
  }
}
</style>
