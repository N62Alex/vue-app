import { createRouter, createWebHistory } from 'vue-router'
import List from "../views/List";
import Create from "../views/Create";
import Task from "../views/Task";

const routes = [
  {
    path: '/',
    name: 'Create',
    component: Create
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: Task
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
