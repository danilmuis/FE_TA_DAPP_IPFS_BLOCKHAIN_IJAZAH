<template>
  <div class="row">
    <div class="col-md-4 mb-2">
      <div class="form-inline">
        <label class="mr-2">Showing</label>
        <select class="form-control" v-model="meta.per_page" @change="loadPerPage">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label class="ml-2">Entries</label>
      </div>
    </div>

    <div class="col-md-4 offset-md-4">
      <div class="form-inline float-right">
        <label class="mr-2">Search</label>
        <input type="text" class="form-control" @input="search" />
      </div>
    </div>
    <md-button class="md-success md-hue-1" @click="showModal()">
      Tambah Program Studi
    </md-button>
    <div class="col-md-12">
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        show-empty
      >
        <template v-slot:cell(no)="row">
          {{ row.index + 1 }}
        </template>
        <template v-slot:cell(check)="row">
          <b-checkbox v-model="row.item.kaprodi" disabled> Kaprodi </b-checkbox>
          <b-checkbox v-model="row.item.dekan" disabled> Dekan </b-checkbox>
          <b-checkbox v-model="row.item.warek" disabled> Wakil Rektor </b-checkbox>
          <b-checkbox v-model="row.item.rektor" disabled> Rektor </b-checkbox>
        </template>
        <template v-slot:cell(setting)="row">
          {{row.index}}
        </template>
        <template v-slot:cell(action)="row">
          <md-button class="md-success md-hue-1" @click="edit(row.item)">
            Edit 
          </md-button>&nbsp;
          <md-button class="md-danger md-hue-1" @click="del(row.item.nim)">
            Delete
          </md-button>&nbsp;
          <!-- <md-radio v-model="setting_ttd[row.index]" :value=1 @change=setting(row.item.nim,1)>1</md-radio>
          <md-radio v-model="setting_ttd[row.index]" :value=2 @change=setting(row.item.nim,2)>2</md-radio>
          <md-radio v-model="setting_ttd[row.index]" :value=3 @change=setting(row.item.nim,3)>3</md-radio>
          <md-radio v-model="setting_ttd[row.index]" :value=4 @change=setting(row.item.nim,4)>4</md-radio>
          <md-radio v-model="setting_ttd[row.index]" :value=5 @change=setting(row.item.nim,5)>5</md-radio> -->
          &nbsp;
        </template>
      </b-table>
    </div>

    <!-- BAGIAN INI AKAN MENAMPILKAN JUMLAH DATA YANG DI-LOAD -->
    <!-- <div class="col-md-6">
            <p>Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} items</p>
        </div> -->
    <div class="col-md-6">
      <b-pagination
        v-model="meta.current_page"
        :total-rows="meta.total"
        :per-page="meta.per_page"
        align="right"
        @change="changePage"
        aria-controls="dw-datatable"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "data-table-skl",
  props: {
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    meta: {
      required: true,
    },
  },
  data() {
    return {
      sortBy: null,
      sortDesc: false,
      role: 0,
      setting_ttd: [1,2,3],
    };
  },
  watch: {
    sortBy(val) {
      this.$emit("sort", {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc,
      });
    },
    sortDesc(val) {
      this.$emit("sort", {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc,
      });
    },
  },
  methods: {
    showModal() {
      this.$emit("modal");
    },
    edit(data){
      this.$emit('edit',data)
    },
    loadPerPage(val) {
      this.$emit("per_page", this.meta.per_page);
    },
    changePage(val) {
      this.$emit("pagination", val);
    },
    search: _.debounce(function (e) {
      this.$emit("search", e.target.value);
    }, 500),
    setting(id,value){
      this.notifyVue("Setting Saved..!!", true);
    },
    del(email){
      this.notifyVue('Program Studi Berhasil Dihapus...!!',true)
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
    }
  },
  mounted() {
    const user = "user";
    this.role = "role";
  }
};
</script>
