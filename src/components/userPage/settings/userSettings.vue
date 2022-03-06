<template>
  <div>
    <div class="buyshop-card mb-3">
      <h6>Фото профиля</h6>
      <div class="d-flex flex-column justify-content-start align-items-start ">
        <b-avatar  size="5rem"></b-avatar>
        <input type="file" ref="file" style="display: none">
        <b-button size="sm" @click="$refs.file.click()" variant="link"
                  style="text-decoration: none">Изменить</b-button>
      </div>
    </div>

    <div class="buyshop-card mb-3">
      <h6>Персональные данные</h6>
      <div style="width: 35%">
        <Input
            class="input"
            v-model="userName"
            placeholder="Имя и Фамилия*"
        />
        <InputPhone
            class="input"
            v-model="phone"
            placeholder="Телефон*"
        />
        <ButtonForm title="Изменить" class="p-2"></ButtonForm>
      </div>
      <!--      <div class="d-flex flex-wrap">-->
      <!--        <input-field-->
      <!--            type="date"-->
      <!--            class="input-sm"-->
      <!--            v-model="birth"-->
      <!--            placeholder="День рождения"-->
      <!--        />-->
      <!--        <b-dropdown-->
      <!--            id="dropdown-1"-->
      <!--            :text="gender == 'm' ? `Мужчина` : `Женщина`"-->
      <!--            variant="white"-->
      <!--            class="custom-dropdown"-->
      <!--        >-->
      <!--          <b-dropdown-item @click="gender = 'm'">Мужчина</b-dropdown-item>-->
      <!--          <b-dropdown-item @click="gender = 'f'">Женщина</b-dropdown-item>-->
      <!--        </b-dropdown>-->
      <!--      </div>-->
    </div>
    <div class="buyshop-card">
      <h6>Аккаунт</h6>
      <div style="width: 35%">
        <InputPassword v-model="gender" placeholder="Старый пароль">
        </InputPassword>
        <InputPassword placeholder="Новый пароль">
        </InputPassword>
        <InputPassword placeholder="Подтвердите новый пароль"/>
        <ButtonForm title="Подтвердить изменение пароля" class="p-2"></ButtonForm>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/helper/input/input";
import InputPhone from "@/components/helper/input/inputPhone";
import InputPassword from "@/components/helper/input/inputPassword";
import ButtonForm from "@/components/helper/button/buttonForm";

export default {
  data: () => ({
    userName: "Hello",
    phone: "998",
    email: "",
    birth: "",
    gender: "m",
  }),
  components: {ButtonForm, InputPassword, InputPhone, Input},
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