<template>
  <div class="about">
    <h1> Page about people</h1>

    <p>your id from address is </p>
    {{id}}

  </div>
</template>


<script>
export default {
  props:[
    "id"
  ]
}
</script>