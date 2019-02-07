import { API, graphqlOperation } from 'aws-amplify'
import {
  createTask,
  updateTask,
  deleteTask
} from '../graphql/mutations'
import {
  listTasks
} from '../graphql/queries'

export default {
    async getTasks () {
        const tasks = await API.graphql(graphqlOperation(listTasks))
        return tasks.data.listTasks.items
    },
    async createTask(taskTitle) {
       const args = {
          input: {
            title: taskTitle,
            completed: false
          }
        }
        const newTask = await API.graphql(graphqlOperation(createTask, args))
        return newTask
    },
    async updateTask(taskDetails) {
      const args = {
        input : taskDetails
      }
      const updatedTask = await API.graphql(graphqlOperation(updateTask, args))
      return updatedTask
    },
    async deleteTask(taskId) {
        const args = {
          input: {
            id: taskId
          }
        }
        return API.graphql(graphqlOperation(deleteTask, args))
    }
}































