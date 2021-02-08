<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h4>{{ task.title }}</h4>

      <form @submit.prevent="submitHandler">

        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea style="min-height: 150px" id="description" class="materialize-textarea" v-model="description"></textarea>
          <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
        </div>

        <input type="text" ref="datepicker">

        <button class="btn" type="submit">Update</button>
        <button style="margin-left: 1rem;" class="btn blue" type="button">Completed</button>

      </form>

    </div>
    <p v-else>Task not found</p>
  </div>
</template>


<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskID(Number(this.$route.params.id))
    }
  },
    data: ()=> ({
        description: '',
        chips: null,
        date: null
      }),
    mounted() {
    this.description = this.task.description
      // eslint-disable-next-line no-undef
      this.chips = M.Chips.init(this.$refs.chips, {
        placeholder: 'tags',
        data: this.task.tags
      })
      // eslint-disable-next-line no-undef
      this.date = M.Datepicker.init(this.$refs.datepicker, {
        format: 'dd.mm.yyyy',
        defaultDate: new Date(),
        setDefaultDate: true
      });
    },
    methods: {
      submitHandler() {

        this.$store.dispatch('updateTask', {
          id: this.task.id,
          description: this.description,
          date: this.date.date
        })
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