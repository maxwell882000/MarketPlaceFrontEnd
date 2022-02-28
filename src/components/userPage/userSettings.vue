<template>
  <div>
    <div class="buyshop-card mb-3">
      <h6>Фото профиля</h6>
      <div class="profile-photo"></div>
      <b-button size="sm" variant="link">Изменить</b-button>
    </div>
    <div class="buyshop-card">
      <h6>Персональные данные</h6>
      <input-field
        class="input"
        v-model="userName"
        placeholder="Имя и Фамилия*"
      />
      <input-field
        class="input"
        v-model="phone"
        type="number"
        placeholder="Телефон*"
      />
      <input-field
        v-model="email"
        class="input"
        type="email"
        placeholder="Электронная почта*"
      />
      <div class="d-flex flex-wrap">
        <input-field
          type="date"
          class="input-sm"
          v-model="birth"
          placeholder="День рождения"
        />
        <b-dropdown
          id="dropdown-1"
          :text="gender == 'm' ? `Мужчина` : `Женщина`"
          variant="white"
          class="custom-dropdown"
        >
          <b-dropdown-item @click="gender = 'm'">Мужчина</b-dropdown-item>
          <b-dropdown-item @click="gender = 'f'">Женщина</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../shared/InputField.vue";
export default {
  data: () => ({
    userName: "Hello",
    phone: "998",
    email: "",
    birth: "",
    gender: "m",
  }),
  components: { InputField },
};
</script>

<style scoped>
.profile-photo {
  width: 83px;
  height: 83px;
  border-radius: 50%;
  background: #bd00ff;
}
.input {
  width: 600px;
}
.input-sm {
  width: 300px;
  margin-right: 30px;
}
.custom-dropdown {
  height: 50px;
  width: 270px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
}

@media (max-width: 992px) {
  .input,
  .input-sm,
  .custom-dropdown {
    width: 100%;
    margin-right: 0;
  }
}
</style>