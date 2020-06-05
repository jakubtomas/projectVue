<template>
<div>

  <div id="app">

    <div id="data" v-if="this.$store.state.data.token">
      <p>Fname  {{this.$store.state.data.fname }} ----
        Login 
         {{this.$store.state.data.login}} 
         and token {{this.$store.state.data.token}}</p>
    </div>
    <div id="data" v-else>
        <p>Unsigned </p>
    </div>


    <div id="nav" v-if="!this.$store.state.data.token">
      
      <!-- <router-link to="/people">people</router-link>|
      <router-link to="/planets">planets</router-link>|
      <router-link to="/films">films</router-link>|
      <router-link to="/species">species</router-link>|
      <router-link to="/vehicles">vehicles</router-link>|
      <router-link to="/starships">starships</router-link>| -->
      <router-link to="/wplayground">wplayground</router-link>
      <router-link to="/registration">registration</router-link>
      <router-link to="/signin">signin</router-link>
      
      
    </div>

    <div id="nav" v-else>
      
    
      <router-link to="/message">Message</router-link>
      <router-link to="/log">Log</router-link>
      <router-link to="/updatePassword">Change Password</router-link>
      <router-link to="/updateName">Update name</router-link>
      <button  type="submit">Logout</button>
    </div>

    

    <router-view />
  </div>

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
#data {
  display: inline-block;
  border: 1px solid black;
  background-color: rgb(179, 228, 179);
  border-radius: 10px;
  padding: 0 10px;
}

#nav {
  padding: 10px;
  display: inline-block;
  a {
    font-weight: bold;
color: #2c3e50;
padding: 5px 4px;
background-color: #67cb8e;
border-radius: 10px;
border: 1px solid black;
margin: 0px 3px;

    &.router-link-exact-active {
      color: #32330a;
      background-color: rgb(98, 238, 5);
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
