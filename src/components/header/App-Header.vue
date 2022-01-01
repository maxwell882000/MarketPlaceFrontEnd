<template>
  <header>
    <headerUpperLine />
    <nav>
      <div class="container">
        <div class="d-flex justify-content-between align-items-center py-3">
          <img src="@/assets/logo.png" alt="buy-shop logo">
          <div class="d-flex">
            <div class="dropdown">
              <button class="dropdown-toggle" type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Везде
              </button>
              <ul class="dropdown-menu" aria-labelledby="cityDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <form autocomplete="off" @submit.stop.prevent="submit()">
              <div class="line"></div>
              <input autocomplete="false" type="text" placeholder="Искать товары">
              <button type="submit">
                <b-icon icon="search" variant="secondary"></b-icon>
              </button>
            </form>
          </div>
          <div class="btns-row">
            <a href="#">
              <img src="@/assets/icons/heart.svg" alt="heart icon">
              Избранное
            </a>
            <a href="#">
              <img src="@/assets/icons/cart.svg" alt="cart icon">
              Корзина
            </a>
            <a href="#">
              <img src="@/assets/icons/user.svg" alt="cart icon">
              Профиль
            </a>
          </div>
        </div>
      </div>
    </nav>
    <headerDownLine />
  </header>
</template>

<script>
import HeaderUpperLine from "./Header-Upper-Line";
import HeaderDownLine from "./Header-Down-Line";
export default {
  components: {HeaderUpperLine, HeaderDownLine},
  methods: {
    submit() {
      console.log("submit");
      return 0;
    }
  }
}
</script>

<style scoped lang="scss">;
  nav {
    background-color: white;
    border-bottom: 2px solid #F2F2F2;
  }
  input, .dropdown button, button {
    padding-left: 20px;
    padding-right: 20px;
    background: #f5f5f5;
    border: none;
    outline: none;
    height: 44px;
  }
  .dropdown {
    button {
      border-radius: 8px 0 0 8px;
      font-weight: 500;
    }
  }
  form {
    display: flex;
    .line {
      height: 100%;
      width: 1px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 60%;
        background-color: #E0E0E0;
      }
    }
    input {
      color: black;
      font-weight: 500;
      width: 700px;

      &::placeholder {
        color: black;
        font-weight: 300;
      }
    }
    button {
      border-radius: 0 8px 8px 0;
    }
  }
  .btns-row {
    display: flex;
    a {
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 500;
      text-decoration: none;
      padding: 0 10px;

      &:hover {
        color: #535963;

        img {
          opacity: 0.7;
        }
      }
    }
  }
</style>