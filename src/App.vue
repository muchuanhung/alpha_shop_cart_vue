<template>
  <div id="checkout-page">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>



<script>
//製作component元件導入
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>



