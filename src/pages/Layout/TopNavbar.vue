<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <md-list-item href="#/user">
              <p style=""><strong>{{role}}</strong></p>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>

            <md-button 
              class="md-raised md-success" 
              style="width:10px; height:35px" 
              v-if="this.$session.exists()"
              @click="logout"
            > Logout
            </md-button>
          </md-list>

        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ],
      role: ''
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    logout() {
      this.$session.destroy();
      this.$router.push('/login');

    }
  },
  mounted(){
    const user = this.$session.get('user');
    this.role = user.role;
    if (user.role == 1) {
      this.role = 'Super Admin'
    } else if (user.role == 2) {
      this.role = 'Creator'
    } else if (user.role == 3) {
      this.role = 'Kaprodi'
    } else if (user.role == 4) {
      this.role = 'Dekan'
    } else if (user.role == 5) {
      this.role = 'Warek'
    } else if (user.role == 6) {
      this.role = 'Rektor'
    }
  }
};

</script>

<style lang="css"></style>
