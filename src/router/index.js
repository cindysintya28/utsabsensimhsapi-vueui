import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/absens/Home.vue'
import Createabsens from '../views/absens/Createabsens.vue'
import Editabsens from '../views/absens/Editabsens.vue'
import Index from '../views/jadwals/Index.vue'
import Createjadwals from '../views/jadwals/Createjadwals.vue'
import Editjadwals from '../views/jadwals/Editjadwals.vue'
import Kontrak from '../views/kontrakmatakuliahs/Kontrak.vue'
import Createkontrakmatakuliahs from '../views/kontrakmatakuliahs/Createkontrakmatakuliahs.vue'
import Editkontrakmatakuliahs from '../views/kontrakmatakuliahs/Editkontrakmatakuliahs.vue'
import Mahasiswa from '../views/mahasiswas/Mahasiswa.vue'
import Createmahasiswas from '../views/mahasiswas/Createmahasiswas.vue'
import Editmahasiswas from '../views/mahasiswas/Editmahasiswas.vue'
import Matakuliah from '../views/matakuliahs/Matakuliah.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'
import Semester from '../views/semesters/Semester.vue'
import Createsemesters from '../views/semesters/Createsemesters.vue'
import Editsemesters from '../views/semesters/Editsemesters.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createabsens',
    name: 'Createabsens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createabsens
  },
  {
    path: '/editabsens/:id',
    name: 'Editabsens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editabsens
  },
  {
    path:'/jadwals',
    name: 'Index',
    component: Index
  },
  {
    path: '/createjadwals',
    name: 'Createjadwals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createjadwals
  },
  {
    path: '/editjadwals/:id',
    name: 'Editjadwals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editjadwals
  },
  {
    path: '/kontrakmatakuliahs',
    name: 'Kontrak',
    component: Kontrak
  },
  {
    path: '/createkontrakmatakuliahs',
    name: 'Createkontrakmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkontrakmatakuliahs
  },
  {
    path: '/editkontrakmatakuliahs/:id',
    name: 'Editkontrakmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontrakmatakuliahs
  },
  {
    path: '/mahasiswas',
    name: 'Mahasiswa',
    component: Mahasiswa
  },
  {
    path: '/createmahasiswas',
    name: 'Createmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswas
  },
  {
    path: '/editmahasiswas/:id',
    name: 'Editmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswas
  },
  {
    path: '/matakuliahs',
    name: 'Matakuliah',
    component: Matakuliah
  },
  {
    path: '/creatematakuliahs',
    name: 'Creatematakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliahs
  },
  {
    path: '/editmatakuliahs/:id',
    name: 'Editmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliahs
  },
  {
    path: '/semesters',
    name: 'Semester',
    component: Semester
  },
  {
    path: '/createsemesters',
    name: 'Createsemesters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createsemesters
  },
  {
    path: '/editsemesters/:id',
    name: 'Editsemesters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editsemesters
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
