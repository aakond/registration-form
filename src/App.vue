<template>
  <div id="app">
    <RegistrationForm/>
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue'

export default {
  name: 'app',
  components: {
    RegistrationForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto';
  text-align: center;
  margin-top: 222px;
  margin-bottom: 155px;
}

body {
  background-color: #f1f1f1;
}

</style>
