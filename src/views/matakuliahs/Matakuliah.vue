<template>
  <div class="matakuliahs">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/creatematakuliahs">Add matakuliah</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">Id</th>
      <th scope="col">Nama matakuliah</th>
      <th scope="col">Sks</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in matakuliahs" :key="index">
      <td>{{ matakuliah.nama_matakuliah}}</td>
      <td>{{ matakuliah.sks}}</td>
       
      <td>
        <router-link class="btn btn-success" :to="{name:'Editmatakuliahs', params:
        {id:matakuliah.id}}"
          >Edit</router-link>
        <button @click.prevent="matakuliahDelete(matakuliah.id)" class="btn 
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
  name: " Matakuliah",
  components: {
    Slider
  },
  setup(){
    let matakuliahs = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/matakuliahs')
      .then(response => {
        matakuliahs.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function matakuliahDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/matakuliahs/${id}`)
      .then(()=>{
        let z = this.matakuliahs.map(matakuliahs => matakuliahs.id).indexOf(id);
        this.matakuliahs.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      matakuliahs,
      matakuliahDelete
    }
  }
};
</script>

