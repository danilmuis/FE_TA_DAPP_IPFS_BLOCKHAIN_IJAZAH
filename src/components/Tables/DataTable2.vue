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
                <input type="text" class="form-control" @input="search">
            </div>
        </div>
        <div class="col-md-12">
            <b-table striped hover :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty>
                <template v-slot:cell(no)="row">
                    {{row.index+1}}
                </template>
                <template v-slot:cell(check)="row">
                    <b-checkbox v-model="row.item.kaprodi" disabled> Kaprodi </b-checkbox>
                    <b-checkbox v-model="row.item.dekan" disabled> Dekan </b-checkbox>
                    <b-checkbox v-model="row.item.warek" disabled> Wakil Rektor </b-checkbox>
                    <b-checkbox v-model="row.item.rektor" disabled> Rektor </b-checkbox>
                </template>
                <template v-slot:cell(signature)="row">
                    <div class="check" 
                        v-if="(row.item.kaprodi == true && role === 3) || 
                            (row.item.dekan == true && role === 4) || 
                            (row.item.warek == true && role === 5) || 
                            (row.item.rektor == true && role === 6)"
                        >Telah Di Tanda Tangan</div>
                    <md-button class ="md-success md-hue-1" 
                        v-else
                        @click="signature(row.item)">Signature</md-button>
                </template>
            </b-table>
        </div>
       
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
import _ from 'lodash';

export default {
    name : 'data-table2',
    props: {
        items: {
            type: Array,
            required: true
        },
        fields: {
            type: Array,
            required: true
        },
        meta: {
            required: true
        }
    },
    data() {
        return {
            sortBy: null,
            sortDesc: false,
            role: 0
        }
    },
    watch: {
        sortBy(val) {
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        },
        sortDesc(val) {
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        }
    },
    methods: {
        loadPerPage(val) {
            this.$emit('per_page', this.meta.per_page)
        },
        changePage(val) {
            this.$emit('pagination', val)
        },
        signature(val) {
            this.$emit('signature', val)
        },
        search: _.debounce(function (e) {
            this.$emit('search', e.target.value)
        }, 500),
    },
    mounted(){
        const user = this.$session.get('user');
        this.role = user.role;
    }
}
</script>