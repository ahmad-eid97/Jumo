<template>
  <!-- start footer -->
  <div class="footer">
    <!-- Footer -->
    <footer class="page-footer font-small mdb-color pt-4">
    <!-- Footer Links -->
        <div class="container text-center text-md-left">
            <!-- Footer links -->
            <div class="row text-center text-md-left mt-3 pb-3">
            <!-- Grid column -->
            <div class="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3 footer-brand field">
                <h6 class="text-uppercase mb-4 font-weight-bold">JUMO</h6>
                <p>we are jumo, a creative, easy dealing, quick and efficient travel agency. we have many branches all over the world</p>
            </div>
            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none">
            <!-- Grid column -->
            <div class="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3 field cities">
                <h6 class="text-uppercase mb-4 font-weight-bold">MT cities</h6>
                <p>
                <a href="#!">porto city</a>
                </p>
                <p>
                <a href="#!">paris city</a>
                </p>
                <p>
                <a href="#!">newyork city</a>
                </p>
                <p>
                <a href="#!">tokyo</a>
                </p>
            </div>
            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none">
            <!-- Grid column -->
            <div class="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3 field">
                <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p>
                <a href="#!">Your Account</a>
                </p>
                <p>
                <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                <a href="#!">Shipping Rates</a>
                </p>
                <p>
                <a href="#!">Help</a>
                </p>
            </div>
            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none">
            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 field">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                <i class="fas fa-home mr-3"></i> egypt, sohag, 22st</p>
                <p>
                <i class="fas fa-envelope mr-3"></i> ge.suis.eid@gmail.com</p>
                <p>
                <i class="fas fa-phone mr-3"></i> +20 010 258 643 13</p>
                <p>
                <i class="fas fa-print mr-3"></i> +20 011 172 869 12</p>
            </div>
            <!-- Grid column -->
            </div>
            <!-- Footer links -->
            <hr>
            <!-- Grid row -->
            <div class="row d-flex align-items-center">
            <!-- Grid column -->
            <div class="col-md-7 col-lg-8">
                <!--Copyright-->
                <p class="text-center text-md-left">© 2020 Copyright:
                <a href="https://www.facebook.com/gesuis.eid">
                    <strong> Ahmad Eid</strong>
                </a>
                </p>
            </div>
            <!-- Grid column -->
            <!-- Grid column -->
            <div class="col-md-5 col-lg-4 ml-lg-0">
                <!-- Social buttons -->
                <div class="text-center text-md-right">
                <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-google-plus-g"></i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <!-- Grid column -->
            </div>
            <!-- Grid row -->
        </div>
        <!-- Footer Links -->
    </footer>
    <!-- Footer -->
  </div>
  <!-- end footer -->
</template>

<style scoped lang="scss">
@import '../css/variables.scss';
@import '../css/mixins.scss';
/* start footer */
.footer {
  background: rgb(32, 32, 32);
  margin-top: 150px;
  color: #fff;
  .footer-brand {
    background-color: $maincolor;
    padding: 40px 30px;
    border-radius: 0 60px 0 60px;
    transform: translateY(-100px);
    h6 {
        font-size: 50px;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: $maincolor;
    }
  }
  a.btn-floating {
    i {
      color: #fff;
      width: 45px !important;
      height: 45px !important;
      background-color: $maincolor;
      text-align: center;
      font-size: 20px !important;
      line-height: 44px !important;
      border-radius: 50%;
      border: 1px solid $maincolor;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }
  /* start media query of footer */
  @include mb {
    .field {
      width: 95%;
      &.footer-brand {
        padding: 30px 20px;
      }
    }
    li {
        margin: 0;
    }
    a.btn-floating {
        i {
        width: 35px !important;
        height: 35px !important;
        font-size: 15px !important;
        line-height: 33px !important;
        }
    }
  }
  @include sm {
    .field {
      &:not(.footer-brand) {
        padding: 0;
      }
      &.cities {
        text-align: center;
      }
    }
    a.btn-floating {
        padding: 0;
      i {
        width: 40px !important;
        height: 40px !important;
        font-size: 18px !important;
        line-height: 38px !important;
      }
    }
  }
  @include md {
    .field:not(.footer-brand) {
      padding: 0;
    }
    a.btn-floating {
        padding: 0;
      i {
        width: 45px !important;
        height: 45px !important;
        font-size: 20px !important;
        line-height: 43px !important;
      }
    }
  }
  /* end media query of footer */
}
/* end footer */
</style>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>