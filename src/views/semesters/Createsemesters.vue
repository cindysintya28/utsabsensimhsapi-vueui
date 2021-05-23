<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add semester</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">id </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="id.id"
          />
          <div class="alert alert-ganger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>

       <div class="col-md-6">
          <label for="inputPassword4" class="form-label">semester</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="matakuliah.semester"
          />
          <div class="alert alert-ganger" v-if="validation.semester">
            {{ validation.semester[0] }}
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
    const semester = reactive({
      id: "",
      semester: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = semester.id;
      let semester = semester.semester;
   

      axios
        .post('http://127.0.0.1:8000/api/semesters', {
          semester: semester,
          id: id,
          
        })
        .then(() => {
          router.push({
            name: "Semester",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      semester,
      validation,
      router,
      store,
    };
  },
};
</script>

