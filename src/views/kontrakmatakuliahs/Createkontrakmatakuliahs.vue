<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add Kontrak Matakuliah</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">ID</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="kontrakmatakuliah.id"
          />
          <div class="alert alert-ganger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Mahasiswa id</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="kontrakmatakuliah.mahasiswa_id"
          />
          <div class="alert alert-ganger" v-if="validation.mahasiswa_id">
            {{ validation.mahasiswa_id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Semester Id</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="kontrakmatakuliah.semester_id"
          />
          <div class="alert alert-ganger" v-if="validation.semester_id">
            {{ validation.semester_id[0] }}
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
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
    const kontrakmatakuliah = reactive({
       id: "",
       mahasiswa_id: "",
       semester_id: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = kontrakmatakuliah.id;
      let mahasiswa_id = kontrakmatakuliah.mahasiswa_id;
      let semester_id = kontrakmatakuliah.semester_id;

      axios
        .post('http://127.0.0.1:8000/api/kontrakmatakuliahs', {
          id: id,
          mahasiswa_id: mahasiswa_id,
          semester_id: semester_id,
        })
        .then(() => {
          router.push({
            name: "Kontrak",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      kontrakmatakuliah,
      validation,
      router,
      store,
    };
  },
};
</script>

