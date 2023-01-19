<template>
  <div class="container mt-5 mb-3">
    
    <div class="row d-flex justify-content-center" id="invoicePage">
      <div class="col-md-8">
        <div class="card">
          <div class="d-flex flex-row justify-content-between p-3">
            <div class="d-flex flex-row" >
              
              <span><img src="../../assets/logo1.png" width="48" /></span>
              <span style="padding-left:10px">
                <p class="font-weight-bold">The Pie Hole</p>
              <p>{{InvoicePreviewobj.attributes.Invoice_id.toUpperCase()}}</p>
              </span>
              
            </div>  
            <div class="dateTime">
              <p>Date: {{new Date(InvoicePreviewobj.attributes.createdAt).toLocaleDateString('en-GB')}}</p>
              <p>Time: {{new Date(InvoicePreviewobj.attributes.createdAt).toLocaleTimeString()}}</p>

            </div>
          </div>
          <hr />
          <div class="table-responsive p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td>To</td>
                  <td>From</td>
                </tr>
                <tr class="content">
                  <td class="font-weight-bold">
                    <b>{{ InvoicePreviewobj.attributes.Customer_name }}</b
                    ><br />
                    Add:
                    {{ InvoicePreviewobj.attributes.Customer_Address.localAddress }},
                    {{ InvoicePreviewobj.attributes.Customer_Address.city }}
                    <br />
                    {{ InvoicePreviewobj.attributes.Customer_Address.state }},
                    {{ InvoicePreviewobj.attributes.Customer_Address.pincode }}
                    <br>
                    Contact: {{InvoicePreviewobj.attributes.Contact_number}}
                  </td>
                  <td class="font-weight-bold">
                    <b>Thinksys Software</b> <br />
                    Attn: Abhishek <br />
                    Add: A-17, Discovery Tower <br />
                    Noida, 123123
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div class="products p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td>Items</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Gst</td>
                  <td class="text-center">Total</td>
                </tr>
                <tr
                  class="content"
                  v-for="(item, index) in InvoicePreviewobj.attributes.Products"
                  :key="index"
                >
                  <td>{{ item.title }}</td>
                  <td>{{ item.quantity }}</td>
                  <td><i class="bi bi-currency-rupee"></i>{{ item.price }}/-</td>
                  <td>{{ item.gst }}%</td>
                  <td class="text-center"><i class="bi bi-currency-rupee"></i>{{ item.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div class="products p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td></td>
                  <td>Payment via</td>
                  <td></td>
                  <td class="text-center">Grand Total</td>
                </tr>
                <tr class="content">
                  <td></td>
                  <td>Cash</td>
                  <td></td>
                  <td class="text-center"><i class="bi bi-currency-rupee"></i>{{ grandTotal }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div class="address p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td>Bank Details</td>
                </tr>
                <tr class="content">
                  <td>
                    Bank Name : ADS BANK <br />
                    Swift Code : ADS1234Q <br />
                    Account Holder : Jelly Pepper <br />
                    Account Number : 5454542WQR <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 w-25 float-end ps-4 pt-3">
      <button class="btn btn-primary  " id="pdf" @click="openPdf($event)">
        <span class="spinner-border" role="status" v-if="flag">
            <span class="sr-only">Loading...</span>
        </span>
        <span v-else>
          <i class="bi bi-download"></i> PDF
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PreviewPage",
  data() {
    return {
      customer_invoice_id: null,
      InvoicePreviewobj: null,
      flag: false,
    };
  },

  computed: {
    grandTotal() {
      let subTotal = 0;
      this.InvoicePreviewobj.attributes.Products.forEach((element) => {
        subTotal += element.total;
      });
      return subTotal;
    },
  },

  beforeMount() {
    this.customer_invoice_id = this.$route.query.id;
    this.getInvoice();
  },

  methods: {
    async getInvoice() {
      this.flag = true;
      await axios
        .get(
          `http://localhost:1337/api/invoices?[filters][Invoice_id][$eq]=${this.customer_invoice_id}`
        )
        .then((res) => {
          this.flag = false;
          this.InvoicePreviewobj = res.data.data[0];
        });
        this.flag = false;
    },

    openPdf(event) {
      console.log(event)
      console.log(html2pdf)
      const invoice = document.getElementById("invoicePage");
      var opt = {
        margin: [1, 0, 0, 0],
        filename: `${this.InvoicePreviewobj.attributes.Customer_name}.pdf`,
        image: { type: "png", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },

      };
      let x = html2pdf().from(invoice).set(opt).save();
      console.log(x)
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap");
body {
  font-family: "Maven Pro", sans-serif;
  background-color: #f12369;
}
hr {
  color: #0000004f;
  margin-top: 5px;
  margin-bottom: 5px;
}
.add td {
  color: #c5c4c4;
  text-transform: uppercase;
  font-size: 12px;
}
.content {
  font-size: 14px;
}

p{
  margin-bottom: 0rem;
}
</style>
