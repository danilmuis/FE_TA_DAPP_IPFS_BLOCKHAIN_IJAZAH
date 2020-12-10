<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <input-ijazah-form data-background-color="green"> </input-ijazah-form>
      </div>
      <!-- <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import { InputIjazahForm, UserCard } from "@/pages";

export default {
  components: {
    InputIjazahForm,
    // UserCard
  }
};
</script>
