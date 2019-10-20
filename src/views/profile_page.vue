<template>

    <div class = "profile_page">
      <navigateBar/>
      <h1>this is profile_page</h1>
    </div>

</template>

<script>
// @ is an alias to /src
import navigateBar from '@/components/navigateBar'

export default {
  name: 'profile_page',
  data: function () {
    return { message: 'hellow' }
  },
  component: navigateBar
}
</script>

<style scoped>

</style>
