<template>
    <div class='data__item'>
        <h3 class='data__title'>Year</h3>
    </div>
    <div class='data__item data__item--select'>
        <select v-model='yearFromValue' class='data__select'>
            <option v-for='item in yearArr' :key='item.id' :value='item.year'>{{ item.year }}</option>
        </select>
        <select v-model='yearToValue' class='data__select'>
            <option v-for='item in yearArr' :key='item.id' :value='item.year'>{{ item.year }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'CategoryYear',
    props: {
        yearArr: {
            type: Array,
            default: () => []
        },
        yearFrom: {
            type: Number,
            default: null
        },
        yearTo: {
            type: Number,
            default: null
        }
    },
    emits: ['update:yearFrom', 'update:yearTo'],
    computed: {
        yearFromValue: {
            get() {
                return this.yearFrom
            },
            set(value) {
                this.$emit('update:yearFrom', value)
            }
        },
        yearToValue: {
            get() {
                return this.yearTo
            },
            set(value) {
                this.$emit('update:yearTo', value)
            }
        }
    }
}
</script>

<style scoped>

</style>