<template>
  <section class=" w-full h-auto mb-10  mb-10">
      <h2 class="text-[52px] leading-[68px] font-[700] text[#0b1e33] text-center">Testimony</h2>
    <div class="p-5 md:p-2 flex justify-center h-full w-full overflow-y-auto">
      <div class="w-[100%] md:w-[900px] h-[400px]  shadow-xl mr-2  flex flex-col  gap-10 p-10 justify-between transition-all delay-200 duration-300 ease-in-out" v-for="item in img" :key="item">
        <div>
          <p class=" text-start md:leading-[36px]  leading-[24px] text-[14px] text-[#8c8889]">
            {{ item.text }}
          </p>
        </div>

        <div class="text-[#222222] text-[18px] leading-[28px]">
          <h2>{{ item.name}}</h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import {onMounted, reactive, ref} from "vue";
const data = reactive({
  items: [
    {
      text: "        Lorem Ipsum has been the\n" +
          "            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n" +
          "            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n" +
          "            electronic",
      name: "Mary John Clark"
    },
    {
      text: "       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
          "            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n" +
          "            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n" +
          "            electronic",
      name: "Mary Gods Pawer"
    },
  ],
})

const active = ref()
const img = ref([])


onMounted(()=>{
  let i = ref(0)
    setInterval(()=>{
        if (i.value > (data.items.length - 1)){
          i.value = 0
        }
        img.value = data.items.filter((val, index)=> index === i.value  )

      // console.log(data.items.length - 1)
        i.value++
    }, 5000)
})

</script>