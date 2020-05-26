<template>
  <div class="home">
    <h1>Hello how are you ? </h1>
    <img alt="Vue logo" src="../assets/logo.png" /> 

    <!-- comment html  helloss -->
    
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
