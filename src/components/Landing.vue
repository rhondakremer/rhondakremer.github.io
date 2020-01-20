<template>
  <div id="container" class="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
    <img id ="mypic" src='../assets/myface.jpg' />
    <p id="brand-statement">
      Full Stack Web Developer with excellent teamwork skills and keen attention to detail. A graduate of the Full Stack Web Development Bootcamp at the University of Miami. Currently working as a front-end developer at Miami Dade County Public Schools. Analytical thinking skills and competence in various languages and tools such as Javascript, Node.js, Vue, React, and more. Prepared to create high-level and fully-functioning websites and applications.
  </p>
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
  background-color: pink;
  text-align: center;
  padding: 2%;
  border-radius: 0.5em;
  margin-top: 4%
}

#mypic {
  width: 20%;
}

#brand-statement {
  line-height: 30px;
  margin-top: 4%;
  margin-left: 2%;
  font-size: 18px;
}
</style>
