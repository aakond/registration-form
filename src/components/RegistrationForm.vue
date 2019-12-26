<template>
  <div class="reg-form">
        <div class="reg-form__new-user">
            <div class="title"></div>
            <div>
                <div class="main-black"></div>
                <div class="main-gray"></div>
            </div>
            <div class="main-black"></div>
        </div>
      <div class="reg-form__sign-up"></div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  props: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title {
}
.main-black {
}
.main-gray {
}
.reg-form {
    max-width: 608px;
    margin-left: auto;
    margin-right: auto;

    &__new-user {
        height: 232px;
        background: #FFFFFF;
        border-radius: 10px;
        margin-bottom: 86px;
        transform: matrix(1, 0, 0, -1, 0, 0);        
    }

    &__sign-up {
        background: #FFFFFF;
        height: 991px;
    }
}    
</style>
