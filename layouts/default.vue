<template>
<div>
  <navigation></navigation>
  <Nuxt />
</div>
</template>

<script>
import Navigation from "../components/navigation";
export default {
  name: "default",
  components: {Navigation}
}
</script>

<style scoped>

</style>
