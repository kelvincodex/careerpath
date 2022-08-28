<template>
  <div class="flex items-center space-x-1  justify-between w-full">
    <div>
      <a href="#" class="flex items-start px-4 py-2 text-gray-500 bg-gray-300 rounded-md" :class="[career.end ? '': 'hover:bg-blue-400 hover:text-white font-bold' ]" @click="$emit('previous')">
        Previous
      </a>
    </div>

    <div>
<!--      <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 mr-1 rounded-md hover:bg-blue-400 hover:text-white">-->
<!--        1-->
<!--      </a>-->
<!--      <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 mr-1 rounded-md hover:bg-blue-400 hover:text-white">-->
<!--        2-->
<!--      </a>-->
<!--      <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 mr-1 rounded-md hover:bg-blue-400 hover:text-white">-->
<!--        3-->
<!--      </a>-->

    </div>

    <div>
      <a href="#" class="px-4 py-2  text-gray-500 bg-gray-300 rounded-md " :class="[career.start ? '' : 'hover:bg-blue-400 hover:text-white font-bold']" @click="$emit('next')">
        Next
      </a>
    </div>
  </div>
</template>

<script setup>
import {useCareer} from "../../stores/career";
const previous = defineEmits(['previous', 'next'])
const career = useCareer()
// function previous(){
//   console.log("+1")
// }

</script>