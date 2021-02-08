import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        updateTask(state, {id, description, date}) {
            const tasks = state.tasks.concat()
            const idx = tasks.findIndex( t => t.id === id)
            const task = tasks[idx]

            tasks[idx]  = {...task, date, description}
            state.tasks = tasks
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    },
    actions: {
        addTask({commit}, task) {
            commit('addTask', task)
        },
        updateTask({commit}, task) {
            commit('updateTask', task)
        }
    },
    getters: {
        tasks: (state) =>  state.tasks,
        taskID: state => id => state.tasks.find(task => task.id === id)
    }
})