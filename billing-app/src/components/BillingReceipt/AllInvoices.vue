<template>
  <div class="card card p-5" style="width: 100%">
    <div class="col-12 d-flex justify-content-between w-100 mb-2">
      <div class="dataTable-dropdown">
        <label
          ><select
            id="dropdown"
            class="dataTable-selector p-2 px-3"
            v-model="countItems"
           
          >
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          entries per page</label
        >
      </div>
      <form
        class="searchField d-flex"
        @submit.prevent="filteredInvoices()"
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          v-model="searchedInvoices"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <table class="table table-bordered data-table2" style="min-width: 100%">
      <thead>
        <tr style="color: white; background-color: black; text-align: center">
          <th>Invoice id</th>
          <th>Name.</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in allInvoices"
          :key="index"
          @click="clickList(item.attributes.Invoice_id)"
          class="highlight"
        >
          <td>{{ item.attributes.Invoice_id }}</td>
          <td>{{ item.attributes.Customer_name }}</td>
          <td>{{ item.attributes.Contact_number }}</td>
          <td>
            {{ item.attributes.Customer_Address.city }},
            {{ item.attributes.Customer_Address.state }}
          </td>
          <td>
            {{
              new Date(item.attributes.createdAt).toLocaleDateString("en-GB")
            }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- pagination -->
    <ul class="pagination d-flex justify-content-end">
      <button :class="(currentPage<=1)? 'disabled page-item page-link' : 'page-item page-link'" @click="arrowClick('left')" >
          <span aria-hidden="true">&laquo;</span>
      </button>
      <button class="page-item page-link" v-for="item in pageCount" :key="item" @click="pageClick(item)">
       {{item}}
      </button>
     
      <button :class="(currentPage>=pageCount)? 'page-item page-link disabled' : 'page-item page-link'" @click="arrowClick('right')" >
          <span aria-hidden="true">&raquo;</span>
      </button>
    </ul>
    <!-- pagination -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllInvoices",
  data() {
    return {
      allInvoices: [],
      searchedInvoices: "",
      countItems: 5,
      length: "",
      pageCount: "",
      currentPage: 1,
    };
  },
  watch:{
       countItems(){
        this.filteredInvoices()
       },
       currentPage(){
        this.filteredInvoices()
       }
     },
  methods: {
    clickList(val) {
      console.log("Hello");
      this.$router.push({ path: "/previewpage", query: { id: val } });
    },
    
    async filteredInvoices() {
      // event.preventDefault();
      if (this.searchedInvoices !== "" ) {
      await axios
        .get(
          `http://localhost:1337/api/invoices?populate=*&[filters][$or][0][Invoice_id][$contains]=${this.searchedInvoices}&[filters][$or][1][Contact_number][$eq]=${this.searchedInvoices}&[filters][$or][2][Customer_name][$contains]=${this.searchedInvoices}`
        )
        .then((res) => {
          this.allInvoices = res.data.data;
          console.log(this.allInvoices);
          this.searchedInvoices = ''
        });
    } else {
      await axios.get(`http://localhost:1337/api/invoices?populate=*&pagination[pageSize]=${this.countItems}&pagination[page]=${this.currentPage}`).then((res) => {
        this.allInvoices = res.data.data;
        this.pageCount = res.data.meta.pagination.pageCount
        console.log(this.allInvoices);

      });
    }
    },

    pageClick(val){
      this.currentPage = val
    },

    arrowClick(val){
      if(val === 'left' && this.currentPage>1){
        console.log('left clicked')
        this.currentPage --
      }
      else{
        if(val === 'right' && this.currentPage<this.pageCount){
          console.log('right clicked')
          this.currentPage ++
        }
      }
    }
  },

mounted() {
  this.filteredInvoices()
  },
};
</script>

<style scoped>
td {
  border: none !important;
}
tbody tr:hover td {
  background-color: aliceblue;
  cursor: pointer;
  /* box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%)); */
  transform: scale(1);
}

select::after {
  content: "" !important;
}
.pagination {
  --bs-pagination-focus-bg: #dee2e6;
  --bs-pagination-focus-box-shadow: white;
}
.page-iten active {
  background: skyblue !important;
}

/* .disabled{
  pointer-events: none;
  color: red;
  opacity: .6;

} */
/* ul{
  cursor: pointer;
} */
</style>
