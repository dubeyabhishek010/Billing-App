<template>
  <div class="container-xl p-5">
    <div class="row justify-content-between align-items-center mb-4">
      <div class="col">
        <h1 class="">Dashboard</h1>
        <div class="text-muted">Sales overview &amp; summary</div>
      </div>
      <!-- <div class="col-12 col-md-auto">
        <div class="d-flex flex-column flex-sm-row gap-3">
          <select class="mw-50 mb-2 mb-md-0" outlined="" label="View by">
            <option
              selected=""
              value="0"
              option=""
              tabindex="0"
              aria-disabled="false"
              role="option"
              aria-selected="true"
              >Order type</option
            >
            <option
              value="1"
              option=""
              tabindex="-1"
              aria-disabled="false"
              role="option"
              >Segment</option
            >
            <option
              value="2"
              option=""
              tabindex="-1"
              aria-disabled="false"
              role="option"
              >Customer</option
            >
          </select>
          <select class="mw-50" outlined="" label="Sales from">
            <option
              value="0"
              option=""
              tabindex="0"
              aria-disabled="false"
              role="option"
              >Last 7 days</option
            >
            <option
              value="1"
              option=""
              tabindex="-1"
              aria-disabled="false"
              role="option"
              >Last 30 days</option
            >
            <option
              value="2"
              option=""
              tabindex="-1"
              aria-disabled="false"
              role="option"
              >Last month</option
            >
            <option
              selected=""
              value="3"
              option=""
              tabindex="-1"
              aria-disabled="false"
              role="option"
              aria-selected="true"
              >Last year</option
            >
          </select>
        </div>
      </div> -->
    </div>
    <!-- Colored status cards-->
    <div class="row gx-5">
      <div class="col-xxl-4 col-md-6 mb-5">
        <div class="card card-raised bg-info text-white">
          <div class="card-body px-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="me-2">
                <div class="display-6 text-white">101.1K</div>
                <div class="card-text">Customers</div>
              </div>
              <div class="">
                <i class="bi bi-person-circle" style="font-size: 50px"></i>
              </div>
            </div>
            <div class="card-text">
              <div class="d-inline-flex align-items-center">
                <i class="bi bi-arrow-up-short"></i>
                <div class="caption fw-500 me-2">3%</div>
                <div class="caption">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-md-6 mb-5">
        <div class="card card-raised bg-secondary text-white">
          <div class="card-body px-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="me-2">
                <div class="display-6 text-white">101.1K</div>
                <div class="card-text">Products</div>
              </div>
              <div class="">
                <i class="bi bi-bag-check" style="font-size: 50px"></i>
              </div>
            </div>
            <div class="card-text">
              <div class="d-inline-flex align-items-center">
                <i class="bi bi-arrow-up-short"></i>
                <div class="caption fw-500 me-2">3%</div>
                <div class="caption">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-md-6 mb-5">
        <div class="card card-raised bg-warning text-white">
          <div class="card-body px-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="me-2">
                <div class="display-6 text-white">101.1K</div>
                <div class="card-text">Invoices</div>
              </div>
              <div class="">
                <i class="bi bi-receipt-cutoff" style="font-size: 50px"></i>
              </div>
            </div>
            <div class="card-text">
              <div class="d-inline-flex align-items-center">
                <i class="bi bi-arrow-up-short"></i>
                <div class="caption fw-500 me-2">3%</div>
                <div class="caption">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row gx-5">
      <!-- Revenue breakdown chart example-->
      <div class="col-lg-8 mb-5">
        <div class="card card-raised h-100">
          <div class="card-header bg-primary text-white px-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="me-4">
                <h4 class="card-title text-white mb-0">Revenue Breakdown</h4>
                <div class="card-subtitle">Compared to previous year</div>
              </div>
              <div class="d-flex gap-2 me-n2">
                <button
                  class="btn btn-lg btn-text-white btn-icon mdc-ripple-upgraded"
                  type="button"
                >
                  <i class="material-icons">download</i>
                </button>
                <button
                  class="btn btn-lg btn-text-white btn-icon mdc-ripple-upgraded"
                  type="button"
                >
                  <i class="material-icons">print</i>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body p-4">
            <div class="row gx-4">
              <div class="col-12 col-xxl-2">
                <div
                  class="d-flex flex-column flex-md-row flex-xxl-column align-items-center align-items-xl-start justify-content-between"
                >
                  <div class="mb-4 text-center text-md-start">
                    <div class="text-xs font-monospace text-muted mb-1">
                      Actual Revenue
                    </div>
                    <div class="display-8">$59,482</div>
                  </div>
                  <div class="mb-4 text-center text-md-start">
                    <div class="text-xs font-monospace text-muted mb-1">
                      Revenue Target
                    </div>
                    <div class="display-8">$50,000</div>
                  </div>
                  <div class="mb-4 text-center text-md-start">
                    <div class="text-xs font-monospace text-muted mb-1">
                      Goal
                    </div>
                    <div class="display-8 text-success">119%</div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xxl-10">
                <canvas
                  id="chBar"
                  width="633"
                  height="316"
                  style="
                    display: block;
                    box-sizing: border-box;
                    width: 633.766px;
                    height: 316px;
                  "
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Segments pie chart example-->
      <div class="col-lg-4 mb-5">
        <div class="card card-raised h-100">
          <div class="card-header bg-primary text-white px-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="me-4">
                <h4 class="card-title text-white mb-0">Segments</h4>
                <div class="card-subtitle">Revenue sources</div>
              </div>
            </div>
          </div>
          <div class="card-body p-4">
            <div
              class="d-flex h-100 w-100 align-items-center justify-content-center"
            >
              <div class="w-100" style="max-width: 20rem">
                <canvas
                  id="myPieChart"
                  width="320"
                  height="320"
                  style="
                    display: block;
                    box-sizing: border-box;
                    width: 320px;
                    height: 320px;
                  "
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row gx-5">
      <!-- Privacy suggestions illustrated card-->
      <div class="col-xl-6 mb-5">
        <div class="card card-raised h-100">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between">
              <div class="me-4">
                <h2 class="card-title mb-0">Privacy Suggestions</h2>
                <p class="card-text">
                  Take our privacy checkup to choose which settings are right
                  for you.
                </p>
              </div>
              <img
                src="../../assets/security.svg"
                alt="..."
                style="height: 6rem"
              />
            </div>
          </div>
          <div
            class="card-footer bg-transparent position-relative ripple-gray px-4 mdc-ripple-upgraded"
          >
            <a class="stretched-link text-decoration-none" href="#!"
              >Review suggestions (4)</a
            >
          </div>
        </div>
      </div>
      <!-- Account storage illustrated card-->
      <div class="col-xl-6 mb-5">
        <div class="card card-raised h-100">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between">
              <div class="me-4">
                <h2 class="card-title mb-0">Account Storage</h2>
                <p class="card-text">
                  Your account storage is shared across all devices.
                </p>
                <div class="progress mb-2" style="height: 0.25rem">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 33%"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="30"
                  ></div>
                </div>
                <div class="card-text">10 GB of 30 GB used</div>
              </div>
              <img
                src="../../assets/cloud.svg"
                alt="..."
                style="height: 6rem"
              />
            </div>
          </div>
          <div
            class="card-footer bg-transparent position-relative ripple-gray px-4 mdc-ripple-upgraded"
          >
            <a class="stretched-link text-decoration-none" href="#!"
              >Manage storage</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="card card-raised">
      <div class="card-header bg-primary text-white px-4">
        <div class="d-flex justify-content-between align-items-center">
          <div class="me-4">
            <h4 class="card-title text-white mb-0">Orders</h4>
            <div class="card-subtitle">Details and history</div>
          </div>
          <div class="d-flex gap-2">
            <button
              class="btn btn-lg btn-text-white btn-icon mdc-ripple-upgraded"
              type="button"
            >
              <i class="material-icons">download</i>
            </button>
            <button
              class="btn btn-lg btn-text-white btn-icon mdc-ripple-upgraded"
              type="button"
            >
              <i class="material-icons">print</i>
            </button>
          </div>
        </div>
      </div>
      <div class="card-body p-4">
        <!-- Simple DataTables example-->
        <div
          class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns"
        >
        <AllInvoices />
         
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllInvoices from '@/components/BillingReceipt/AllInvoices.vue'
export default {
  name: "DashboardContent",
  components:{
    AllInvoices
  },

  mounted() {
    var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];
    // Bar Chart
    var chBar = document.getElementById("chBar");
    if (chBar) {
      new Chart(chBar, {
        type: "bar",
        data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [
            {
              data: [589, 445, 483, 503, 689, 692, 634],
              backgroundColor: colors[0],
            },
            // {
            //   data: [639, 465, 493, 478, 589, 632, 674],
            //   backgroundColor: colors[3],
            // },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                barPercentage: 0.4,
                categoryPercentage: 0.5,
              },
            ],
          },
        },
      });
    }

    // Pie chart
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

    new Chart("myPieChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "World Wide Wine Production 2018",
        },
      },
    });
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
</style>
