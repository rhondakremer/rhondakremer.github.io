<template>
  <div id="navbar">
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" activeClass="active" exact><a>Home</a></router-link>
      <router-link to="/portfolio" tag="li" activeClass="active"><a>Portfolio</a></router-link>
      <router-link to="/resume" tag="li" activeClass="active"><a>Resume</a></router-link>
      <router-link to="/contact" tag="li" activeClass="active"><a>Contact</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#navbar {
  color: red;
  display:flex; 
  justify-content:space-around; 
  align-items:center; 
  border-bottom: 2px solid pink; 
  margin-bottom:2%;
}
</style>
