<template>

<div class="main-box">
   
<div v-for="(message, index) in messages" :key="index">
 
<div v-if="message.from == myLogin"  class="container" >
   
  <em class="time-left">From {{message.from}}</em>
  <!-- <img src="/w3images/bandmember.jpg" alt="Avatar" style="width:100%;"> -->
  <p >{{message.message}}</p>
  <span class="time-left">{{message.datetime}}</span>

</div>


<div v-else  class="container darker">
   
  <em>Name {{message.from}}</em>
  <!-- <img src="/w3images/bandmember.jpg" alt="Avatar" style="width:100%;"> -->
  <p>{{message.message}}</p>
  <span class="time-right">{{message.datetime}}</span>

</div>


</div>

 
</div>

</template>

<script>
export default {
  data() {
    return {
      user : "user24",
      dataHistory: [],
      id: this.$route.params.id,
      login : this.$route.params.login,
      myLogin : this.$store.state.data.login,
      messages :[]
    };
  },
  methods: {},
  created() {
 
  var myHeaders = new Headers();
myHeaders.append("Authorization",this.$store.state.data.token);
//myHeaders.append("Authorization","692d2cc9291d9d65");
myHeaders.append("Content-Type", "application/json");


var raw = JSON.stringify({ "from":this.login,
                          "myLogin":this.myLogin
                          //"myLogin":"user24"
                          });



  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
 
     fetch("http://localhost:8080/messages", requestOptions)
     .then(res => res.json())
    .then(json => this.messages = json)
    .then(result => console.log(result))
    .catch(error => console.log('problem', error));
  
 }
};
</script>

<style >
.main-box{
  max-width: 80%;
  margin: 0 auto;
} 
.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}

.darker {
  border-color: #ccc;
  background-color: rgb(128, 119, 1 19);
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.container img.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

.time-right {
  float: right;
  color: #aaa;
}

.time-left {
  float: left;
  color: #999;
}
</style>