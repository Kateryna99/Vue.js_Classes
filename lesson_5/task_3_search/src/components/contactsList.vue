<template>
  <div class="contact">
    <div class="contact__circle" >
      <p class="contact__label">{{contactData.first_name[0]}}</p>
    </div>
    <div class="contact__info">
      <p class="contact__name">{{contactData.first_name}} {{contactData.last_name}}</p>
      <p class="contact__email">{{contactData.email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactsList",
  props: {
    contactData:{
      type: Object,
      default: () => ({}),
    }
  },
  computed:{
    /*createRandomColor(){
      return Math.floor(Math.random()*16777215).toString(16)
    }*/
  }
}
</script>

<style lang="css" scoped>
.contact {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact__circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.36);
  background-color: #74b274;

  display: flex;
  justify-content: center;
  align-items: center;
}

.contact__label {
  font-size: 20px;
  color: aliceblue;
  text-transform: uppercase;
}

.contact__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact__name {
  font-weight: 600;
  font-size: 18px;
}

.contact__email {
  font-size: 14px;
}
</style>