<template>
  <div id="app">
    <div id="nav">
      
      <router-link to="/people">people</router-link>|
      <router-link to="/planets">planets</router-link>|
      <router-link to="/films">films</router-link>|
      <router-link to="/species">species</router-link>|
      <router-link to="/vehicles">vehicles</router-link>|
      <router-link to="/starships">starships</router-link>|
      
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name:"app"
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
