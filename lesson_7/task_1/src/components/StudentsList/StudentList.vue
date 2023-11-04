<template>
<div class="list">
  <div class="list__wrapper">
      <div class="list__block">
        <div class="list__item">
          <p class="list__name">{{student.name}} {{student.surname}}</p>
          <p class="list__score">{{student.averageScore}}</p>
        </div>
      </div>
  </div>
</div>
</template>

<script>


export default {
  name: "StudentItem",
  props: {
    student: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  &__wrapper {
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__titles {
    display: flex;
    justify-content: space-between;
  }

  &__title {
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
  }

  &__name {
  }

  &__score {
  }
}
</style>