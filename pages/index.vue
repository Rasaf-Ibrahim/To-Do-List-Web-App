<template>

<!-- Component's global style -->

<div class="has-background-white"
>

<!-- Website's Title -->

<section class=
"is-size-1 
has-text-centered py-6 ">
Fish Fish Fish | Read about fish!
</section>


<!-- Latest Post -->

<post-preview/>


</div>
</template>

<script>
import Card from '../components/card.vue'
import latestPost from '../components/latestPost.vue'
    export default {
  components: { latestPost, Card },
        
    }
</script>


<style lang="scss" scoped>

@import '~/assets/scss/style.scss';


</style>