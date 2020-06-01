<template>
  <div id="films">
    <div v-for="(film, index) in characters" :key="index" class="single-film">
        <p>{{film.error}}</p>
        <h4>From {{film.from}}</h4>
        <h3>To {{film.to}}</h3>
        <div v:bind:id="1">{{film.message}}</div>
      
    </div>


<!--  Form start function login @keydown.enter  @submit.prevent -->
<h1>Registration user</h1>
  <form class="add-form" @submit.prevent="addUser">    
    fname <input type="text" v-model="fname"> <br>
    lname <input type="text" v-model="lname"> <br>
    
    login <br><input type="text" v-model="login"> <br>
    Password <input type="text" v-model="password"> <br>
    <button type="submit">Create New User</button>
  </form>


    <!-- <p v-if="Object.values(characters)"> my data <strong>{{Object.values(characters)[0]}}</strong></p> -->
    <p v-if="characters.error"> my data <strong>{{characters.error}}</strong></p>
<div v-else> 
  <strong> fname {{characters.fname}}</strong>
  <p>l name {{characters.lname}}</p>
  <p>password {{characters.password}}</p>
  <p>login {{characters.login}}</p>
  <p> token {{characters.token}}</p>
</div>

<ul>
  <li v-for="(dude, index) in characters" :key="index">
     {{characters.error}}
     </li>
</ul>

<h4>{{login}}</h4>
  </div>


</template>

<script>
export default {
  data() {
    return {
      fname :"",
      lname :"",
      login :"",
      password : "",
      films: [],
      message:"Hello ",
      id: "",
      characters : [],
    };
  },
  methods: {
    addUser(){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"fname":this.fname,
                          "lname":this.lname,
                          "login":this.login,
                          "password":"password123123"
                          });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


fetch("http://localhost:8080/signup", requestOptions)
    // .then(function(response) {
    // console.log(response.status); // returns 200

    // })

  .then(res => res.json())
  .then(json => this.characters = json)
  .then(result => console.log(result))
  .catch(error => console.log('problem', error));

    }
  },
  created() {



      // fetch("http://localhost:8080/playground",requestOptions)
      //   .then(response => response.json())
      //   .then(json => {
      //     this.characters = json.results} );
         
          
        
//var raw = "";



  

// fetch("http://localhost:8080/playground", requestOptions)
// .then(response => response.json())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));
      
 }


// .then(res => res.json())
// .then(json => this.characters = json)



};



</script>


<style >
.add-form{
  border: 1px solid black;
  margin: 20px 0px;
  margin-bottom: 30px;
};
</style>