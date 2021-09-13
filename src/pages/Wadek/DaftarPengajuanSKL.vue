<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Daftar Seluruh Pengajuan SKL</h4>
            <!-- <p class="category">Klik Download untuk mengunduh file</p> -->
          </md-card-header>
          <md-card-content>
            <!-- <simple-table table-header-color="green"></simple-table> -->
            <!-- <md-button class="md-raised" :class="[ijazah ? 'md-warning' : '']" @click="changeBerkas" >Ijazah </md-button> -->
            <!-- <md-button class="md-raised" :class="[!ijazah ? 'md-warning' : '']" @click="changeBerkas" >Transkrip</md-button> -->
            <div class="md-layout-item md-small-size-100 md-size-40">
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
            </div>
            <data-table-skl
              :items="items"
              :fields="fields"
              :meta="meta"
              @per_page="handlePerPage"
              @pagination="handlePagination"
              @search="handleSearch"
              @sort="handleSort"
              @download="handleDownload"
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
import { DataTableSKL_wadek } from "@/components";
import { getFile } from "../services";
import { saveAs } from "file-saver";
import { getIjazah } from "@/pages/services";
export default {
  components: {
    // SimpleTable
    "data-table-skl": DataTableSKL_wadek,
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
    async handleDownload(hash) {
      for await (const file of this.ipfs.get(hash)) {
        if (!file.content) continue;
        const content = [];
        for await (const chunk of file.content) {
          content.push(chunk);
        }
        let length = 0;
        content.forEach((item) => {
          length += item.length;
        });
        let mergedArray = new Uint8Array(length);
        let offset = 0;
        content.forEach((item) => {
          mergedArray.set(item, offset);
          offset += item.length;
        });
        var blob = await new Blob([mergedArray], { type: "application/pdf" });
        console.log(blob);
        // saveAs(blob, new Date().getTime() + ".pdf");
        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
      }
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
  },
  data() {
    return {
      fields: [
        { key: "no", sortable: false },
        { key: "nim", sortable: true, label: "NIM" },
        { key: "nama", sortable: true, label: "Email" },
        { key: "nomor", sortable: false, label: "Nomor HP" },
        { key: "tanggal", sortable: false, label: "Tanggal Yudisium" },
        { key: "check", sortable: false, label: "Status" },
        { key: "download", sortable: false, label: "Preview Dokumen" },
        { key: "action", sortable: false, label: "Action" },
      ],
      items: [],
      meta: {
        per_page: 10,
        current_page: 1,
        total: 3,
      },
      options: [
        { name: "Pemeriksaan Staff", language: "Semua Status" },
        { name: "Pemeriksaan Wadek", language: "Request SKL baru yg belum mendapatkan persetujuan" },
        {
          name: "SKL Dikirimkan",
          language: "SKL yang sudah di review oleh staff dan sedang di ttd oleh Wadek",
        }
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
