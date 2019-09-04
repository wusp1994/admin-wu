<template>
  <div>
      <p v-for="(item,index) in 200">
          {{`home`+index}} <br><br><br><br><br>
      </p>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
