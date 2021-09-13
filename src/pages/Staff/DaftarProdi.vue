<template>
  <div class="content">
    <div>
      <b-modal v-model="modal">
        {{modal_title}}
        <md-field>
          <label>Nama Program Studi</label>
          <md-input v-model="name" name="name" type="text" />
        </md-field>
        <md-field>
          <label>Setting TTD </label>
        </md-field>
        <md-radio v-model="setting" :value=1 selected>1</md-radio>
        <md-radio v-model="setting" :value=2>2</md-radio>
        <md-radio v-model="setting" :value=3>3</md-radio>
        <md-radio v-model="setting" :value=4>4</md-radio>
        <md-radio v-model="setting" :value=5>5</md-radio>

        <template #modal-footer>
          <div class="w-100">
            <b-button
              variant="success"
              size="lg"
              class="float-right"
              @click="addProgramStudy"
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
            <h4 class="title">Daftar Semua Prodi Fakultas xxx</h4>
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
import { DataTableProdi_staff } from "@/components";
import { getFile } from "../services";
import { saveAs } from "file-saver";
import { getIjazah } from "@/pages/services";
import { required, email, numeric } from "vuelidate/lib/validators";
export default {
  components: {
    // SimpleTable
    "data-table-skl": DataTableProdi_staff,
  },
  validations: {
    name: {
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
      if(!data){
        this.name = "";
        this.modal_title = "Tambah Program Studi";
        this.edit = false;
      }else{
        this.name = data.nama;
        this.modal_title = "Edit Program Studi";
        this.edit = true;
      }
    },
    addProgramStudy(){
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
          this.notifyVue("Program Studi Berhasil Disimpan...!!", true);
        }
        this.showModal();
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
  },
  data() {
    return {
      fields: [
        { key: "no", sortable: false },
        { key: "nama", sortable: true, label: "Nama" },
        { key: "setting", sortable: true, label: "Setting TTD" },
        { key: "action", sortable: false, label: "Action" },
      ],
      items: [],
      meta: {
        per_page: 10,
        current_page: 1,
        total: 3,
      },
      options: [
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
        // { name: 'Laravel', language: 'PHP', $isDisabled: true },
      ],
      current_page: 1,
      per_page: 10,
      search: "",
      sortBy: "Nama",
      sortByDesc: false,
      data: [],
      ijazah: true,
      status: null,
      modal: false,
      name: "",
      setting: 1,
      modal_title: "",
      edit: ""
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
