<template>
  <div class="signup">
    <i class="fas fa-home goBack" @click="$router.push({path:'/'})"></i>
    <div class="row">
      <div class="col-lg-6">
        <div class="show">
          <h1>Welcome! signup with new account any enjoy social and exciting experience...</h1>
          <p class="loginIcon" @click="$router.push({path: '/login'})">Login</p>
          <p class="signupIcon" @click="$router.push({path: '/signup'})">Signup</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="container">
          <div class="form">
            <form @submit.prevent="signup">
              <h2>Signup with new account</h2>
              <div class="field">
                <label for="email"></label>
                <input type="text" placeholder="type your email address...">
                <i class="far fa-user"></i>
              </div>
              <div class="field">
                <input type="text" name="nickname" placeholder="type your nickname">
                <i class="fas fa-signature"></i>
              </div>
              <div class="field">
                <label for="email"></label>
                <input type="password" placeholder="type your password...">
                <i class="fas fa-lock"></i>
              </div>
              <div class="field">
                <label for="email"></label>
                <input type="password" placeholder="repeat your password...">
                <i class="fas fa-lock"></i>
              </div>
              <p style="color: red"></p>
              <button>Signup</button>
            </form>
          </div>   
        </div> 
      </div>
    </div> 
  </div>  
</template>

<style scoped lang="scss">
@import '../css/variables.scss';
@import '../css/mixins.scss';
.signup {
  background-color: #fff;
  position: relative;
  margin-top: -16px;
  z-index: 9999;
  i.goBack {
    position: absolute;
    top: 5%;
    right: 3%;
    width: 50px;
    height: 50px;
    border: 1px solid $secondcolor !important;
    line-height: 48px;
    border-radius: 50%;
    color: $secondcolor;
    background-color: #fff !important;
    z-index: 9999999999;
    font-size: 22px;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
    }
  }
  .show {
    background-color: $secondcolor;
    height: 100vh;
    position: relative;
    h1 {
      color: #fff;
      padding-top: 36%;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      padding-right: 30px;
      padding-left: 30px;
      text-shadow: 4px 4px #002c72, 8px 8px #00307c;
    }
    p.loginIcon {
      position: absolute;
      top: 15%;
      right: -8%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: $secondcolor;
      color: #fff;
      border: 8px solid #fff;
      line-height: 80px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #fff;
        color: $secondcolor;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
      }
    }
    p.signupIcon {
      position: absolute;
      top: 65%;
      right: -8%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: $secondcolor;
      color: #fff;
      border: 8px solid #fff;
      line-height: 80px;
      cursor: pointer;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #fff;
        color: $secondcolor;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .form {
    margin-top: 130px;
    h2 {
      margin-bottom: 30px;
    }
    form {
      .field {
        position: relative;
        width: 400px;
        height: 45px;
        margin: 0 auto 20px;
        input {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background-color: #fff;
          border: 1px solid #ccc;
          padding-left: 35px;
          outline: none;
        }
        i {
          position: absolute;
          top: 30%;
          left: 3%;
          color: rgb(129, 129, 129);
        }
      }
      .options {
        transform: translateY(-10px);
        input {
          background-color: #fff;
          border: 1px solid #ccc;
        }
        label {
          margin-right: 10%;
          color: $textcolor;
          margin-left: 3px;
        }
        span {
          margin-left: 10%;
          color: $textcolor;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            color: #000;
          }
        }
      }
      button {
        width: 400px;
        height: 40px;
        border-radius: 10px;
        color: #fff;
        background-color: rgb(212, 56, 56);
        border: none;
        outline: none;
        &:hover {
          background-color: rgb(190, 39, 39);
        }
      }
    }
  }
  @include mb {
    i.goBack {
      width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 38px;
      font-size: 19px;
    }
    .show {
      display: none;
    }
    .form {
      form {
        h2 {
          font-size: 25px;
          margin-bottom: 20px;
        }
        .field {
          width: 90%;
          height: 40px;
          input {
            font-size: 14px;
          }
          i {
            font-size: 14px;
            top: 35%;
            left: 5%;
          }
        }
        .options {
          input {
            margin-left: 2%;
          }
          label {
            font-size: 13px;
          }
          span {
            font-size: 13px;
          }
        }
        button {
          width: 90%;
        }
      }
    }
  }
  @include sm {
    .show {
      display: none;
    }
    .form {
      form {
        h2 {
          font-size: 35px;
          margin-bottom: 30px;
        }
        .field {
          width: 60%;
          height: 45px;
          input {
            font-size: 16px;
            padding-left: 40px;
          }
          i {
            font-size: 16px;
            top: 35%;
            left: 4%;
          }
        }
        .options {
          input {
            margin-left: 1%;
          }
          label {
            font-size: 15px;
          }
          span {
            font-size: 15px;
          }
        }
        button {
          width: 60%;
        }
      }
    }
  }
  @include md {
    .show {
      h1 {
        font-size: 35px;
        padding-top: 40%;
      }
      p.loginIcon {
        top: 13%;
        right: -10%;
        width: 90px;
        height: 90px;
        line-height: 73px;
      }
      p.signupIcon {
        top: 66%;
        right: -10%;
        width: 90px;
        height: 90px;
        line-height: 73px;
      }
    }
    .form {
      margin-top: 100px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
}
</script>