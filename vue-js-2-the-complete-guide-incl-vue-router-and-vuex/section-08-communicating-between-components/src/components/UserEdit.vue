<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>
      User Age: {{userAge}}
      <button @click="editAge">Edit Age</button>
    </p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      this.$emit("ageWasEdited", this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
