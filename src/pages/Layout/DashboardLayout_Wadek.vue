<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>

      <sidebar-link to="/wadek/letters">
        <md-icon>content_paste</md-icon>
        <p>Daftar Pengajuan SKL</p>
      </sidebar-link>
      <sidebar-link to="/wadek/program/study">
        <md-icon>content_paste</md-icon>
        <p>Setting Program Studi</p>
      </sidebar-link>
      <sidebar-link to="/wadek/profile">
        <md-icon>content_paste</md-icon>
        <p>Setting Profile</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      // this.$router.push('/login')
    } else {
      const user = this.$session.get("user");
      if (user.role !== 3 && user.role !== 4 && user.role !== 5 && user.role !== 6) {
        if (user.role === 1) {
          this.$router.push("/superAdmin");
        } else if (user.role === 2) {
          this.$router.push("/admin");
        }
      }
    }
  },
};
</script>
