<template>
  <div id="films">
    <div v-for="(film, index) in characters" :key="index" class="single-film">
      <router-link v-bind:to="'/films/' + parseInt(index+1) ">
        <div v:bind:id="1">{{film.title}}</div>
      </router-link>
    </div>


<p>------------------</p>
<ul>
  <li v-for="(dude, index) in characters" :key="index">
     
     {{dude.from}}
    --
   
   
     </li>
</ul>

  </div>


</template>

<script>
export default {
  data() {
    return {
      films: [],
      id: "",
      characters : [],
    };
  },
  methods: {},
  created() {


var requestOptions = {
  method: 'GET',
 // body: raw,
  redirect: 'follow'
};

      fetch("http://localhost:8080/playground",requestOptions)
        .then(response => response.json())
        .then(json => {
          this.characters = json.results} );
         
          
        
//var raw = "";


// fetch("localhost:8080/playground", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
        
 }




};



</script>


<style >

</style>