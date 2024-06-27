import {createPinia, defineStore} from 'pinia'
import { ref, computed } from "vue";
// export const useAlertsStore = defineStore('alerts', {
//     // 其他配置
//     state: () => {
        // buddle: 0
//     },
//     getters: (state) => state.count * 2,
//     actions: {
        // increment() {
        //     this.count++
        // },
//     }

// })

export const useCount = defineStore('count', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }
    return {
        count, doubleCount, increment
    }
})