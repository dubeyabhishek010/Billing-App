<template>
  <div class="container mt-5 mb-3">
    <div class="m-2">
      <div class="col-md-8">
        <div class="card">
          <div class="d-flex flex-row p-2">
            <img src="https://i.imgur.com/vzlPPh3.png" width="48" />
            <div class="d-flex flex-column">
              <span class="font-weight-bold">Tax Invoice</span>
              <small>INV-001</small>
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
                    <input
                      type="text"
                      name=""
                      placeholder="Customer's Name"
                      id=""
                      v-model="customerName"
                      required
                    />
                    <br />
                    <input
                      type="text"
                      name=""
                      placeholder="Local Address"
                      style="margin-right: 10px"
                      id=""
                      v-model="customerLocalAddress"
                      required
                    />
                    <input
                      type="text"
                      name=""
                      placeholder="Enter your city name"
                      id=""
                      v-model="customerCity"
                      required
                    />
                    <br />
                    <input
                      type="text"
                      name=""
                      placeholder="Enter your state"
                      id=""
                      style="margin-right: 10px"
                      v-model="customerState"
                      required
                    />
                    <input
                      type="text"
                      name=""
                      placeholder="Enter Pincode"
                      id=""
                      v-model="customerPincode"
                      required
                    />
                    <br />
                    <input
                      type="text"
                      name=""
                      placeholder="Enter mobile number"
                      id=""
                      v-model="customerMobileNumber"
                      required
                    />
                  </td>
                  <td class="font-weight-bold">
                    Thinksys <br />
                    Add: A-17, Discovery Tower <br />
                    Noida
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div class="products p-2">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <select
                      name=""
                      id=""
                      v-model="productName"
                      @click="selectedProducts"
                      required
                      style="width: 200px; height: 30px"
                    >
                      <option
                        v-for="item in products"
                        :key="item.id"
                        :value="{
                          title: item.attributes.Title,
                          price: item.attributes.Price,
                          gst: item.attributes.Gst,
                          total_quantity: item.attributes.Total_quantity
                        }"
                       
                      >
                        {{ item.attributes.Title }} {{item.attributes.Total_quantity}}
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="Quantity"
                      v-model="productQuantity"
                      required
                      style="width:150px"
                    />
                  </td>
                  <td>
                    <button class="btn btn-secondary" @click="addProduct()">
                      Add
                    </button>
                  </td>
                  <td v-if="(productArr.length!==0)">
                    <button class="btn btn-info" @click="deleteAll">
                      Delete All
                    </button>
                  </td>
                </tr>
                <tr class="add">
                  <td>Description</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Gst</td>
                  <td class="text-center">Total</td>
                  <td></td>
                </tr>
                <tr
                  class="content"
                  v-for="(item, index) in productArr"
                  :key="index"
                >
                  <td>{{ item.title }}</td>
                  <td>{{ item.quantity }}</td>
                  <td><i class="bi bi-currency-rupee"></i>{{ item.price }}</td>
                  <td>{{ item.gst }}%</td>
                  <td class="text-center">
                    <i class="bi bi-currency-rupee"></i
                    >{{ item.total.toFixed(2) }}
                  </td>
                  <td>
                    <i
                      class="bi bi-x-circle-fill"
                      style="cursor: pointer"
                      @click="deleteItem(item.title, index)"
                    ></i>
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
                  <td></td>
                  <td>Payment via</td>
                  <td></td>
                  <td class="text-center">Total</td>
                </tr>
                <tr class="content">
                  <td></td>
                  <td>Cash</td>
                  <td></td>
                  <td class="text-center"></td>
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
                <tr class="add">
                  <td>Bank Details</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="btn btn-secondary" @click="preview">Preview</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Invoice",
  data() {
    return {
      productName: "",
      productQuantity: null,
      products: [],
      productArr: [],
      gst: null,
      price: null,
      customerName: "",
      customerLocalAddress: "",
      customerCity: "",
      customerState: "",
      customerMobileNumber: "",
    };
  },

  methods: {
    getProducts() {
      axios.get(`http://localhost:1337/api/products`).then((res) => {
        console.log(res.data.data);
        this.products = res.data.data;
      });
    },

    addProduct() {
      const flag =
        this.customerName &&
        this.customerLocalAddress &&
        this.customerCity &&
        this.customerState &&
        this.customerPincode &&
        this.productName &&
        this.productQuantity;
      const GST = (this.productName.price * this.productName.gst) / 100;

      const total = (this.productName.price + GST) * this.productQuantity;
      let productObj = {
        ...this.productName,
        quantity: this.productQuantity,
        total: total,
      };
      this.productArr.forEach((product, index) => {
        if (this.productName.title === product.title) {
          console.log(index);
          this.productArr.splice(index, 1);
        }
      });
      console.log(this.productArr);
      if (!flag) {
        alert("Please fill all the required fields");
      } else {
        this.productArr.push(productObj);
      }
      this.productName = "";
      this.productQuantity = null;

      
    },

    async preview() {
      await axios
        .post(`http://localhost:1337/api/invoices`, {
          data: {
            Customer_Address: {
              localAddress: this.customerLocalAddress,
              city: this.customerCity,
              state: this.customerState,
              pincode: this.customerPincode,
            },
            Products: this.productArr,
            Customer_name: this.customerName,
            Invoice_id:
              "TPH" +
              this.customerName.substring(0, 3) +
              (Math.floor(Math.random() * 999) + 100),
            Contact_number: this.customerMobileNumber,
          },
        })
        .then((res) => {
          console.log(res.data.data.attributes.Invoice_id);
          this.$router.push({
            path: "/previewpage",
            query: { id: res.data.data.attributes.Invoice_id },
          });
        });
    },

    deleteItem(val, index) {
      this.productArr.splice(index, 1);
    },

    deleteAll() {
      if (this.productArr.length !== 0) {
        console.log("delete all");
        this.productArr.length = 0;
      }
    },

    selectOpt(event){
      console.log(event.target)
    }
  },

  mounted() {
    this.getProducts();
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

td > input {
  margin-bottom: 10px;
}
</style>
