<template>
  <button
    @click="$emit('onClick')"
    class="border border-black py-1 pr-4 pl-3 text-gray-700 rounded"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
  },
};
</script>
