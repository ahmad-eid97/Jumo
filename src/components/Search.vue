<template>
  <div class="search">
    <input type="text" placeholder="Search for specific items...">
    <button>Search</button>
    <i class="fas fa-times" @click="$store.state.openSearch = false"></i>
  </div>
</template>

<style scoped lang='scss'>
@import '../css/mixins.scss';
.search {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  padding-top: 21%;
  overflow-y: hidden;
  input {
    background-color: transparent;
    width: 700px;
    height: 61px;
    border-radius: 30px;
    color: #fff;
    font-size: 23px;
    outline: none;
    border: 1px solid #fff;
    padding-left: 25px;
    margin-left: 8%;
  }
  button {
    width: 140px;
    height: 55px;
    border-radius: 30px;
    border: none;
    background-color: #fff;
    transform: translateX(-143px);
    outline: none;
    position: relative;
    top: -3.5px;
  }
  i {
    position: absolute;
    top: 5%;
    right: 5%;
    color: #fff;
    width: 50px;
    height: 50px;
    line-height: 48px;
    font-size: 22px;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
  /* start media query of search */
  @include mb {
    padding-top: 300px;
    input {
      width: 90%;
      height: 50px;
      font-size: 16px;
      margin-left: 0;
    }
    button {
      transform: translateX(0px);
      margin-top: 20px;
      height: 45px;
    }
    i {
        position: absolute;
        top: 5%;
        right: 5%;
        color: #fff;
        width: 40px;
        height: 40px;
        line-height: 39px;
        font-size: 18px;
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
        background-color: #fff;
        color: #000;
        }
    }
  }
  @include sm {
    padding-top: 300px;
    input {
      width: 80%;
      height: 55px;
      font-size: 16px;
      margin-left: 1%;
    }
    button {
      height: 49px;
      position: relative;
      top:-1px;
      transform: translateX(-143px);
    }
  }
  @include md {
    padding-top: 25%;
  }
  /* end media query of search */
}
</style>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>