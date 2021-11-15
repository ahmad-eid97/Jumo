<template>
  <div class="home">
    <!-- start header -->
    <div class="header">
      <div class="layer">
        <div class="container">
          <div class="headerinfo">
            <h5>we are here</h5>
            <h1>We are Jumo<span>*</span></h1>
            <h1>We are Travel agency</h1>
            <button>Explore More</button>
            <div class="links">
              <a href="https://www.facebook.com/gesuis.eid"><i class="fab fa-facebook-f"></i></a>
              <a><i class="fab fa-twitter"></i></a>
              <a><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <i class="fas fa-arrow-down down" @click="section1Scrolling"></i>
    </div>
    <!-- end header -->
    <!-- start section 1 -->
    <div class="section1" id="section1">
      <div class="container">
        <h2>our work process</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum hic aliquid magnam numquam iure, aperiam laudantium at, fugiat vel recusandae</p>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="process">
              <i class="fas fa-umbrella-beach"></i>
              <h6>Generate Idea</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p class="num">1</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="process">
              <i class="fas fa-trophy second"></i>
              <h6>High Quality</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p class="num">2</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="process">
              <i class="fas fa-map-marker-alt"></i>
              <h6>Easily Find</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p class="num">3</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="process">
              <i class="far fa-gem last"></i>
              <h6>Best Choice</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p class="num">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->
    <!-- start section 2 -->
    <div class="section2">
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="one">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo repudiandae corporis ex architecto perspiciatis deleniti. Iure nisi amet,</p>
            <span class="link"><span class="linkBorder"></span>request custom services</span>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="one">
            <div class="img">
              <div class="layer">
                <p>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </p>
              </div>
              <img src="../assets/images/home/section2/three.jpg" alt="">
            </div>
            <h4>thinking development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati accusantium temporibus, deleniti nihil perferendis quia</p>
            <span class="link"><span class="linkBorder"></span> read more</span>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="one">
            <div class="img">
              <div class="layer">
                <p>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </p>
              </div>
              <img src="../assets/images/home/section2/one2.jpg" alt="">
            </div>
            <h4>biseness consulting</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati accusantium temporibus, deleniti nihil perferendis quia</p>
            <span class="link"><span class="linkBorder"></span> read more</span>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="one">
            <div class="img">
              <div class="layer">
                <p>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </p>
              </div>
              <img src="../assets/images/home/section2/two.jpg" alt="">
            </div>
            <h4>biseness development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati accusantium temporibus, deleniti nihil perferendis quia</p>
            <span class="link"><span class="linkBorder"></span> read more</span>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 2 -->
    <!-- start section 3 -->
    <div class="section3">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="swiper-container">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                      <div class="travel">
                        <div class="big">
                          <h4>EXPERIENCE</h4>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quae rem</p>
                          <div class="person">
                            <img src="../assets/images/home/section3/sec3.jpg" alt="">
                            <div class="personInfo">
                              <h6>joan michael</h6>
                              <p>civil engineer</p>
                            </div>
                          </div>
                        </div>
                        <div class="small">
                          <i class="far fa-dot-circle"></i>
                          <p>OUR TARGET</p>
                          <button>READ MORE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- If we need pagination -->
                  <div class="swiper-pagination"></div>
                </div>
          </div>
          <div class="col-lg-5">
            <div class="info">
              <h6>real world stories</h6>
              <h2>sucessful travels</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime cumque totam nihil</p>
              <p class="second">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quas labore accusamus atque ex culpa! Deserunt corrupti, eos vel.</p>
              <div class="coun1">
                <span class="counter1">
                  {{counter1}}
                  <p>satisfied clients</p>  
                </span>
              </div>
              <div class="coun2">
                <span class="counter2">
                  {{counter2}}
                  <p>successfull travels</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 3 -->
    <!-- start section 4 -->
    <div class="section4">
      <div class="layer">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="info">
                <h2>collection from our customers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a dicta error enim commodi culpa rem beatae autem illo minima neque sequi reprehenderit doloremque, minus excepturi. Animi porro hic vitae? rem beatae autem illo minima neque sequi reprehenderit doloremque, minus excepturi. Animi porro hic vitae?</p>
                <a>read more <span></span></a>
              </div>
            </div>
            <div class="col-lg-5">
              <h5 style="margin-bottom: 20px">Testmonials Scroller</h5>
              <div class="slider">
                <!-- Slider main container -->
                <div class="swiper-container">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex, id ad magnam ipsam suscipit, dolor aliquam temporibus deleniti culpa dolorem ea natus beatae odit nulla nobis sed sit consequatur.</p>
                      <h5>George Watson</h5>
                      <p class="job">civil engineer</p>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="swiper-slide">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex, id ad magnam ipsam suscipit, dolor aliquam temporibus deleniti culpa dolorem ea natus beatae odit nulla nobis sed sit consequatur.</p>
                      <h5>Holly Richard</h5>
                      <p class="job">human doctor</p>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star" style="color: gray"></i>
                    </div>
                    <div class="swiper-slide">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex, id ad magnam ipsam suscipit, dolor aliquam temporibus deleniti culpa dolorem ea natus beatae odit nulla nobis sed sit consequatur.</p>
                      <h5>John Edward</h5>
                      <p class="job">pharmacist</p>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star" style="color: gray"></i>
                      <i class="fas fa-star" style="color: gray"></i>
                    </div>
                  </div>
                  <!-- If we need pagination -->
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 4 -->
    <!-- start section 5 -->
    <div class="section5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="strategy">
              <h2>Our Strategy</h2>
              <div class="slides">
                <div class="stratInfo active" id="slide1">
                  <div class="info1">
                    <p>STEP</p>
                    <p class="num">01</p>
                  </div>
                  <div class="info2">
                    <h5>Easy dealing</h5>
                    <h5>special ways to deal with us</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga assumenda eligendi hic? Hic, incidunt labore ipsa ipsum tempore perspiciatis ea culpa, itaque adipisci sapiente natus debitis est voluptas harum.</p>
                  </div>
                </div>
                <div class="stratInfo" id="slide2">
                  <div class="info1">
                    <p>STEP</p>
                    <p class="num">02</p>
                  </div>
                  <div class="info2">
                    <h5>Professional employees</h5>
                    <h5>perfect crew to deal with easily</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga assumenda eligendi hic? Hic, incidunt labore ipsa ipsum tempore perspiciatis ea culpa, itaque adipisci sapiente natus debitis est</p>
                  </div>
                </div>
                <div class="stratInfo" id="slide3">
                  <div class="info1">
                    <p>STEP</p>
                    <p class="num">03</p>
                  </div>
                  <div class="info2">
                    <h5>Many branches</h5>
                    <h5>alot of branches all over the world</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga assumenda eligendi hic? Hic, incidunt labore ipsa ipsum tempore perspiciatis ea culpa, itaque adipisci sapiente natus debitis est</p>
                  </div>
                </div>
              </div>
              <div class="bullets">
                <p class="active" data-slide="slide1">1</p>
                <p data-slide="slide2">2</p>
                <p data-slide="slide3">3</p>
              </div>
            </div>
          </div>          
          <div class="col-lg-6">
            <h2 class="sec">frequently asked questions</h2>
            <div class="question">
              <p class="ques" data-ans="ques1">do you have any branches in middle east !?</p>
              <p class="ans" id="ques1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae accusantium dignissimos, nesciunt, ad officiis harum aut nemo earum illo nisi adipisci debitis quam eum minima minus ullam quos omnis?</p>
              <i class="fas fa-sort-down"></i>
            </div>
            <div class="question">
              <p class="ques" data-ans="ques2">are there many ways to contact with you !?</p>
              <p class="ans" id="ques2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae accusantium dignissimos, nesciunt, ad officiis harum aut nemo earum illo nisi adipisci debitis quam eum minima minus ullam quos omnis?</p>
              <i class="fas fa-sort-down"></i>
            </div>
            <div class="question">
              <p class="ques" data-ans="ques3">do you have any social accounts to get in touch !?</p>
              <p class="ans" id="ques3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae accusantium dignissimos, nesciunt, ad officiis harum aut nemo earum illo nisi adipisci debitis quam eum minima minus ullam quos omnis?</p>
              <i class="fas fa-sort-down"></i>
            </div>
            <div class="question">
              <p class="ques" data-ans="ques4">your travel ways is completely secure !?</p>
              <p class="ans" id="ques4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae accusantium dignissimos, nesciunt, ad officiis harum aut nemo earum illo nisi adipisci debitis quam eum minima minus ullam quos omnis?</p>
              <i class="fas fa-sort-down"></i>
            </div>
          </div>          
        </div>
      </div>
    </div>
    <!-- end section 5 -->
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
  height: 100vh;
  margin-top: -16px;
  background: url('../assets/images/home/background.jpg') no-repeat center /cover;
  position: relative;
  position: relative;
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    .headerinfo {
      padding-top: 180px;
      h5 {
        color: #fff;
      }
      h1 {
        font-size: 70px;
        color: #fff;
        span {
          color: $maincolor;
        }
      }
      button {
        color: #fff;
        border: 1px solid #fff;
        background-color: transparent;
        border-radius: 5px;
        width: 150px;
        height: 45px;
        margin-top: 50px;
        &:hover {
          background-color: #fff;
          color: #000;
          font-weight: bold;
        }
      }
      .links {
        position: absolute;
        bottom: 10px;
        left: 10px;
        i {
          color: #fff;
          font-size: 20px;
          border: 1px solid #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 10px;
          line-height: 40px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: $maincolor;
            color: #fff;
            border: 1px solid $maincolor;
          }
        }
      }
    }
  }
  i.down {
    position: absolute;
    bottom: 3%;
    left: 49%;
    color: #fff;
    font-size: 18px;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 38px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff;
      background-color: $maincolor;
      border: 1px solid $maincolor;
    }
  }
  /* start media query of header */
  @include mb {
    .layer {
      .headerinfo {
        padding-top: 180px;
        h5 {
          font-size: 15px;
        }
        h1 {
          font-size: 35px;
        }
        button {
          width: 140px;
          font-size: 14px;
        }
        .links {
          i {
            font-size: 13px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            line-height: 30px;
            cursor: pointer;
            margin: 5px;
          }
        }
      }
    }
    i.down {
      display: none;
    }
  }
  @include sm {
    .layer {
      .headerinfo {
        padding-top: 180px;
        h5 {
          font-size: 20px;
        }
        h1 {
          font-size: 50px;
        }
        button {
          width: 150px;
          font-size: 16px;
        }
        .links {
          i {
            font-size: 18px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            line-height: 38px;
            cursor: pointer;
            margin: 8px;
          }
        }
      }
    }
  }
  /* end media query of header */
}
/* end header */
/* start section 1 */
.section1 {
  padding-top: 150px;
  h2 {
    color: $secondcolor;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 80px;
    color: $textcolor;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  .process {
    i {
      background-color: $secondcolor;
      width: 90px;
      height: 90px;
      color: #fff;
      font-size: 40px;
      margin-bottom: 20px;
      line-height: 85px;
      position: relative;
      border-radius: 5px;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        width: 192px;
        border: 2px dashed rgb(221, 220, 220);
        color: #ccc;
      }
      &.last::after {
        border: 0px !important;
      }
    }
    h6 {
      color: $secondcolor;
      font-weight: bold;
      font-size: 20px;
    }
    p {
      font-size: 15px;
      color: $textcolor;
    }
    p.num {
      background-color: $maincolor;
      color: #fff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      line-height: 40px;
      position: absolute;
      top: -8%;
      left: 58%;
    }
  }
  /* start media query of section 1 */
  @include mb {
    padding-top: 100px;
    h2 {
      font-size: 25px;
    }
    p{
      font-size: 14px;
      width: 100%;
    }
    .process {
      i {
        width: 70px;
        height: 70px;
        font-size: 30px;
        line-height: 70px;
        &::after {
          border: none;
        }
      }
      h6 {
        font-size: 18px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  @include sm {
    p {
      width: 90%;
    }
    .process {
      i {
        &::after {
          content: "";
          width: 269px;
        }
        &.last::after {
          border: none;
        }
        &.second::after {
          border: none;
        }
      }
    }
  }
  /* end media query of section 1 */ 
}
/* end section 1 */
/* start section 2 */
.section2 {
  text-align: left;
  padding: 150px 50px;
  margin-top: 50px;
  background-color: rgb(250, 250, 250);
  .one {
    h2 {
      font-size: 55px;
      font-weight: bold;
    }
    .img {
      position: relative;
      height: 200px;
      margin-bottom: 20px;
      &:hover {
        .layer {
          height: 100%;
          width: 100%;
          bottom: 0;
          left: 0;
          opacity: 1;
          p {
            i {
              opacity: 1;
              margin-left: 10px;
              font-size: 20px;
              width: 40px;
              height: 40px;
            }
          }
        }
      }
      .layer {
        position: absolute;
        bottom: 45%;
        left: 45%;
        background-color: rgba(0, 0, 0, 0.6);
        width: 1%;
        height: 1%;
        opacity: 0;
        transition: all 0.3s ease-in-out;
        border-radius: 10px;
        p {
          position: absolute;
          top: 41%;
          left: 23%;
          i {
            color: #fff;
            margin-left: 0px;
            font-size: 0px;
            width: 0px;
            height: 0px;
            border-radius: 50%;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            &:hover {
              background-color: $maincolor;
            }
          }
        }
      }
      img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
      }
    }
    h4 {
      font-weight: bold;
    }
    span.link {
      position: relative;
      cursor: pointer;
      &:hover {
        color: $maincolor;
        .linkBorder {
          width: 100%;
        }
      }
      span.linkBorder {
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 30%;
        height: 3px;
        background-color: $maincolor;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  /* start media of section 2 */
  @include mb {
    padding: 80px 20px;
    .one {
      margin-bottom: 50px;
      h2 {
        font-size: 30px;
      }
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 13px !important;
      }
      .img {
        width: 250px;
        .layer {
          p {
            left: 18%;
          }
        }
      }
    }
  }
  @include sm {
    .one {
      margin-bottom: 50px;
      .img {
        .layer {
          p {
            left: 26%;
          }
        }
      }
    }
  }
  @include md {
    .one {
      h2 {
        font-size: 40px;
      }
      p {
        font-size: 14px;
      }
      span {
        font-size: 14px;
      }
      .img {
        .layer {
          p {
            left: 10%;
          }
        }
      }
    }
  }
  /* end media of section 2 */
}
/* end section 2 */ 
/* start section 3 */
.section3 {
  background-color: rgb(250, 250, 250);
  padding-top: 50px;
  padding-bottom: 150px;
  .swiper-container {
    .travel {
      margin-bottom: 30px;
      .big {
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0,0,0,.1);
        text-align: left;
        padding: 60px 100px 60px 40px;
        width: 60%;
        display: inline-block;
        h4 {
          color: $secondcolor;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .person {
          display: flex;
          margin-top: 50px;
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            padding: 2px;
            border: 1px solid #ccc;
            background-color: #fff;
            margin-right: 10px;
          }
          .personInfo {
            margin-top: 8px;
            h6 {
              font-weight: bold;
              font-size: 19px;
              color: $secondcolor;
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
      .small {
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0,0,0,.1);
        padding: 20px 40px 0 40px;
        transform: translateX(-80px);
        position: relative;
        top: -40px;
        display: inline-block;
        i {
          font-size: 60px;
        }
        p {
          font: {
            weight: bold;
            size: 20px;
          }
          color: $secondcolor;
          margin-top: 10px;
          margin-bottom: 0;
        }
        button {
          background-color: $maincolor;
          color: #fff;
          border: none;
          width: 75%;
          height: 40px;
          transform: translateY(20px);
          border-radius: 5px;
          outline: none;
          &:hover {
            background-color: #e6133d;
          }
        }
      }
    }
  }
  .info {
    text-align: left;
    h6 {
      color: $maincolor;
      font-weight: bold;
    }
    h2 {
      color: $secondcolor;
      font-weight: bold;
    }
    p {
      color: #454545;
    }
    p.second {
      color: rgb(126, 125, 125);
    }
  }
  .coun1, .coun2 {
    display: inline-block;
    text-align: center;
    margin-right: 80px;
  }
  .counter1, .counter2 {
    color: $maincolor;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    p {
      font-size: 15px;
      margin: 0;
    }
  }
  /* start media query of section 3 */
  @include mb {
    padding-top: 0;
    .swiper-container {
      .travel {
        .big {
          width: 100%;
          padding: 40px 20px 60px 40px;
          h4 {
            font-size: 20px;
          }
          p {
            font-size: 13px;
          }
          .person {
            margin-top: 30px;
            img {
              width: 50px;
              height: 50px;
            }
            .personInfo {
              margin-top: 8px;
              h6 {
                font-size: 15px;
                margin: 0;
              }
              p {
                font-size: 13px;
              }
            }
          }
        }
        .small {
          padding: 20px 40px 0 40px;
          transform: translateX(0px);
          position: relative;
          top: -40px;
          i {
            font-size: 50px;
          }
          p {
            font: {
              size: 16px;
            }
          }
          button {
            width: 90%;
            font-size: 11px;
            &:hover {
              background-color: #e6133d;
            }
          }
        }
      }
    }
    .info {
      margin-top: 40px;
      h6 {
        font-size: 13px;
      }
      h2 {
        font-size: 23px;
      }
      p {
        font-size: 14px;
      }
    }
    .coun1, .coun2 {
      margin-right: 30px;
    }
    .counter1, .counter2 {
      font-size: 30px;
      p {
        font-size: 11px;
      }
    }
  }
  @include sm {
    padding-top: 0;
    .swiper-container {
      margin-bottom: 70px;
    }
  }
  @include md {
    padding-top: 0;
    .swiper-container {
      .travel {
        .big {
          width: 60%;
          padding: 40px 80px 60px 40px;
          h4 {
            font-size: 20px;
          }
          p {
            font-size: 13px;
          }
          .person {
            margin-top: 30px;
            img {
              width: 50px;
              height: 50px;
            }
            .personInfo {
              margin-top: 8px;
              h6 {
                font-size: 15px;
                margin: 0;
              }
              p {
                font-size: 13px;
              }
            }
          }
        }
        .small {
          padding: 20px 40px 0 40px;
          transform: translateX(-50px);
          position: relative;
          top: -40px;
          i {
            font-size: 50px;
          }
          p {
            font: {
              size: 16px;
            }
          }
          button {
            width: 90%;
            font-size: 11px;
            &:hover {
              background-color: #e6133d;
            }
          }
        }
      }
    }
    .info {
      margin-top: 40px;
      h6 {
        font-size: 13px;
      }
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 14px;
      }
    }
    .coun1, .coun2 {
      margin-right: 60px;
    }
    .counter1, .counter2 {
      font-size: 35px;
      p {
        font-size: 13px;
      }
    }
  }
  /* end media query of section 3 */
}
/* start section 3 */
/* start section 4 */ 
.section4 {
  background: url('../assets/images/home/section4/section44.jpg') no-repeat center /cover fixed;
  .layer {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: left;
    padding-top: 140px;
    padding-bottom: 140px;
    .info {
      margin-right: 100px;
      h2 {
        margin-bottom: 30px;
        font: {
          weight: bold;
          size: 50px
        }
      }
      p {
        margin-bottom: 30px;
      }
      a {
        color: #fff;
        text-decoration: none;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        span {
          position: absolute;
          bottom: -8px;
          left: 0;
          background-color: $maincolor;
          width: 30%;
          height: 3px;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          color: $maincolor;
          span {
            width: 100%;
          }
        }
      }
    }
    .slider {
      background-color: #fff;
      color: #000;
      padding: 30px;
      border-radius: 5px;
      p {
        font-size: 16px;
        color: rgb(107, 107, 107);
      }
      h5 {
        font-weight: bold;
        font-size: 17px;
      }
      p.job {
        font-size: 13px;
      }
      i {
        color: rgb(255, 187, 0);
      }
      .swiper-pagination {
        position: relative;
        width: 20%;
        bottom: 0;
        left: 75%;
        .swiper-pagination-bullets {
        }
      }
    }
  }
  /* start media query of section 4 */
  @include mb {
    .layer {
      padding-top: 100px;
      padding-bottom: 100px;
      .info {
        margin-right: 0;
        margin-bottom: 50px;
        h2 {
          font-size: 30px;
        }
        p {
          font-size: 13px;
        }
      }
      .slider {
        p {
          font-size: 13px;
        }
      }
      .swiper-pagination  {
        width: 50% !important;
        left: 50% !important;
      }
    }
  }
  @include sm {
    .info {
      margin-bottom: 50px;
    }
  }
  /* end media query of section 4 */
}
/* end section 4 */ 
/* start section 5 */
.section5 {
  margin-top: 150px;
  margin-bottom: 200px;
  h2 {
    margin-bottom: 60px;
    font-weight: bold;
    color: $secondcolor;
    &.sec {
      margin-bottom: 45px;
    }
  }
  .strategy {
    text-align: left;
    .stratInfo {
      display: none;
      transition: all 0.3s ease-in-out;
      &.active {
        display: flex;
      }
      .info1 {
        margin-right: 30px;
        height: 78px;
        padding-right: 20px;
        border-right: 1px solid #ccc;
        transition: all 0.3s ease-in-out;
        p {
          color: rgb(151, 151, 151);
          font-weight: bold;
          margin: 0;
          transition: all 0.3s ease-in-out;
          &.num {
            color: $maincolor;
            font-size: 45px;
            font-weight: bold;
            margin-left: -2px;
            transition: all 0.3s ease-in-out;
          }
        }
      }
      .info2 {
        h5 {
          font-weight: bold;
          font-size: 24px;
        }
        p {
          color: $textcolor;
        }
      }
    }
    .bullets {
      margin-left: 70px;
      margin-top: 30px;
      p {
        display: inline-block;
        margin-left: 15px;
        background-color: #ccc;
        color: #000;
        font-weight: bold;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        &.active {
          background-color: $maincolor;
          color: #fff;
        }
      }
    }
  }
  .question {
    text-align: left;
    margin-left: 50px;
    position: relative;
    margin-bottom: 2px;
    p {
      padding: 8px 8px 8px 20px;
      border: 1px solid rgb(163, 163, 163);
      margin: 0;
      &.ques {
        font-weight: bold;
        cursor: pointer;
      }
      &.ans {
        color: $textcolor;
        border-radius: 0 0 5px 5px;
        display: none;
      }
    }
    i {
      position: absolute;
      top: 5px;
      right: 12px;
      font-size: 24px;
      color: $textcolor;
      cursor: pointer;
    }
  }
  /* start media query of section 5 */ 
  @include mb {
    margin-top: 100px;
    h2 {
      font-size: 30px;
      margin-bottom: 40px;
      &.sec {
        margin-bottom: 30px;
        font-size: 30px;
        margin-top: 50px;
        text-align: left;
      }
    }
    .strategy {
      .stratInfo {
        .info1 {
          height: 63px;
          p {
            font-size: 11px;
            &.num {
              font-size: 35px;
            }
          }
        }
        .info2 {
          h5 {
            font-size: 18px;
          }
          p {
            font-size: 13px;
          }
        }
      }
      .bullets {
        margin-top: 10px;
        p {
          margin-left: 10px;
          width: 30px;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
        }
      }
    }
    .question {
      margin-left: 0;
      p {
        padding: 8px 20px 8px 10px;
        &.ques {
          font-size: 13px;
        }
        &.ans {
          color: $textcolor;
          border-radius: 0 0 5px 5px;
          display: none;
          font-size: 12px;
        }
      }
    }
  }
  @include sm {
    h2 {
      &.sec {
        margin-top: 50px;
        text-align: left;
        margin-left: 50px;
      }
    }
  }
  @include md {
    h2 {
      &.sec {
        text-align: left;
        margin-left: 50px;
      }
    }
  }
  /* end media query of section 5 */ 
}
/* end section 5 */
</style>

<script>
import footer from '../components/footer'
import Swiper from 'swiper'
import $ from 'jquery'
export default {
  data() {
    return {
      counter1: 0,
      counter2: 2450
    }
  },
  methods: {
    section1Scrolling() {
      document.getElementById('section1').scrollIntoView({behavior: 'smooth', block: 'start'});
    },
    initSwiper() {
      const mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay: {
          delay: 3000,
        },
        direction: "horizontal",
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 50
      })
      mySwiper.init();
    },
    question() {
      
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.state.Loading = true;
    setTimeout( () => {
      this.$store.state.Loading = false;
    }, 1000);
    var VueInstace = this;
    $(window).on('scroll', function() {
      if($(window).scrollTop() >= $('.section3').offset().top - 300) {
        if(VueInstace.counter1 == 0) {
          var count1 = setInterval(() => {
            VueInstace.counter1++;
            if(VueInstace.counter1 == 243) {
              clearInterval(count1)
              VueInstace.counter1 = '243+' 
            }
          }, 10)
        }
        if(VueInstace.counter2 == 2450) {
          var count2 = setInterval(() => {
            VueInstace.counter2++;
            if(VueInstace.counter2 == 3152) {
              clearInterval(count2)
              VueInstace.counter2 = '3152+' 
            }
          }, 5)
        }
      }
    });
    $('.ques').on('click', function() {
      $('#' + $(this).data('ans')).slideToggle();
    });
    $('.bullets p').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
      $('#' + $(this).data('slide')).css({
        display: 'flex'
      }).siblings().css({display: 'none'})
    })
  },
  components: {
    'app-footer': footer
  }
}
</script>