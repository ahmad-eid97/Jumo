<template>
  <!-- start navbar -->
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <a class="navbar-brand" href="#">Jumo<span>*</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" to="/" active-class="active" exact>home</router-link>
          <router-link tag="li" to="/Blog" active-class="active" exact>blog</router-link>
          <router-link tag="li" to="/trips" active-class="active" exact>trips</router-link>
          <router-link tag="li" to="/About" active-class="active" exact>about</router-link>
          <router-link tag="li" to="/Contact" active-class="active" exact>contact</router-link>
        </ul>
        <div class="navicons">
          <i class="fas fa-search" @click="openSearch"></i>
          <i class="fas fa-user-alt" @click="$router.push({path: '/signup'})"></i>
          <div class="dropdown">
            <img src="../assets/nav.jpg" class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <div class="dropdown-item" href="#">
                <i class="fas fa-user-cog"></i>
                <div class="itemInfoo">
                  <p>Account settings</p>
                  <span>update your own info</span>
                </div>
              </div>
              <div class="dropdown-item" href="#">
                <i class="fas fa-sign-out-alt"></i>
                <div class="itemInfoo">
                  <p>Logout</p>
                  <span>log out from your account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  </div>
  <!-- end navbar -->
</template>

<style scoped lang='scss'>
@import '../css/variables.scss';
@import '../css/mixins.scss';
/* start navbar */
nav.navbar {
  background-color: transparent;
  padding: 30px 20px;
  transition: all 0.3s ease-in-out;
  a.navbar-brand {
    margin-left: 50px;
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    span {
      color: $maincolor;
      font-family: 'Montserrat', sans-serif;
    }
  }
  div.navbar-collapse {
    transition: all 0.3s ease-in-out;
    background-color: transparent !important;
  }
  button.navbar-toggler {
    border-color: #fff;
    padding: 2px 6px;
    span {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
      border-color: #fff;
    }
  }
  ul {
    margin-left: 200px;
    li {
      font-size: 18px;
      color: #fff;
      margin-right: 30px;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &.active {
        color: $maincolor;
        font-weight: bold;
      }
      &:hover {
        color: $maincolor;
      }
    }
  }
  .navicons {
    margin-left: 350px;
    .dropdown {
      padding: 0;
      display: inline-block;
      a {
        &:hover {
          color: $maincolor;
        }
      }
      img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: transparent;
        padding: 2px;
        margin-top: -10px;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: #fff;
        }
      }
      .dropdown-menu {
        left: -350%;
        width: 220px;
        .dropdown-item {
          display: flex;
          cursor: pointer;
          margin-top: 10px;
          i {
            color: $textcolor;
            font-size: 18px;
            transform: translateY(3px);
          }
          .itemInfoo {
            margin-left: -8px;
            p {
              margin-bottom: 0;
              font-weight: bold;
              font-size: 14px;
              margin-bottom: -6px;
            }
            span {
              font-size: 12px;
              color: $textcolor;
            }
          }
        }
      }
    }
    i {
      color: #fff;
      font-size: 16px;
      margin-right: 20px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: $maincolor;
      }
      &.fa-search {
        padding-right: 10px;
        border-right: 1px solid rgb(211, 208, 208);
      }
    }
  }
  &.scrolling {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    li {
      color: #000;
      padding-top: 0px;
      padding-bottom: 0px;
    }
    a.navbar-brand {
      color: #000;
    }
    div.navbar-collapse {
      background-color: transparent !important;
    }
    .navicons {
      i {
        color: #000;
        margin-top: 15px;
        &:hover {
          color: $maincolor;
        }
      }
      img {
        margin-top: -6px;
      }
    }
    button.navbar-toggler {
      border-color: rgba(0, 0, 0, 0.5);
      span {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0,0 , 0.5 )' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        border-color: #fff;
      }
    }
  }
  /* start navbar media query */
  @include mb {
    a.navbar-brand {
      margin-left: 0;
      font-size: 25px;
    }
    div.navbar-collapse {
      background-color: rgba(0, 0, 0, 0.8) !important;
      padding: 0 30px 30px;
      border-radius: 20px;
      margin-top: 20px;
    }
    ul {
      margin-left: 0;
      margin-top: 25px;
      margin-bottom: 15px;
      li {
        margin-right: 0;
        text-align: left;
        margin-bottom: 10px;
      }
    }
    .navicons {
      margin-left: 0;
      .dropdown {
        a {
          font-size: 12px;
        }
      }
      i {
        font-size: 15px;
      }
      .dropdown {
        img {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
  @include sm {
    a.navbar-brand {
      margin-left: 20px;
    }
    div.navbar-collapse {
      background-color: rgba(0, 0, 0, 0.8) !important;
      padding: 0 30px 30px;
      border-radius: 20px;
      margin-top: 20px;
    }
    button.navbar-toggler {
      padding: 4px 10px;
    }
    ul {
      margin-left: 0px;
      margin-top: 25px;
      margin-bottom: 15px;
      li {
        margin-right: 0;
        text-align: left;
        margin-bottom: 10px;
      }
    }
    .navicons {
      margin-left: 0;
      .dropdown {
        a {
          font-size: 15px;
        }
      }
      i {
        font-size: 20px;
      }
      .dropdown {
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  @include md {
    .navicons {
      margin-left: 13%;
    }
    ul {
      margin-left: 15%;
    }
  }
  @include lg {
    .navicons {
      margin-left: 23%;
    }
    ul {
      margin-left: 20%;
    }
  }
  /* end navbar media query */
}
/* end navbar */
</style>

<script>
import $ from 'jquery'
export default {
  data() {
    return {

    }
  },
  methods: {
    openSearch() {
      this.$store.state.openSearch = true;
    }
  },
  mounted() {
    /* start navbar animation */
    $(window).on('scroll', function() {
      if($(window).scrollTop() >= 100) {
        $('nav.navbar').css({
          backgroundColor: '#fff',
          padding: "6px 20px"
        })
        $('nav.navbar').addClass('scrolling');
      } else {
        $('nav.navbar').css({
          backgroundColor: 'transparent',
          padding: "30px 20px"
        })
        $('nav.navbar').removeClass('scrolling');
      }

      if($(window).scrollTop() >= 600) {
        $('nav.navbar').css({
          boxShadow: "0 2px 5px rgba(0,0,0,.1)"
        })
      } else {
        $('nav.navbar').css({
          boxShadow: 'none'
        })
      }
    })
    /* end navbar animation */
  }
}
</script>