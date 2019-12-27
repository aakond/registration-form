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
            <select class="main reg-form__sign-up__input reg-form__sign-up__input__select reg-form__sign-up__input__narrow" required>
                <option value="" disabled selected hidden>Your country</option>
                <option>Some country</option>
                <option>Some country</option>
                <option>Some country</option>
                <option>Some country</option>
                <option>Some country</option>
            </select>
          </div>
          <div class="reg-form__sign-up__input-element right-column">
            <div class="main main__gray label">City</div>
            <br>
            <select class="main main__black reg-form__sign-up__input reg-form__sign-up__input__select reg-form__sign-up__input__narrow" required>
                <option value="" disabled selected hidden>Your city</option>
                <option>Some city</option>
                <option>Some city</option>
                <option>Some city</option>
                <option>Some city</option>
                <option>Some city</option>
            </select>
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Date of birth</div>
            <br>
            <input class="main main__black reg-form__sign-up__input reg-form__sign-up__input__datepicker reg-form__sign-up__input__narrow" type="date" placeholder="" >
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
::placeholder {
    color: #C1C1C1;
}

select:required:invalid {
  color: #C1C1C1;
}

option {
  color: black;
}


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
            -webkit-appearance: none;
            border-color: transparent;
            cursor: pointer;
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
            outline: none;

            &:hover {
                background: #003585;
            }

            &:click {
                width: 292px;
                height: 56px;
            }
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
            outline: none;

            &:focus {
               border: 1px solid #0056D8;
            }

            &__select {
                cursor: pointer;
                appearance: none;
                -webkit-appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg width='23' height='11' viewBox='0 0 23 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.63311 0.225936C1.20561 -0.123722 0.575598 -0.0606174 0.22594 0.366884C-0.123718 0.794386 -0.0606136 1.4244 0.366888 1.77406L1.63311 0.225936ZM11.3923 9.5L10.7592 10.2741C11.1275 10.5753 11.6571 10.5753 12.0254 10.2741L11.3923 9.5ZM22.4178 1.77406C22.8453 1.4244 22.9084 0.794385 22.5587 0.366884C22.2091 -0.0606178 21.579 -0.123722 21.1515 0.225937L22.4178 1.77406ZM0.366888 1.77406L10.7592 10.2741L12.0254 8.72594L1.63311 0.225936L0.366888 1.77406ZM21.1515 0.225937L10.7592 8.72594L12.0254 10.2741L22.4178 1.77406L21.1515 0.225937Z' fill='%23C1C1C1'/%3E%3C/svg%3E%0A");
                background-repeat: no-repeat;
                background-position: right 21px top 50%;

                &:hover {
                    background-image: url("data:image/svg+xml,%3Csvg width='23' height='11' viewBox='0 0 23 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.63311 0.225936C1.20561 -0.123722 0.575598 -0.0606174 0.22594 0.366884C-0.123718 0.794386 -0.0606136 1.4244 0.366888 1.77406L1.63311 0.225936ZM11.3923 9.5L10.7592 10.2741C11.1275 10.5753 11.6571 10.5753 12.0254 10.2741L11.3923 9.5ZM22.4178 1.77406C22.8453 1.4244 22.9084 0.794385 22.5587 0.366884C22.2091 -0.0606178 21.579 -0.123722 21.1515 0.225937L22.4178 1.77406ZM0.366888 1.77406L10.7592 10.2741L12.0254 8.72594L1.63311 0.225936L0.366888 1.77406ZM21.1515 0.225937L10.7592 8.72594L12.0254 10.2741L22.4178 1.77406L21.1515 0.225937Z' fill='%23888888'/%3E%3C/svg%3E%0A");
                }
            }

            &__datepicker {
                cursor: pointer;
                appearance: none;
                -webkit-appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg width='26' height='22' viewBox='0 0 26 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 21V3H25V21H1Z' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 8H12' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 12H12' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 17H21' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 3V1' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 3V1' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E ");                background-repeat: no-repeat;
                background-position: right 20px top 50%;

                &:hover {
                    background-image: url("data:image/svg+xml,%3Csvg width='26' height='22' viewBox='0 0 26 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 21V3H25V21H1Z' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 8H12' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 12H12' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 17H21' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 3V1' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 3V1' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E ");
                }
            }

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
