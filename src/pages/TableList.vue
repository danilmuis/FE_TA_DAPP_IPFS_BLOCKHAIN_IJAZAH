<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title" @click="downloadAsync">Simple Table</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div
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
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";
import { getFile } from "./services";
import { saveAs } from 'file-saver';
export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  methods: {
    downloadFile(){
      getFile(this.hash)
        .then(async response =>{
          console.log(response);
          var blob = await new Blob([response], {type: 'application/pdf'});
          console.log(blob);
          saveAs(blob,"Ijazahmu.pdf")
        })
        .catch(err =>{
          alert(err);
        })
    },
    async downloadAsync(){
      for await (const file of this.ipfs.get(this.hash)) {

        if (!file.content) continue;

        const content = [];
        for await (const chunk of file.content) {
          content.push(chunk);
        }
        

        let length = 0;
        content.forEach(item => {
          length += item.length;
        });

        // Create a new array with total length and merge all source arrays.
        let mergedArray = new Uint8Array(length);
        let offset = 0;
        content.forEach(item => {
          mergedArray.set(item, offset);
          offset += item.length;
        });

        // Should print an array with length 90788 (5x 16384 + 8868 your source arrays)
        console.log(mergedArray);
        var blob = await new Blob([mergedArray], {type: 'application/pdf'});
        saveAs(blob,new Date()+".pdf");
      }
    }
  },
  mounted() {
    //this.downloadFile();
    
    const ipfsClient = require('ipfs-http-client')
    this.ipfs = ipfsClient(process.env.VUE_APP_ENDPOINT_IPFS);
  },
  data(){
    return { 
      hash : "QmaGA5iJ3Qs8Hr3kTJ1bg6XYC6NLp56GmbrSFMarE2o9oG",
      ipfs : null,
    }
  }

};
</script>
