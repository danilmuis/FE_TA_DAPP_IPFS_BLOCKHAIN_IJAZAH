<template>
  <div class="content">
    <div>
      <b-modal v-model="modal">
        {{edit ? 'Edit Fakultas':'Tambah Fakultas'}}

        <input type="hidden" v-model="id_faculty" name="id_faculty">
        <md-field>
          <label>Nama Fakultas</label>
          <md-input v-model="faculty" name="faculty" type="text" />
        </md-field>

        <template #modal-footer>
          <div class="w-100">
            <b-button
              variant="success"
              size="lg"
              class="float-right"
              @click="register"
            >
              Simpan
            </b-button>
            <b-button
              variant="danger"
              size="lg"
              class="float-left"
              @click="showModal"
            >
              Tutup
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Daftar Semua Fakultas </h4>
            <!-- <p class="category">Klik Download untuk mengunduh file</p> -->
          </md-card-header>
          <md-card-content>
            <!-- <div class="md-layout-item md-small-size-100 md-size-40">
              <multiselect
                v-model="status"
                deselect-label="Can't remove this value"
                track-by="name"
                label="name"
                placeholder="Filter by Status"
                :options="options"
                :searchable="false"
                :allow-empty="false"
              >
                <template slot="singleLabel" slot-scope="{ option }"
                  ><strong>{{ option.name }}</strong></template
                >
              </multiselect>
            </div> -->
            <data-table-skl
              :items="items"
              :fields="fields"
              :meta="meta"
              @edit="showModal"
              @modal="showModal"
              @per_page="handlePerPage"
              @pagination="handlePagination"
              @search="handleSearch"
              @sort="handleSort"
            />
          </md-card-content>
        </md-card>
      </div>

      <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table></ordered-table>
          </md-card-content>
        </md-card>
      </div> -->
    </div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import swal from "sweetalert";
import { DataTableFaculties_superadmin } from "@/components";
import { getFile } from "../services";
import { saveAs } from "file-saver";
import { getIjazah } from "@/pages/services";
import { required, email, numeric } from "vuelidate/lib/validators";
export default {
  components: {
    "data-table-skl": DataTableFaculties_superadmin,
  },
  validations: {
    faculty: {
      required,
    },
  },
  methods: {
    setItems() {
      let current_page = this.search == "" ? this.current_page : 1;
      if (this.search != "") {
        this.items = this.data.filter((data) => data.berkas == this.ijazah);
        var res = this.items.filter((item) => {
          let kunci = this.search >= 0 ? "nim" : "nama";
          return Object.keys(item).some((key) =>
            item[kunci].includes(this.search.toUpperCase())
          );
        });
        this.items = res;
      } else {
        this.items = this.data.filter((data) => data.berkas == this.ijazah);
      }
      this.meta.total = this.items.length;
      this.items = this.items.slice(
        (current_page - 1) * this.per_page,
        this.per_page * current_page
      );
    },
    handlePerPage(val) {
      this.per_page = val;
      this.setItems();
    },
    handlePagination(val) {
      this.current_page = val;
      this.setItems();
    },
    handleSearch(val) {
      this.search = val;
      this.setItems();
    },
    handleSort(val) {
      this.sortBy = val.sortBy;
      this.sortByDesc = val.sortDesc;
      this.setItems();
      this.items.sortOn(this.sortBy);
    },
    showModal(data) {
      this.modal = !this.modal;
      if (!data) {
        this.faculty = "";
        this.id_faculty = "";
        this.edit = false;
      } else {
        this.faculty = data.nama;
        this.id_faculty = data.nim;
        this.edit = true;
      }
    },
    notifyVue(text, success) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message: text,
        icon: success ? "check" : "close",
        horizontalAlign: "right",
        verticalAlign: "top",
        type: this.$type[color]
      });
    },
    register(){
      this.$v.$touch();
      if (this.$v.$invalid) {
        swal({
          title: "Silahkan Cek Kembali Form Anda",
          icon: "error",
        });
      } else {
        if(this.edit){
          this.notifyVue("Perubahan Berhasil Disimpan...!!", true);
        }else{
          this.notifyVue("Fakultas Berhasil Disimpan...!!", true);
        }
        this.showModal();
      }
    }
  },
  data() {
    return {
      fields: [
        { key: "no", sortable: false },
        { key: "nama", sortable: true, label: "Nama Fakultas" },
        { key: "action", sortable: false, label: "Action" },
      ],
      items: [],
      meta: {
        per_page: 10,
        current_page: 1,
        total: 3,
      },
      faculties: [
        { name: "All", language: "Semua Status" },
        { name: "New", language: "Request SKL baru yg belum mendapatkan persetujuan" },
        {
          name: "On Process",
          language: "SKL yang sudah di review oleh staff dan sedang di ttd oleh Wadek",
        },
        {
          name: "Done",
          language: "SKL yang sudah di TTD Wadek dan dikirimkan ke mahasiswa",
        },
      ],
      current_page: 1,
      per_page: 10,
      search: "",
      sortBy: "Nama",
      sortByDesc: false,
      data: [],
      ijazah: true,
      faculty: "",
      id_faculty: "",
      status: null,
      modal: false,
      edit: "",
    };
  },
  mounted() {
    Array.prototype.sortOn = function (key) {
      this.sort(function (a, b) {
        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    };
    const ipfsClient = require("ipfs-http-client");
    this.ipfs = ipfsClient(process.env.VUE_APP_ENDPOINT_IPFS);
    getIjazah()
      .then((response) => {
        this.data = response;
        this.setItems();
      })
      .catch((errors) => {
        swal({
          title: "Server Error",
          icon: "error",
        });
      });
  },
};
</script>
