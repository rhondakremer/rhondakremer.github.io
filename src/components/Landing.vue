<template>
  <div id="container" class="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
    <img id ="mypic" src='../assets/myface.jpg' />
    <div id="brand-statement">
      <p>
        Full Stack Web Developer with excellent teamwork skills and keen attention to detail. Currently working as a front-end developer at Miami Dade County Public Schools. A graduate of the Full Stack Web Development Bootcamp at the University of Miami. Analytical thinking skills and competence in various languages and tools such as Javascript, Node.js, Vue, React, and more. Prepared to create high-level and fully-functioning websites and applications.</p>
      <p>Contact me at <a href="mailto:rhondakremer@gmail.com" target="_top">rhondakremer@gmail.com</a>!</p>
      <p>
        <a href="https://github.com/rhondakremer" target="_blank"><img src="../assets/github-icon.png" class="icon" style="margin-left: -3%;" /></a>
        <a href="https://www.linkedin.com/in/rhondakremer/" target="_blank"><img src="../assets/linkedin-icon.png" class="icon" /></a>
      </p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  display: flex;
  background-color: whitesmoke;
  text-align: center;
  padding: 2%;
  border-radius: 0.5em;
  margin-top: 4%;
  border: 1px solid black;
}

#mypic {
  width: 20%;
}

#brand-statement {
  line-height: 30px;
  margin-left: 2%;
  font-size: 20px;
  margin-top: 2%;
}

.icon {
  width: 5%;
  margin-left: 3%;
}

@media screen and (max-width: 1024px) {
  #mypic {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  #container {
    display: block;
  }
  h2 {
    font-size: 20px;
    margin-top: 15px;
  }

  .text {
    font-size: 14px;
  }

  #mypic {
    width: 80%;
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
