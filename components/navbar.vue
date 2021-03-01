<template>

<!-- Main div -->
<div>


<!-- navbar div(*) -->
<div 
 class="navbar"
 role="navigation" 
 aria-label="main navigation">




<!-- navbar-brand div(*2) -->

<div class="navbar-brand">

<!-- Logo -->
<a 
 class="navbar-item" 
 href="https://bulma.io">

<img 
 src="https://bulma.io/images/bulma-logo.png" 
 width="112" height="28">

</a>


<!-- burger menu -->

<a 
 class="navbar-burger" 
 role="button" 
 aria-label="menu" 
 aria-expanded="false"
 data-target="navbarItems"
 @click="toggleNav = !toggleNav" :class="{ 'is-active': toggleNav }">

<span aria-hidden="true"></span>
<span aria-hidden="true"></span>
<span aria-hidden="true"></span>

</a>

<!-- (*2)navbar-brand div -->  
</div>



<!-- navbar-menu div(*2) -->

<div 
 class="navbar-menu"
 id="navbarItems"
 :class="{ 'is-active': toggleNav }">




<!-- navbar-start div(*3) -->

<div class=
"navbar-start">

<a class="navbar-item">
 Home
</a>

<a class="navbar-item">
Documentation
</a>


<!-- navbar-dropdown div(*4) -->

<div 
 class="navbar-item has-dropdow"
 @click="toggleNav = !toggleNav" :class="{ 'is-active': toggleNav }">

<a class="navbar-link">
More
</a>

<!-- navbar-dropdown's items div(*5) -->

<div class="navbar-dropdown"><a class="navbar-item">
About
</a>
          
<a class="navbar-item">
Jobs
</a>

<a class="navbar-item">
Contact
</a>

<hr class="navbar-divider"
>
<a class="navbar-item">
Report an issue
</a>

<!-- (*5)navbar-dropdown's items div -->
</div>

<!-- (*4)navbar-dropdown-item div -->
</div>

<!-- (*3)navbar-start -->
</div>



<!-- navbar-end div(*3) -->

<div class="navbar-end">

<!-- navbar-item div(*4) -->

<div class="navbar-item">

<!-- button div(*5) -->
<div class="buttons">

<a class="button is-primary"
>
<strong>Sign up</strong>
</a>

<a class="button is-light">
Log in
</a>

<!-- (*5)button div -->
</div>

<!-- (*4)navbar-item div* -->
</div>

 <!-- (*3)navbar-end div* -->     
</div>

<!-- (*2)navbar-menu div -->
  </div>


<!-- *navbar div -->
</div>


<!-- Main div -->
</div>

</template>

<script>
export default {
 data() {
     return {
         toggleNav: false
     }
 },
}
</script>


<style lang="scss" scoped>

@import '~/assets/scss/style.scss';

// .navbar-item, .button{
// margin-right: 2rem;
// }

</style>