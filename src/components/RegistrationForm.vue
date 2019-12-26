<template>
  <div class="reg-form">
        <div class="reg-form__new-user">
            <div class="title reg-form__new-user__title">New User</div>
            <div class="main reg-form__new-user__user-info">
                <div class="main__black"> {{firstname}} {{lastname}} / <span class="main__gray">{{ login }}</span></div>                
            </div>
            <div class="main main__black">{{email}}</div>
        </div>
      <div class="reg-form__sign-up">
          <div class="title reg-form__sign-up__title">Sign Up</div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Login<span class="main__red">*</span></div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__wide " type="text" v-model="login" placeholder="Your login" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Email<span class="main__red">*</span></div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__wide " type="text" v-model="email" placeholder="Your email" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Password</div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__wide " type="password" placeholder="Your password" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">First name</div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__narrow " type="text" v-model="firstname" placeholder="Your first name" >
          </div>
          <div class="reg-form__sign-up__input-element right-column">
            <div class="main main__gray label">Last name</div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__narrow" type="text" v-model="lastname" placeholder="Your last name" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Country</div>
            <br>
            <select class="main main__black reg-form__sign-up__input reg-form__sign-up__input__narrow" placeholder="Select" ></select>
          </div>
          <div class="reg-form__sign-up__input-element right-column">
            <div class="main main__gray label">City</div>
            <br>
            <select class="main main__black reg-form__sign-up__input reg-form__sign-up__input__narrow" placeholder="Select" ></select>
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Date of birth</div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__narrow" type="date" placeholder="" >
          </div>
          <div class="reg-form__sign-up__input-element  right-column">
            <div class="main main__gray label">Zip code</div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__narrow" type="text" placeholder="Code" >
          </div>
          <button class="reg-form__sign-up__button">SIGN UP</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  props: {
      login: String,
      email: String,
      firstname: String,
      lastname: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


.title {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: #333333;
    border-radius: 10px;
}

.main {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    border-radius: 10px;
    
    &__black {
        color: #333333;
    }
    
    &__gray {
        color:#888888;
    }

    &__red{
        color: #E90000;
    }
}

.label {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    float: left;
    display: flex;
}

.reg-form {
    max-width: 608px;
    margin-top: 54px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    &__new-user {
        height: 232px;
        background: #FFFFFF;
        border-radius: 10px;
        margin-bottom: 86px;

        &__title {
            padding-top: 54px;
        }

        &__user-info {
            padding-top: 24px;
            padding-bottom: 16px;
        }
    }

    &__sign-up {
        background: #FFFFFF;
        height: 991px;
        padding-left: 64px;
        padding-right: 64px;

        &__button {
            height: 64px;
            width: 324px;
            margin-top: 46px;
            margin-bottom: 87px;
            background: #0056D8;
            border-radius: 0px 20px;
            font-family: Roboto;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }

        &__title {
            padding-top: 64px;
            padding-bottom: 16px;
        }

        &__input-element {
            float:left;
            margin-bottom: 24px;
        }

        &__input {
            height: 64px;
            margin-top: 5px;            
            padding-left: 24px;
            padding-right: 24px;
            background: #FFFFFF;
            border: 1px solid #C1C1C1;
            box-sizing: border-box;
            border-radius: 4px;

            &__wide {
                width: 480px;
            }

            &__narrow {
                width: 228px;
            }

        }
    }
}    

.right-column {
    margin-left: 24px;
}
</style>
