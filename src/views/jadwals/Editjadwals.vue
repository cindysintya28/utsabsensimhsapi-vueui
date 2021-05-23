<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Jadwal</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Jadwal</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="jadwal.jadwal"
          />
          <div class="alert alert-ganger" v-if="validation.jadwal">
            {{ validation.jadwal[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Matakuliah id</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="jadwal.matakuliah_id"
          />
          <div class="alert alert-ganger" v-if="validation.matakuliah_id">
            {{ validation.matakuliah_id[0] }}
          </div>
        </div>
    
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const jadwal = reactive({
      jadwal: "",
       matakuliah_id: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let jadwal = jadwal.jadwal;
      let matakuliah_id = jadwal.matakuliah_id;
      
      axios
        .post('http://127.0.0.1:8000/api/jadwals', {
          jadwal: jadwal,
          matakuliah_id: matakuliah_id,
          
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      jadwal,
      validation,
      router,
      store,
    };
  },
};
</script>

