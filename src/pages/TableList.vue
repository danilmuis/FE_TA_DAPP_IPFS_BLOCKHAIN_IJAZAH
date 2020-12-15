<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">IPFS Ijazah dan Transkrip</h4>
            <p class="category">Klik Download untuk mengunduh file</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
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

<script>
import { SimpleTable } from "@/components";
import { getFile } from "./services";
import { saveAs } from 'file-saver';
export default {
  components: {
    SimpleTable
  },
  methods: {
    
    
  },
  mounted() {
    
    
  },
  data(){
    return { 
      hash : "QmaGA5iJ3Qs8Hr3kTJ1bg6XYC6NLp56GmbrSFMarE2o9oG",
      ipfs : null,
    }
  }

};
</script>
