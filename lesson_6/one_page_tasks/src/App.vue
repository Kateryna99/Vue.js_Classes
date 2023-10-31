<template>
  <div class="wrapper">
<!--    Задача 1. Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150). При заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий). -->
    <user-info-container/>

<!--    Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях некоректний.-->
    <url-container/>

<!--    Задача 3. Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu” (приклад: ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні модифікатора check відображати червоним фоном input, якщо некоректний.-->
    <data-container/>


<!--  Задача 4. Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні відповідних модифікаторів відповідних полів input:
ім’я користувача -  у випадку порожнього поля (червони фон)
вік (вік менший за 18 – колір фону червоний, інакше – зелений).
  -->
    <user-data-container/>


<!--  Задача 6. Створити компонент - форму для вводу даних кредитної карти (на зразок поданого прикладу). При вводі “EXPIRY DATE” розділювач “/” додається автоматично.  -->
 <card-container/>


  </div>

</template>

<script>


import UserInfoContainer from "@/components/task_1/UserInfoContainer";
import UrlContainer from "@/components/task_2/UrlContainer";
import DataContainer from "@/components/task_3/DataContainer";
import UserDataContainer from "@/components/task_4/UserDataContainer";
import CardContainer from "@/components/task_6/CardContainer";
export default {
  name: "App",
  components: {
    CardContainer,
    UserDataContainer,
    DataContainer,
    UrlContainer,
    UserInfoContainer
  },
};
</script>

<style lang="scss">
@import './assets/style';
</style>
