<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h2>Create Task</h2>

      <form @submit.prevent="addTask">

        <div class="input-field">
          <input id="title" type="text" class="validate" required v-model="title">
          <label for="title">New Task</label>
          <span class="helper-text" data-error="Title id required"></span>
        </div>

        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
        </div>

        <input type="text" ref="datepicker">

        <button class="btn" type="submit">Add task</button>

      </form>

    </div>
  </div>
</template>


<script>

export default {
  name: 'create',
  data() {
    return {
      description: '',
      title: '',
      chips: null,
      date: null
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'tags'
    })
    // eslint-disable-next-line no-undef
   this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    });
  },
  methods: {
    addTask() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        tags: this.chips.chipsData,
        date: this.date.date
      }
      this.$store.dispatch('addTask', task)
      this.$router.push('/list')
    }
  },
  destroyed() {
    if(this.date && this.date.destroy) {
      this.date.destroy()
    }
    if(this.chips && this.date.destroy) {
      this.date.destroy()
    }
  }
}
</script>


<style>

</style>