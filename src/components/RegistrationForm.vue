
<template>
  <div class="reg-form">
      <form
        id="regForm"
        method="post"
      >
        <div class="reg-form__new-user">
            <div class="title reg-form__new-user__title">New User</div>
            <div class="main reg-form__new-user__user-info">
                <div class="main__dark-gray"> {{ firstname }} {{ lastname }} / <span class="main__gray">{{ login }}</span></div>                
            </div>
            <div class="main main__dark-gray">{{ email }}</div>
        </div>
      <div class="reg-form__sign-up">
          <div class="title reg-form__sign-up__title">Sign Up</div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Login<span class="main__red">*</span></div>
            <br>
            <input  @change="onRequiredFieldsChanged" class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__wide " type="text" v-model="login" placeholder="Your login" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Email<span class="main__red">*</span></div>
            <br>
            <input @change="onRequiredFieldsChanged" class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__wide " type="text" v-model="email" placeholder="Your email" >
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Password</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__wide " type="password" v-model="password" placeholder="Your password" >
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
            <select required id="countrySelect" v-model="selectedCountry" @change="onCountryChanged" class="main reg-form__sign-up__input reg-form__sign-up__input__select reg-form__sign-up__input__narrow">
                <option value="" disabled selected hidden>Your country</option>
                <option v-for="country in locations" :value="country" :key="country.country">{{country.country}}</option>
            </select>
          </div>
          <div class="reg-form__sign-up__input-element right-column">
            <div class="main main__gray label">City<span class="main__red">*</span></div>
            <br>
            <select required id="citySelect" v-model="selectedCity" @change="onRequiredFieldsChanged" class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__select reg-form__sign-up__input__narrow" disabled>
                <option value="" disabled selected hidden>Your city</option>
                <option  v-for="city in selectedCountry.cities" :key="city">{{city}}</option>
            </select>
          </div>
          <div class="reg-form__sign-up__input-element">
            <div class="main main__gray label">Date of birth</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__datepicker reg-form__sign-up__input__narrow" type="date" v-model="dateOfBirth" placeholder="" >
          </div>
          <div class="reg-form__sign-up__input-element  right-column">
            <div class="main main__gray label">Zip code</div>
            <br>
            <input class="main main__dark-gray reg-form__sign-up__input reg-form__sign-up__input__narrow" type="text" v-model="zipCode" placeholder="Code" >
          </div>
          <div class="message message__error" v-if="errors.length">
            Please fill the following field(s):
            <br>
            <span v-for="error in errors" :key="error">{{ error }}<br></span>
          </div>
          <div class="message message__success" v-if="isSuccessMessageDisplayed">
            You have been successfully registered!
          </div>           
          <input disabled id="submitButton" @click.prevent="submit" type="submit" class="reg-form__sign-up__button" value="SIGN UP">            
      </div>
      </form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "RegistrationForm",
  props: {
            login: String,
            email: String,
            password: String,
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
            dateOfBirth: Date,
            zipCode: String,            
            isSuccessMessageDisplayed: false,      
    },
   data() {
       return {           
           errors: [],           
       }
   },
   
    methods: {
        onCountryChanged: function() {
            document.getElementById("citySelect").disabled = false;
            this.onRequiredFieldsChanged();
        },
        onRequiredFieldsChanged: function() {
            if (this.login && this.email && this.selectedCountry && this.selectedCity) {
                document.getElementById("submitButton").disabled = false;
            } else {
                document.getElementById("submitButton").disabled = true;
            }
        },
        checkForm: function() {
            if (this.login && this.email && this.selectedCountry && this.selectedCity) {
                return true;
            }

            this.errors = [];

            if (!this.login) {
                this.errors.push("Login");
            }
            if (!this.email) {
                this.errors.push("Email");
            }
            if (!this.selectedCountry) {
                this.errors.push("Country");
            }
            if (!this.selectedCity) {
                this.errors.push("City");
            }

            return false;              
        },            
        showSuccessMessage: function() {
            if (this.isFormValid) {
                this.isSuccessMessageDisplayed = true;
            }
        },
        submit: function() {
            if (this.checkForm()) {
                this.showSuccessMessage();
                this.$store.dispatch("saveFormData", {
                    login: this.login,
                    email: this.email,
                    password: this.password,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    selectedCountry: this.selectedCountry,
                    selectedCity: this.selectedCity,
                    dateOfBirth: this.dateOfBirth,
                    zipCode: this.zipCode      
                })
            }
        },
    },
    computed: {
        isFormValid() {
            return this.login && this.email && this.selectedCountry && this.selectedCity;
        },
        locations() {
            return this.$store.getters.getLocations;
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
        height: auto;
        padding: 0 64px 87px;

        &__button {
            -webkit-appearance: none;
            border-color: transparent;
            cursor: pointer;
            height: 64px;
            width: 324px;
            margin-top: 29px;
            background: #0056D8;
            border-radius: 0px 20px;
            font-family: Roboto;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            outline: none;
            display: inline-block;

            &:hover {
                background: #003585;
            }

            &:disabled {                
                background: #C1C1C1;
                cursor: default;
            }

            &:active {
                margin-top: 50px;
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

.message {
    width: 456px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    border: 1px solid;
    border-radius: 4px;
    padding: 10px 0 10px 24px;    
    display: inline-block;
    
    &__error {
        color: #E90000;
        background-color: rgb(255, 218, 218);
    }

    &__success {
        color: rgb(22, 136, 83);
        background-color: rgb(215, 255, 237);
    }
}
</style>
