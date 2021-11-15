<template>
  <div class="trips">
      <!-- start header -->
    <div class="header">
      <div class="layer">
        <div class="container">
          <div class="choose">
            <p class="active" data-reserve="hotels"><i class="fas fa-hotel"></i> HOTELS</p>
            <p data-reserve="flights"><i class="fas fa-plane"></i> FLIGHTS</p>
            <p data-reserve="cars"><i class="fas fa-car"></i> CARS</p>
            <p data-reserve="trains"><i class="fas fa-subway"></i> TRAINS</p>
            <p data-reserve="activities"><i class="fas fa-snowboarding"></i> ACTIVITIES</p>
          </div>
          <div class="pages">
            <div class="page opened" id="hotels">
                <h3>start your vaccation in a hotel...</h3>
                <div class="field1">
                <label for="">Where are you going?</label>
                <input type="text" placeholder="choose the city you want to travel to...">
                <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field2">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <label for="">Check-in</label>
                    <input type="text" placeholder="may 23, mon">
                    <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <label for="">Check-out</label>
                    <input type="text" placeholder="oct 11, sat">
                    <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <label for="">Rooms</label>
                    <input type="number" placeholder="No of rooms">
                    <i class="fas fa-bed"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <label for="">Guests</label>
                    <input type="number" placeholder="No of guests">
                    <i class="fas fa-user"></i>
                    </div>
                </div>
                <button>Find Hotel</button>
                </div>
            </div>
            <div class="page" id="flights">
                <h3>Search for suitable flights...</h3>
                <div class="field1">
                  <label for="">From</label>
                  <input type="text" placeholder="city, Airport...">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field1">
                  <label for="">To</label>
                  <input type="text" placeholder="city, Airport...">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field2">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                      <label for="">Departing</label>
                      <input type="text" placeholder="may 23, mon">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Returning</label>
                      <input type="text" placeholder="oct 11, sat">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Passengers</label>
                      <input type="number" placeholder="No of rooms">
                      <i class="fas fa-bed"></i>
                    </div>
                </div>
                <button>Find Flight</button>
                </div>
            </div>
            <div class="page" id="cars">
                <h3>Search for rental car...</h3>
                <div class="field1">
                  <label for="">Pick-up Location</label>
                  <input type="text" placeholder="city, your location...">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field1">
                  <label for="">Drop-off Location</label>
                  <input type="text" placeholder="city, your location...">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field2">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                      <label for="">Pick-up Date</label>
                      <input type="text" placeholder="may 23, mon">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Pick-up Time</label>
                      <input type="text" placeholder="01:00 AM">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Drop-off Date</label>
                      <input type="text" placeholder="sep 11, sun">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Drop-off Time</label>
                      <input type="text" placeholder="12:00 PM">
                      <i class="fas fa-clock"></i>
                    </div>
                </div>
                <button>Rent Car</button>
                </div>
            </div>
            <div class="page" id="trains">
                <h3>Search for suitable train time...</h3>
                <div class="field1">
                  <label for="">Pick-up Location</label>
                  <input type="text" placeholder="city, your location...">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field1">
                  <label for="">Drop-off Location</label>
                  <input type="text" placeholder="city, your location...">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field2">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                      <label for="">Pick-up Date</label>
                      <input type="text" placeholder="may 23, mon">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Pick-up Time</label>
                      <input type="text" placeholder="01:00 AM">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Drop-off Date</label>
                      <input type="text" placeholder="sep 11, sun">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="">Drop-off Time</label>
                      <input type="text" placeholder="12:00 PM">
                      <i class="fas fa-clock"></i>
                    </div>
                </div>
                <button>Search for train</button>
                </div>
            </div>
            <div class="page" id="activities">
                <h3>Search for activities...</h3>
                <div class="field1">
                <label for="">Where are you going?</label>
                <input type="text" placeholder="choose the city you want to travel to...">
                <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="field2">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <label for="">From</label>
                    <input type="text" placeholder="may 23, mon">
                    <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <label for="">To</label>
                    <input type="text" placeholder="oct 11, sat">
                    <i class="fas fa-calendar-alt"></i>
                    </div>
                </div>
                <button>Search</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->
    <!-- start section 1 -->
    <div class="section1">
      <div class="container">
        <h6>TOP RATED CITIES</h6>
        <h2>Awesome recomended cities</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit laboriosam tempora rem, laudantium quisquam deleniti ab provident accusantium debitis? Corrupti maxime aut ducimus sed cupiditate illum quaerat accusantium itaque!</p>
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="city">
              <i class="fas fa-map-marked-alt mark"></i>
              <div class="info">
                <h4>PARIS, FRANCE</h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p class="price">$250 <span> / Normal</span></p>
                <p>Lorem ipsum dolor sit amet consectetur accusantium itaque ducimus sed</p>
                <a href="">READ MORE</a>
                <button>Book now</button>
              </div>
              <img src="../assets/images/trips/section1/paris.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="city">
              <i class="fas fa-map-marked-alt mark"></i>
              <div class="info">
                <h4>GIZA, EGYPT</h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p class="price">$340 <span> / Special</span></p>
                <p>Lorem ipsum dolor sit amet consectetur accusantium itaque ducimus sed</p>
                <a href="">READ MORE</a>
                <button>Book now</button>
              </div>
              <img src="../assets/images/trips/section1/giza.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="city">
              <i class="fas fa-map-marked-alt mark"></i>
              <div class="info">
                <h4>ROME, ITALY</h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p class="price">$283 <span> / Normal</span></p>
                <p>Lorem ipsum dolor sit amet consectetur accusantium itaque ducimus sed</p>
                <a href="">READ MORE</a>
                <button>Book now</button>
              </div>
              <img src="../assets/images/trips/section1/rome.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="city">
              <i class="fas fa-map-marked-alt mark"></i>
              <div class="info">
                <h4>SOUTH AFRICA</h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p class="price">$232 <span> / special</span></p>
                <p>Lorem ipsum dolor sit amet consectetur accusantium itaque ducimus sed</p>
                <a href="">READ MORE</a>
                <button>Book now</button>
              </div>
              <img src="../assets/images/trips/section1/one.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="city">
              <i class="fas fa-map-marked-alt mark"></i>
              <div class="info">
                <h4>NEWYORK, USA</h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p class="price">$423 <span> / special</span></p>
                <p>Lorem ipsum dolor sit amet consectetur accusantium itaque ducimus sed</p>
                <a href="">READ MORE</a>
                <button>Book now</button>
              </div>
              <img src="../assets/images/trips/section1/newyork.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="city">
              <i class="fas fa-map-marked-alt mark"></i>
              <div class="info">
                <h4>ESTAMBUL, TURKEY</h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p class="price">$392 <span> / Normal</span></p>
                <p>Lorem ipsum dolor sit amet consectetur accusantium itaque ducimus sed</p>
                <a href="">READ MORE</a>
                <button>Book now</button>
              </div>
              <img src="../assets/images/trips/section1/turkey.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->
    <!-- start section 2 -->
    <div class="section2">
      <div class="container">
        <div class="into">
          <div class="infooo">
            <div class="deep">
              <h3>YOUR PERFECT</h3>
              <h3>TOUR EXPERIENCE</h3>
              <p>Booking and activities</p>
              <button>Read More</button>
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
  background: url('../assets/images/trips/head.jpg') no-repeat center /cover fixed;
  height: 100vh;
  margin-top: -16px;
  .layer {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    text-align: left;
    .choose {
      padding-top: 15%;
      p {
        width: 150px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 8px 15px;
        display: inline-block;
        margin-right: 5px;
        text-align: center;
        margin-bottom: 0;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &.active {
          background-color: $maincolor;
          color: #fff;
          padding: 13px 15px;
          i {
            background-color: rgba(0, 0, 0, 0.4);
          }
          &:hover {
            i {
              background-color: rgba(0, 0, 0, 0.4);
            }
          }
        }
        i {
          background-color: rgba(0, 0, 0, 0.8);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          line-height: 35px;
        }
        &:hover {
          i {
            background-color: $maincolor;
          }
        }
      }
    }
    .page {
      background-color: #fff;
      width: 70%;
      padding: 40px;
      display: none;
      &.opened {
        display: block;
        animation: changing 1s forwards;
        @keyframes changing {
          from{
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
      &#flights, &#cars, &#trains {
        .field1 {
          display: inline-block;
          width: 50%;
          input {
            padding-left: 30px;
          }
        }
      }
      h3 {
        font-size: 35px;
      }
      .field1 {
        margin-bottom: 40px;
        position: relative;
        label {
          color: $textcolor;
        }
        input {
          display: block;
          width: 90%;
          height: 40px;
          padding-left: 40px;
        }
        i {
          position: absolute;
          top: 60%;
          left: 2%;
          font-size: 20px;
          color: $textcolor;
        }
      }
      .field2 {
        label {
          color: $textcolor;
          font-size: 17px;
        }
        input {
          width: 95%;
          height: 40px;
          font-size: 14px;
        }
        button {
          margin-top: 30px;
          width: 200px;
          height: 45px;
          border-radius: 5px;
          background-color: $maincolor;
          color: #fff;
          border: none;
          outline: none;
          &:hover {
            background-color: #d82045;
          }
        }
        .col-lg-3 {
          position: relative;
          input {
            padding-left: 35px;
          }
          i {
            position: absolute;
            top: 60%;
            left: 13%;
            font-size: 20px;
            color: $textcolor;
          }
        }
      }
    }
  }
  @include mb {
    .layer {
        .choose {
        padding-top: 100px;
        p {
            width: 80px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 6px 2px;
            display: inline-block;
            margin-right: 5px;
            text-align: center;
            margin-bottom: 0;
            font-size: 9px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &.active {
            background-color: $maincolor;
            color: #fff;
            padding: 8px 2px;
            i {
                background-color: rgba(0, 0, 0, 0.4);
            }
            &:hover {
                i {
                background-color: rgba(0, 0, 0, 0.4);
                }
            }
            }
            i {
            background-color: rgba(0, 0, 0, 0.8);
            width: 25px;
            height: 25px;
            border-radius: 50%;
            line-height: 25px;
            }
            &:hover {
            i {
                background-color: $maincolor;
            }
            }
        }
        }
        .page {
        width: 95%;
        padding: 20px;
        &#flights, &#cars, &#trains {
            .field1 {
                display: inline-block;
                width: 50%;
                input {
                    padding-left: 20px;
                }
                i {
                    left: 5%;
                }
            }
        }
        h3 {
            font-size: 20px;
        }
        .field1 {
            margin-bottom: 20px;
            position: relative;
            label {
              font-size: 10px;
            }
            input {
            display: block;
            width: 95%;
            height: 30px;
            padding-left: 22px;
            font-size: 10px;
            }
            i {
            position: absolute;
            top: 60%;
            left: 3%;
            font-size: 15px;
            color: $textcolor;
            }
        }
        .field2 {
            label {
            color: $textcolor;
            font-size: 10px;
            }
            input {
            width: 95%;
            height: 30px;
            font-size: 10px;
            margin-bottom: 5px;
            }
            button {
            margin-top: 30px;
            width: 120px;
            height: 30px;
            font-size: 12px;
            margin-top: 10px;
            &:hover {
                background-color: #d82045;
            }
            }
            .col-lg-3 {
            position: relative;
            input {
                padding-left: 30px;
            }
            i {
                position: absolute;
                top: 55%;
                left: 10%;
                font-size: 15px;
                color: $textcolor;
            }
            }
        }
        }
    }
  }
  @include sm {
    .layer {
        .choose {
        padding-top: 25%;
        p {
            width: 100px;
            padding: 7px 2px;
            font-size: 11px;
            &.active {
            background-color: $maincolor;
            color: #fff;
            padding: 10px 2px;
            }
            i {
            background-color: rgba(0, 0, 0, 0.8);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            line-height: 30px;
            }
        }
        }
        .page {
          width: 80%;
          padding: 30px;
        &#flights, &#cars, &#trains {
            .field1 {
            display: inline-block;
            width: 50%;
            input {
                padding-left: 25px;
            }
            }
        }
        h3 {
            font-size: 25px;
        }
        .field1 {
            margin-bottom: 30px;
            position: relative;
            label {
              font-size: 12px;
            }
            input {
            display: block;
            width: 90%;
            height: 35px;
            padding-left: 30px;
            font-size: 12px;
            }
            i {
            font-size: 18px;
            }
        }
        .field2 {
            label {
            color: $textcolor;
            font-size: 12px;
            }
            input {
            width: 95%;
            height: 35px;
            font-size: 12px;
            }
            button {
            margin-top: 20px;
            width: 150px;
            height: 35px;
            font-size: 14px;
            }
            .col-lg-3 {
            position: relative;
            margin-bottom: 15px;
            input {
                padding-left: 35px;
            }
            i {
                position: absolute;
                top: 60%;
                left: 9%;
                font-size: 18px;
                color: $textcolor;
            }
            }
        }
        }
    }
  }
  @include md {
    .layer {
        .choose {
        padding-top: 20%;
        p {
            width: 130px;
            padding: 8px 11px;
            font-size: 13px;
            &.active {
            background-color: $maincolor;
            color: #fff;
            padding: 12px 11px;
            }
        }
        }
        .page {
        background-color: #fff;
        width: 75%;
        padding: 40px;
        display: none;
        }
    }
  }
}
/* end header */ 
/* start section 1 */ 
.section1 {
  margin-top: 150px;
  h6 {
    margin-bottom: 0;
    color: $maincolor;
    font-weight: bold;
  }
  h2 {
    color: $secondcolor;
  }
  p {
    color: $textcolor;
    width: 80%;
    margin: auto;
  }
  .city {
    margin-top: 100px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 5px;
    text-align: left;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    i.mark {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      position: absolute;
      top: 5%;
      right: 2%;
      z-index: 3;
    }
    .info {
      width: 50%;
      padding: 30px 0 0 20px;
      h4 {
        font-weight: bold;
        font-size: 18px;
      }
      p.price {
        font-weight: bold;
        color: #000;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 30px;
        span {
          color: $textcolor;
          font-weight: 500;
          font-size: 14px;
        }
      }
      i {
        color: rgb(255, 211, 16);
      }
      p {
        color: $textcolor;
        margin: 0;
        font-size: 14px;
      }
      button {
        margin-top: 20px;
        width: 140px;
        height: 35px;
        font-size: 15px;
        background-color: $maincolor;
        color: #fff;
        border: none;
        transform: translateX(100px);
        position: relative;
        z-index: 3;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
        outline: none;
        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
      a {
        color: $textcolor;
        font-size: 13px;
        font-weight: bold;
      }
    }
    img {
      width: 100%;
      position: absolute;
      top: 0;
      right: -40%;
      height: 100%;
      z-index: 2;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        right: 0%;
      }
    }
  }
  /* start media query of section 1 */ 
  @include mb {
    margin-top: 100px;
    h6 {
      font-size: 10px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      width: 90%;
      font-size: 12px;
    }
    .city {
        margin-top: 60px;
        .info {
        width: 60%;
        padding: 30px 0 0 20px;
        h4 {
            font-size: 13px;
            margin-bottom: 0;
        }
        i {
          font-size: 13px;
        }
        p.price {
            font-weight: bold;
            color: #000;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 25px;
            span {
            font-size: 12px;
            }
        }
        p {
            font-size: 12px;
        }
        button {
            margin-top: 10px;
            width: 200px;
            height: 30px;
            font-size: 12px;
            background-color: $maincolor;
            color: #fff;
            border: none;
            transform: translateX(10%);
        }
        a {
            font-size: 11px;
        }
        }
        img {
        width: 100%;
        position: absolute;
        top: 0;
        right: -60%;
        height: 100%;
        z-index: 2;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            right: 0%;
        }
        }
    }
  }
  @include sm {
    margin-top: 100px;
    h6 {
      font-size: 12px;
    }
    h2 {
      font-size: 25px;
    }
    p {
      width: 90%;
      font-size: 13px;
    }
    .city {
        margin-top: 60px;
        .info {
        width: 60%;
        padding: 30px 0 0 20px;
        h4 {
            font-size: 13px;
            margin-bottom: 0;
        }
        i {
          font-size: 13px;
        }
        p.price {
            font-weight: bold;
            color: #000;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 25px;
            span {
            font-size: 12px;
            }
        }
        p {
            font-size: 12px;
        }
        button {
            margin-top: 10px;
            width: 140px;
            height: 30px;
            font-size: 12px;
            background-color: $maincolor;
            color: #fff;
            border: none;
            transform: translateX(50%);
        }
        a {
            font-size: 11px;
        }
        }
        img {
        width: 100%;
        position: absolute;
        top: 0;
        right: -60%;
        height: 100%;
        z-index: 2;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            right: 0%;
        }
        }
    }
  }
  @include md {
    margin-top: 130px;
    h6 {
      font-size: 13px;
    }
    h2 {
      font-size: 28px;
    }
    p {
      width: 90%;
      font-size: 14px;
    }
    .city {
        margin-top: 60px;
        .info {
        width: 60%;
        padding: 30px 0 0 20px;
        h4 {
            font-size: 15px;
            margin-bottom: 0;
        }
        i {
          font-size: 14px;
        }
        p.price {
            font-weight: bold;
            color: #000;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 28px;
            span {
            font-size: 13px;
            }
        }
        p {
            font-size: 13px;
        }
        button {
            margin-top: 10px;
            width: 140px;
            height: 33px;
            font-size: 13px;
            background-color: $maincolor;
            color: #fff;
            border: none;
            transform: translateX(50%);
        }
        a {
            font-size: 11px;
        }
        }
        img {
        width: 100%;
        position: absolute;
        top: 0;
        right: -60%;
        height: 100%;
        z-index: 2;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            right: 0%;
        }
        }
    }
  }
  /* end media query of section 1 */
}
/* end section 1 */ 
/* start section 2 */ 
.section2 {
    margin-top: 200px;
  .into {
    background: url('../assets/images/trips/section2/last.jpg') no-repeat center /cover;
    height: 400px;
    border-radius: 5px;
    .infooo {
      background-color: rgba(0, 0, 0, 0.3);
      height: 100%;
      width: 100%;
      color: #fff;
      text-align: left;
      padding: 50px;
      padding-top: 10%;
      h3 {
        font-weight: bold;
      }
      p {
        letter-spacing: 2px;
      }
      button {
        width: 150px;
        height: 40px;
        background-color: $maincolor;
        color: #fff;
        border: none;
        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
  @include mb {
    margin-top: 100px;
    .into {
      height: 300px;
      .infooo {
        padding: 20px;
        padding-top: 80px;
        h3 {
          font-size: 20px;
        }
        p {
          font-size: 14px;
        }
        button {
          width: 100px;
          height: 35px;
          font-size: 13px;
        }
      }
    }
  }
}
/* end section 2 */ 
</style>

<script>
import footer from '../components/footer'
import $ from 'jquery'
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
    $('.trips .choose p').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + $(this).data('reserve')).addClass('opened').siblings().removeClass('opened')
    })
  },
  components: {
    'app-footer': footer
  }
}
</script>