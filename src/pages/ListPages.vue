<template>
  <div>

    <h3>List</h3>

    <hr>

    <table v-if="tasks.length">
      <thead>
      <tr>
        <th>№</th>
        <th>Title</th>
        <th>Data</th>
        <th>Description</th>
        <th>Status</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task, i) of tasks"
          :key="task.id"
      >
        <td>{{ i + 1 }}</td>
        <td>{{ task.title }}</td>
        <td>{{new Date(task.date).toLocaleDateString() }}</td>
        <td class="td"><div class="description">{{task.description}}</div></td>
        <td>{{ task.status }}</td>
        <td>
          <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
            Open
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>

    <p v-else>No tasks</p>

  </div>
</template>


<script>
export default {
  computed: {
    tasks() {
     return  this.$store.getters.tasks
    }
  }
}
</script>


<style>
.description{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.td {
  max-width: 400px;
}
</style>