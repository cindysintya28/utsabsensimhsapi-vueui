<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Kontrak Matakuliah</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">id</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
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
          <label for="inputPassword4" class="form-label">Semester id</label>
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
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
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

    const route = useRoute();

    onMounted(()=>(
      axios.get(`http://127.0.0.1:8000/api/kontrakmatakuliahs/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.id)

        kontrakmatakuliah.id = response.data.data.id
        kontrakmatakuliah.mahasiswa_id = response.data.data.mahasiswa_id
        kontrakmatakuliah.semester_id = response.data.data.semester_id
      }).catch(error => {
        console.log(error.response.data)
      })
    ))

    function update() {
      let id = kontrakmatakuliah.id;
      let mahasiswa_id = kontrakmatakuliah.mahasiswa_id;
      let semester_id = kontrakmatakuliah.semester_id;

      axios.put(`http://127.0.0.1:8000/api/kontrakmatakuliahs/${route.params.id}`, {
          id: id,
          mahasiswa_id: mahasiswa_id,
          semester_id: semester_id,
        })
        .then(() => {
          router.push({
            name: 'Kontrak',
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
      update,
      route
    };
  },
};
</script>

