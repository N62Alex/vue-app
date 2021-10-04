<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>
      <form>
    <div class="input-field">
      <input id="title" type="text" class="validate" required>
      <label for="title">Title</label>
      <span class="helper-text" data-error="Title is required"></span>
    </div>
        <div class="chips" ref="chips">

        </div>

          <div class="input-field">
            <textarea id="description" type="text" class="materialize-textarea"></textarea>
            <label for="description">Description</label>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  mounted() {
  M.Chips.init(this.$refs.chips, {
    placeholder: 'Task tags'
  });
 }
}
</script>
