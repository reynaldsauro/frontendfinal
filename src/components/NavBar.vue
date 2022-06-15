<template>
  <nav class="navbar navbar-expand-lg navbar-white bg-dark">
    <div class="container">
        <a class="navbar-brand"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <div class="first">
                <router-link to="/" class="nav-link"  >Home</router-link>
                </div>
            </li>

              <li class="nav-item">
                <div class="second">
                <router-link to="/about" class="nav-link" >About</router-link>
                </div>
            </li>

            <li class="nav-item">
                <div class="third">
                <router-link to="/tshirt" class="nav-link">Tshirts</router-link>
                </div>
            </li>
        </ul>
        </div>
    </div>
    
   
  </nav>
</template>

<script>
export default {

}
</script>

<style>






</style>