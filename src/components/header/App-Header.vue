<template>
  <header :class="[scrolled ? 'fixed' : '']">
    <headerUpperLine />
    <nav>
      <div class="container">
        <div class="d-flex justify-content-between align-items-center py-3">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="buy-shop logo" />
          </router-link>
          <div class="d-flex search-form">
            <div class="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                id="cityDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Везде
              </button>
              <ul class="dropdown-menu" aria-labelledby="cityDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
            <form autocomplete="off" @submit.stop.prevent="submit()">
              <div class="line"></div>
              <input
                autocomplete="false"
                type="text"
                placeholder="Искать товары"
              />
              <button type="submit">
                <b-icon icon="search" variant="secondary"></b-icon>
              </button>
            </form>
          </div>
          <div class="btns-row">
            <button class="search-button">
              <b-icon icon="search" variant="dark"></b-icon>
            </button>
            <a href="#">
              <img src="@/assets/icons/heart.svg" alt="heart icon" />
              Избранное
            </a>
            <router-link to="/cart">
              <img src="@/assets/icons/cart.svg" alt="cart icon" />
              Корзина
            </router-link>
            <a  href="#">
              <img src="@/assets/icons/user.svg" alt="cart icon" />
              Профиль
            </a>
            <Login></Login>
          </div>
        </div>
      </div>
    </nav>
    <headerDownLine class="down-line" />
  </header>
</template>

<script>
import HeaderUpperLine from "./Header-Upper-Line";
import HeaderDownLine from "./Header-Down-Line";
import Login from "@/components/auth/login/login";
export default {
  components: {Login, HeaderUpperLine, HeaderDownLine },
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    submit() {
      console.log("submit");
      return 0;
    },
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY > 100 && !this.scrolled) {
        this.scrolled = true;
      } else if (window.scrollY < 100 && this.scrolled) {
        this.scrolled = false;
      }
    };
  },
};
</script>

<style scoped lang="scss">
nav {
  transition: all 0.3s;
  background-color: white;
  border-bottom: 2px solid #f2f2f2;
  width: 100%;
  position: sticky;
  top: -120px;
  z-index: 666;
}
.fixed {
  nav {
    position: fixed;
    top: 0px;
  }
  .down-line {
    margin-top: 80px;
  }
}
input,
.dropdown button,
button {
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
      background-color: #e0e0e0;
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
  .search-button {
    display: none;
  }
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
@media (max-width: 1400px) {
  form > input {
    width: 450px;
  }
}
@media (max-width: 992px) {
  form > input {
    width: 200px;
    font-size: 14px;
  }
  .dropdown {
    button {
      font-size: 14px;
    }
  }
  .btns-row {
    a {
      font-size: 10px !important;
    }
  }
}
@media (max-width: 767px) {
  .search-form {
    display: none !important;
  }
  .search-button {
    display: block !important;
    margin-top: -6px;
    padding: 0 10px;
    background-color: transparent !important;
  }
}
</style>