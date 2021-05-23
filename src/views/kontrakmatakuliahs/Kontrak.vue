<template>
  <div class="kontrakmatakuliahs">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createkontrakmatakuliahs">Add kontrakmatakuliah</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">Id</th>
      <th scope="col">Mahasiswa id</th>
      <th scope="col">Semester id</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in kontrakmatakuliahs" :key="index">
      <td>{{ kontrakmatakuliah.id}}</td>
      <td>{{ kontrakmatakuliah.mahasiswa_id }}</td>
      <td>{{ kontrakmatakuliah.semester_id }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editkontrakmatakuliahs', params:
        {id:kontrakmatakuliah.id}}"
          >Edit</router-link>
        <button @click.prevent="kontrakmatakuliahDelete(kontrakmatakuliah.id)" class="btn 
        btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { ref, onMounted } from 'vue';
export default {
  name: "Kontrak",
  components: {
    Slider
  },
  setup(){
    let kontrakmatakuliahs = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/kontrakmatakuliahs')
      .then(response => {
        kontrakmatakuliahs.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function kontrakmatakuliahDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/kontrakmatakuliahs/${id}`)
      .then(()=>{
        let z = this.kontrakmatakuliahs.map(kontrakmatakuliahs => kontrakmatakuliahs.id).indexOf(id);
        this.kontrakmatakuliahs.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      kontrakmatakuliahs,
      kontrakmatakuliahDelete
    }
  }
};
</script>

