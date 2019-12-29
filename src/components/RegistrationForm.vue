
<template>
  <div class="reg-form">
      <form
        id="app"
        @submit="checkForm"
        method="post"
      >
        <div class="reg-form__new-user">
            <div class="title reg-form__new-user__title">New User</div>
            <div class="main reg-form__new-user__user-info">
                <div class="main__dark-gray"> {{firstname}} {{lastname}} / <span class="main__gray">{{ login }}</span></div>                
            </div>
            <div class="main main__dark-gray">{{email}}</div>
        </div>
      <div class="reg-form__sign-up">
          <div class="title reg-form__sign-up__title">Sign Up</div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Login<span class="main__red">*</span></div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__wide " type="text" v-model="login" placeholder="Your login" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Email<span class="main__red">*</span></div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__wide " type="text" v-model="email" placeholder="Your email" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Password</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__wide " type="password" placeholder="Your password" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">First name</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__narrow " type="text" v-model="firstname" placeholder="Your first name" >
          </div>
          <div class="reg-form__sign-up__input-element right-column">
            <div class="main main__gray label">Last name</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__narrow" type="text" v-model="lastname" placeholder="Your last name" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Country<span class="main__red">*</span></div>
            <br>
            <select required id="countrySelect" v-model="selectedCountry" @click="onSelectClicked" @change="onCountryChanged" class="main reg-form__sign-up__input reg-form__sign-up__input__select reg-form__sign-up__input__narrow">
                <option value="" disabled selected hidden>Your country</option>
                <option v-for="country in locations" :value="country" :key="country.country">{{country.country}}</option>
            </select>
          </div>
          <div class="reg-form__sign-up__input-element right-column">
            <div class="main main__gray label">City<span class="main__red">*</span></div>
            <br>
            <select required id="citySelect" v-model="selectedCity" @click="onSelectClicked" class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__select reg-form__sign-up__input__narrow" disabled>
                <option value="" disabled selected hidden>Your city</option>
                <option  v-for="city in selectedCountry.cities" :key="city">{{city}}</option>
            </select>
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Date of birth</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__datepicker reg-form__sign-up__input__narrow" type="date" placeholder="" >
          </div>
          <div class="reg-form__sign-up__input-element  right-column">
            <div class="main main__gray label">Zip code</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__narrow" type="text" placeholder="Code" >
          </div>
          <div class="main main__dark-gray" v-if="errors.length">
                Please fill the following field(s):
                <br>
                    <span v-for="error in errors" :key="error">{{ error }}<br></span>
        </div>              
          <input type="submit" class="reg-form__sign-up__button" value="SIGN UP">
            

      </div>
      </form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'RegistrationForm',
  props: {
      login: String,
      email: String,
      firstname: String,
      lastname: String,
      selectedCountry: {
          type: String,
          default: ""
      },
      selectedCity: {
          type: String,
          default: ""
      },
      
    },
   data() {
       return {
           locations: [
               {
                   country: "Some country 1",
                   cities: ["Some city 11", "Some city 12", "Some city 13", "Some city 14", "Some city 15", "Some city 16"]
               },
               {
                   country: "Some country 2",
                   cities: ["Some city 21", "Some city 22", "Some city 23", "Some city 24", "Some city 25", "Some city 26"]
               },
               {
                   country: "Some country 3",
                   cities: ["Some city 31", "Some city 32", "Some city 33", "Some city 34", "Some city 35", "Some city 36"]
               },
               {
                   country: "Some country 4",
                   cities: ["Some city 41", "Some city 42", "Some city 43", "Some city 44", "Some city 45", "Some city 46"]
               },
               {
                   country: "Some country 5",
                   cities: ["Some city 51", "Some city 52", "Some city 53", "Some city 54", "Some city 55", "Some city 56"]
               }
           ],
           errors: [],
       }
   },
   
    methods: {
        onSelectClicked: function(event) {
            document.getElementById(event.target.id).addClass("main__light-gray");
        },
        onCountryChanged: function() {
            document.getElementById('citySelect').disabled = false;
        },
        checkForm: function(e) {
            if (this.login && this.email && this.selectedCountry && this.selectedCity) {
                return true;
            }

            this.errors = [];

            if (!this.login) {
                this.errors.push('Login');
            }
            if (!this.email) {
                this.errors.push('Email');
            }
            if (!this.selectedCountry) {
                this.errors.push('Country');
            }
            if (!this.selectedCity) {
                this.errors.push('City');
            }

            e.preventDefault();                
        }
    }
}    
</script>

<style lang="scss" scoped>
::placeholder {
    color: #C1C1C1;
}

select {
    &:required:invalid {
        color: #C1C1C1
    }

    &:disabled {
        cursor: default;
        color: #C1C1C1;
        background-image: url("data:image/svg+xml,%3Csvg width='23' height='11' viewBox='0 0 23 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.63311 0.225936C1.20561 -0.123722 0.575598 -0.0606174 0.22594 0.366884C-0.123718 0.794386 -0.0606136 1.4244 0.366888 1.77406L1.63311 0.225936ZM11.3923 9.5L10.7592 10.2741C11.1275 10.5753 11.6571 10.5753 12.0254 10.2741L11.3923 9.5ZM22.4178 1.77406C22.8453 1.4244 22.9084 0.794385 22.5587 0.366884C22.2091 -0.0606178 21.579 -0.123722 21.1515 0.225937L22.4178 1.77406ZM0.366888 1.77406L10.7592 10.2741L12.0254 8.72594L1.63311 0.225936L0.366888 1.77406ZM21.1515 0.225937L10.7592 8.72594L12.0254 10.2741L22.4178 1.77406L21.1515 0.225937Z' fill='%23C1C1C1'/%3E%3C/svg%3E%0A");        
    }
}

option {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #333333;
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
    
    &__dark-gray {
        color: #333333;
    }
    
    &__gray {
        color:#888888;
    }

    &__light-gray {
        color: #C1C1C1;
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
                -moz-appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg width='26' height='22' viewBox='0 0 26 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 21V3H25V21H1Z' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 8H12' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 12H12' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 17H21' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 3V1' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 3V1' stroke='%23C1C1C1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E ");                background-repeat: no-repeat;
                background-position: right 20px top 50%;
                
                &::-webkit-inner-spin-button,
                &::-webkit-calendar-picker-indicator {
                    opacity: 0;
                    appearance: none;
                    -webkit-appearance: none;
                }                

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
