<template>
    <div class='data__block'>
        <div class='data__item'>
            <h3 class='data__title'>{{ title }}</h3>
        </div>
        <div class='data__item'>
            <select v-model='dataValue' class='data__select'>
                <option v-for='item in dataArr' :key='item.id' :value='item.title'>{{ item.title }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategorySelect',
    props: {
        dataArr: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    computed: {
        dataValue: {
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

<style lang='scss' scoped>

</style>