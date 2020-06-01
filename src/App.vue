<template>
  <div id="app">
    <div id="nav">
      
      <router-link to="/people">people</router-link>|
      <router-link to="/planets">planets</router-link>|
      <router-link to="/films">films</router-link>|
      <router-link to="/species">species</router-link>|
      <router-link to="/vehicles">vehicles</router-link>|
      <router-link to="/starships">starships</router-link>|
      <router-link to="/wplayground">wplayground</router-link>|
      <router-link to="/registration">registration</router-link>
      
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



body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>
