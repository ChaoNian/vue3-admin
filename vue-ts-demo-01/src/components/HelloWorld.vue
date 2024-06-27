<script setup lang="ts">
import {ref, reactive, computed, provide, inject} from 'vue'
import type {Ref, InjectionKey} from 'vue'
defineProps<{
  msg: string
}>()

// emit 类型限制
// const emit= defineEmits(['change', 'update'])

// // 基于选项
// const emit = defineEmits({
//   change: (id:number) => {
//     // f返回 true
//     return id ? true : false
//   },
//   update: (value: string) => {
//     return value ? true : false
//   }
// })

// 基于类型
// const emit = defineEmits<{
//   (e: 'change', id: number):void
//   (e: 'update', id: string):void
// }>()

//  更加简洁
// const emit = defineEmits<{
//   change: [id: number],
//   update: [value: string]
// }>()

// 为 ref() 标注类型
//  ref 内的值指定一个更复杂的类型，可以通过使用 Ref 这个类型：
// const year:Ref<string | number>= ref(2020)
//   console.log(year);

  // 在调用 ref() 时传入一个泛型参数，来覆盖默认的推导行为
  // const year= ref<string | number>('2020')
  // console.log(year);
  
  
// 推导得到的类型：Ref<number | undefined>
  // const n = ref<number>()

  // 为 reactive() 标注类型
  // 使用接口

  // interface Book {
  //   title: string,
  //   year: number
  // }
  // 不推荐使用 reactive() 的泛型参数，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同。
  // const book:Book = reactive({title:'vuess'})
// console.log(book);

// 为 computed() 标注类型
// 泛型参数显式指定类型：
// const double = computed<number>(() => {
//   // 若返回值不是 number 类型则会报错
//   return 2
// })


// 为 provide / inject 标注类型
// const key = Symbol() as InjectionKey<string>
// provide(key, 'foo'

// )

// 模版引用标注类型
const dddd = ref<HTMLInputElement | null>(null)
</script>

<template>
  <div class="greetings" ref="dddd">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
