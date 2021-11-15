<template>
  <div class="contact">
    <!-- start header -->
    <div class="header">
      <div class="layer">
        <div class="container">
          <div class="info">
            <h1>Ways to find us <span>*</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nemo commodi voluptatem debitis aliquam laudantium reiciendis ullam a ipsa perferendis esse quod aliquid, est, quas</p>
            <span>LAST UPDATED</span>
            <span>|</span>
            <span>October 11, 2019</span>
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->
    <!-- start section 1 -->
    <div class="section1">
      <div class="container">
        <div class="features">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="each">
                <i class="fas fa-fire-alt"></i>
                <h4>Our brand</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque nisi, distinctio iure, autem odio magnam beatae nobis</p>
                <a href="">Read more +</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="each">
                <i class="fab fa-codepen"></i>
                <h4>Financial care</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque nisi, distinctio iure, autem odio magnam beatae nobis</p>
                <a href="">Read more +</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="each">
                <i class="fas fa-helicopter"></i>
                <h4>Saftey issues</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque nisi, distinctio iure, autem odio magnam beatae nobis</p>
                <a href="">Read more +</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->
    <!-- start section 2 -->
    <div class="section2">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="message">
              <h2>Send us a message</h2>
              <p>feel free to reach us if you need any assistance</p>
              <input type="text" placeholder="Your Name">
              <input type="text" placeholder="Your Email">
              <input type="number" placeholder="Phone Number">
              <textarea name="" id="" placeholder="Your Message"></textarea>
              <button>Submit message</button>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="map">
              <h2>Contact Us</h2>
              <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=egypt&t=&z=3&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net/blog/divi-discount/">blaack friday</a></div></div>
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="first">
                    <h4>Adress</h4>
                    <p>Egypt</p>
                    <p>sohag government</p>
                    <p>22 hay rashed street</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="second">
                    <h4>Information</h4>
                    <p>iam ahmad eid</p>
                    <p>ge.suis.eid@gmail.com</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="third">
                    <h4>Adress</h4>
                    <p>Facebook</p>
                    <p>Instaugram</p>
                    <p>Twitter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 2 -->
    <!-- start footer -->
    <app-footer></app-footer>
    <!-- end footer -->
  </div>
</template>

<style scoped lang='scss'>
@import '../css/variables.scss';
@import '../css/mixins.scss';
/* start header */ 
.header {
  background: url('../assets/images/contact/three.jpg') no-repeat center /cover fixed;
  height: 100vh;
  margin-top: -16px;
  .layer {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    .info {
      color: #fff;
      width: 60%;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 30px;
      position: relative;
      top: 200px;
      h1 {
        span {
          color: $maincolor;
          font-family: 'Montserrat', sans-serif;
          font-weight: bold;
        }
      }
      span {
        margin-right: 5%;
        color: #dbdbdb;
      }
    }
  }
  /* start media query of header */ 
  @include mb {
    .layer {
      .info {
        width: 90%;
        padding: 30px 20px 30px 20px;
        h1 {
          font-size: 25px;
          margin-bottom: 15px;
          span {
            display: none;
          }
        }
        p {
          font-size: 13px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
  @include sm {
    .layer {
      .info {
        width: 70%;
      }
    }
  }
  /* end media query of header */ 
}
/* end header */ 
/* start section 1 */ 
.section1 {
  .features {
    background-color: #fff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-50px);
    .each {
      padding: 50px 30px 30px 30px;
      i {
        font-size: 70px;
        color: $maincolor;
        margin-bottom: 20px;
      }
      h4 {
        color: $secondcolor;
        font-weight: bold;
      }
      p {
        color: $textcolor;
        font-size: 16px;
      }
      a {
        color: $maincolor;
        font-weight: bold;
        text-decoration: none;
        &:hover {
          color: rgb(223, 0, 0);
        }
      }
    }
  }
  /* start media query of section 1 */ 
  @include mb {
    .features {
      .each {
        padding: 30px 20px 20px 20px;
        margin-bottom: 20px;
        i {
          font-size: 40px;
        }
        h4 {
          font-size: 20px;
        }
        p {
          font-size: 12px;
        }
        a {
          font-size: 14px;
        }
      }
    }
  }
  @include sm {
    .features {
      .each {
        padding: 30px 20px 20px 20px;
        margin-bottom: 20px;
        i {
          font-size: 40px;
        }
        h4 {
          font-size: 20px;
        }
        p {
          font-size: 12px;
        }
        a {
          font-size: 14px;
        }
      }
    }
  }
  @include md {
    .features {
      .each {
        padding: 30px 20px 20px 20px;
        margin-bottom: 20px;
        i {
          font-size: 50px;
        }
        h4 {
          font-size: 22px;
        }
        p {
          font-size: 14px;
        }
        a {
          font-size: 16px;
        }
      }
    }
  }
  /* end media query of section 1 */
}
/* end section 1 */
/* start section 2 */ 
.section2 {
  margin-top: 150px;
  margin-bottom: 100px;
  .message {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 50px 5px;
    margin-top: 30px;
    h2 {
      font-size: 35px;
    }
    p {
      color: $textcolor;
      margin-bottom: 30px;
      font-size: 15px;
    }
    input {
      display: block;
      margin: 15px auto;
      width: 80%;
      border: none;
      background-color: rgb(238, 240, 240);
      padding: 10px 15px;
    }
    textarea {
      width: 80%;
      height: 150px;
      padding: 3px 10px;
      border: none;
      background-color: rgb(238, 240, 240);
    }
    button {
      width: 80%;
      height: 40px;
      margin-top: 20px;
      background-color: $maincolor;
      border: none;
      border-radius: 5px;
      color: #fff;
      &:hover {
        background-color: #e01740;
      }
    }
  }
  .map {
    margin-left: 20px;
    h2 {
      margin-bottom: 40px;
    }
    .first, .second, .third {
      margin: 40px auto;
      text-align: left;
      h4 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      p {
        color: $textcolor;
        font-size: 15px;
        margin: 5px 0;
      }
    }
  }
  @include mb {
    margin-bottom: 50px;
    margin-top: 50px;
    .message {
      margin-bottom: 50px;
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 12px;
        margin-bottom: 20px;
      }
      input {
        width: 90%;
        font-size: 13px;
        padding: 5px 10px;
      }
      textarea {
        width: 90%;
        font-size: 13px;
        padding: 5px 10px;
      }
      button {
        width: 90%;
        font-size: 14px;
        height: 35px;
      }
    }
    .map {
      margin-left: 0;
      h2 {
        font-size: 27px;
      }
      .first, .second, .third {
        margin-top: 0;
        margin-bottom: 30px;
        h4 {
          font-size: 17px;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
        }
      }
      .first {
        margin-top: 30px;
        h4 {
          font-size: 17px;
          margin-bottom: 10px;
        }
      }
    }
  }
  @include sm {
    margin-bottom: 100px;
    margin-top: 100px;
    .message {
      margin-bottom: 50px;
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 14px;
        margin-bottom: 30px;
      }
      input {
        padding-top: 7px;
      }
    }
    .map {
      .first, .second, .third {
        margin-top: 0;
        margin-bottom: 30px;
        margin-top: 30px;
      }
    }
  }
  @include md {
    margin-bottom: 50px;
    margin-top: 100px;
    .message {
      margin-bottom: 50px;
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 14px;
        margin-bottom: 20px;
      }
      input {
        width: 90%;
        font-size: 14px;
        padding: 10px 15px;
      }
      textarea {
        width: 90%;
        font-size: 14px;
        padding: 5px 10px;
      }
      button {
        width: 90%;
        font-size: 15px;
        height: 40px;
      }
    }
    .map {
      margin-left: 0;
      h2 {
        font-size: 27px;
      }
      .first, .second, .third {
        margin-top: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        h4 {
          font-size: 17px;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
/* end section 2 */
</style>

<script>
import footer from '../components/footer'
export default {
  data() {
    return {

    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.state.Loading = true;
    setTimeout( () => {
      this.$store.state.Loading = false;
    }, 1000);
  },
  components: {
    'app-footer': footer
  }
}
</script>