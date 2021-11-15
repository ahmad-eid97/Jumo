<template>
  <div id="app">
    <!-- start navbar -->
    <navbar></navbar>
    <!-- end navbar -->
    <!-- start search page --> 
    <search v-if="$store.state.openSearch"></search>
    <loading v-if="$store.state.Loading"></loading>
    <!-- end search page -->
    <!-- scroll to top button -->
    <i class="fas fa-angle-up top" @click="scrollToTop"></i>
    <!-- scroll to top button -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'css/variables.scss';
@import 'css/mixins.scss';
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
i.top {
  position: fixed;
  top: 3%;
  right: 2%;
  z-index: 999;
  color: #fff;
  font-size: 35px;
  width: 55px;
  height: 55px;
  line-height: 50px;
  border-radius: 50%;
  background-color: $maincolor;
  border: 1px solid $maincolor;
  opacity: 0;
  transition: all 1s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  @include mb {
    width: 40px;
    height: 40px;
    line-height: 38px;
    font-size: 23px;
  }
}
</style>

<script>
import navbar from './components/Navbar'
import search from './components/Search'
import loading from './components/Loading'
import $ from 'jquery'
export default {
  data() {
    return {

    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  },
  mounted() {
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
    $(window).on('scroll', function() {
      if($(window).scrollTop() >= 300) {
        $('i.top').css({
          opacity: '1',
          top: '90%',
          zIndex: '9999' 
        })
      } else {
        $('i.top').css({
          opacity: '0',
          top: '3%',
          zIndex: '-1'
        })
      }
    });
  },
  components: {
    navbar,
    search,
    loading
  }
}
</script>
