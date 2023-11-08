<template>
    <div class='data__block'>
        <div class='data__item'>
            <h3 class='data__title'>Body Type</h3>
        </div>
        <div v-for='item in carBodyArr' :key='item.id' class='data__item'>
            <label for='carBody' class='data__label'> {{ item.title }}
            </label>
            <input v-model='carBodyType' name='carBody' type='checkbox' :value='item.title' class='data__input'>
        </div>
    </div>


</template>

<script>
export default {
    name: 'CategoryCheckBox',
    props: {
        modelValue: {
            type: Array,
            default: () => []
        },
        carBodyArr: {
            type: Array,
            default: () => []
        }
    },
    emits: ['update:modelValue'],

    computed: {
        carBodyType: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<style scoped>

</style>