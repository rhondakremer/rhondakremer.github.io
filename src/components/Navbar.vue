<template>
  <div id="navbar">
    <div id="title">
        <h1>Rhonda Kremer</h1>
        <h3>Full Stack Web Developer</h3>
    </div>

    <ul class="nav nav-pills">
      <router-link to="/" tag="li" activeClass="active" exact><a>Home</a> /</router-link>
      <router-link to="/portfolio" tag="li" activeClass="active"><a>Portfolio</a></router-link>
      <!-- <router-link to="/resume" tag="li" activeClass="active"><a>Resume</a> /</router-link> -->
      <!-- <router-link to="/contact" tag="li" activeClass="active"><a>Contact</a></router-link> -->
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#navbar {
  color: #78184a;
  display:flex; 
  justify-content:space-between; 
  align-items:center; 
  border-bottom: 4px solid #78184a; 
  margin-bottom:2%;
  background-color: rgb(248, 229, 233);;
  padding: 10px;
}

#title {
    margin-left: 5%;
    letter-spacing: 2px;
}

h1 {
    font-weight: bold;
}
.nav {
    margin-right: 5%;
}

li, a {
    margin-left: 5px;
    font-weight: bold;
    color: navy;
    font-size: 20px;
}
</style>
