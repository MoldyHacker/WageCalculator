<template>
  <v-container class="align-center wide">
    Estimated Paycheck
    <v-list>
      <v-list-item>
        <v-card variant="tonal" class="dense">
          <v-card-subtitle class="dense pr-5 pa-3 flex-lg-fill text-right">Title</v-card-subtitle>
          <v-divider/>
            <v-card-text>
              <v-table density="compact">
                <tbody>
                  <tr
                    v-for="item in calculations"
                    :key="item.name"
                  >
                    <td>{{ item.name }}:</td>
                    <td>${{ item.value }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>

      <v-list-item>
        <v-card variant="tonal" class="dense">
          <v-card-title class=" flex-lg-fill ">Pay Period Information <v-btn density="compact" flat icon="mdi-pen" class="float-right"/></v-card-title>
          <v-divider/>
            <v-card-text>
              <v-table density="compact">
                <tbody>
                  <tr
                    v-for="item in payPeriodInformation"
                    :key="item.name"
                  >
                    <td>{{ item.name }}:</td>
                    <td>{{ item.value }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useCalcStore} from "@/store/calculator";

/*
  state
 */
const calc = useCalcStore
</script>

<script lang="ts">
export default {
  data () {
    return {
      calculations: [
        {
          name: 'Gross Income',
          value: 880,
        },
        {
          name: 'Pre-tax Deductions',
          value: 35,
        },
        {
          name: 'Federal Tax',
          value: 87.41,
        },
        {
          name: 'Social Security Tax',
          value: 52.39,
        },
        {
          name: 'Medicare Tax',
          value: 12.25,
        },
        {
          name: 'State Tax',
          value: 47.21,
        },
        {
          name: 'Post-Tax Deductions',
          value: 0.00,
        },
        {
          name: 'Non-Taxable Income',
          value: 52.39,
        },
      ],
      payPeriodInformation: [
        {
          name: 'Salary or Hourly',
          value: 'Hourly',
        },
        {
          name: 'Pay Frequency',
          value: 'Weekly Paycheck',
        }
      ],
      paymentDetails: [
        {
          name: 'Hours worked in a week',
          value: 40,
        },
        {
          name: 'Pay Rate',
          value: 22,
        }
      ]
    }
  }
}
</script>

<style>
.dense {
  padding: 0;
  margin: 0;
}

.wide {
  /*max-width: 1024px;*/
}

</style>
