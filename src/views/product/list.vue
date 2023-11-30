<template>
    <div>
        <Menu />
        <div class="container">
            <h1 class="m0">Product</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your product details</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-product">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input class="search-field" type="text" id="deskripsi"
                        placeholder="Search by invoice number, name, amount..." />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th style="font-size: 14px;">PRODUCT CODE</th>
                            <th style="font-size: 14px;">PRODUCT NAME</th>
                            <th style="font-size: 14px;">PRICE </th>
                            <th style="font-size: 14px;">STATUS</th>
                            <th style="font-size: 14px;">PRODUCT <br> CATEGORY</th>
                            <th style="font-size: 14px;">UNIT</th>
                            <th style="font-size: 14px;">PRODUCT <br> STATUS</th>
                            <th style="font-size: 14px;">PRODUCT IMAGE</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_product" :key="item.id">
                            <td class="center">{{ item.product_code }}</td>
                            <td class="center">{{ item.product_name }}</td>
                            <td class="center">{{ item.price }}</td>
                            <td class="center"><label class="label-green">{{ item.status }}</label></td>
                            <td class="center">{{ item.product_category }}</td>
                            <td class="center">{{ item.unit }}</td>
                            <td class="center">
                                <div v-if="item.product_status === 'Availability'">
                                    <label class="label-green">Availability</label>
                                </div>
                                <div v-else>
                                    <label class="label-red">Unavailable</label>
                                </div>
                            </td>
                            <td><img :src="item.img" width="100" alt="" style="margin-left: 40px;"></td>

                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-product">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-product">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
    name: 'list-product',
    components: {
        Menu
    },
    data() {
        return {
            list_product: [
                {
                    id: "1",
                    product_code: "kwdwn289",
                    product_name: " Samsung Galaxy Z Fold5",
                    price: "Rp 29.990.000",
                    status: "Publish",
                    product_category: "Electronic",
                    unit: 20,
                    product_status: "Availability",
                    img: "https://images.samsung.com/id/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-exclusive-blue.jpg?imbypass=true"
                },
                {
                    id: "2",
                    product_code: "ijofj090",
                    product_name: "Vivo X80 Pro",
                    price: "Rp 30.000.000",
                    status: "Publish",
                    product_category: "Electronic",
                    unit: 20,
                    product_status: "Availability",
                    img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1657264744321/b353dea0bf63c88fcd5ccf8ca3b2dc72.png"
                },
                {
                    id: "3",
                    product_code: "karunia2710",
                    product_name: "Google Pixel",
                    price: "Rp 29.999.000",
                    status: "Publish",
                    product_category: "Electronic",
                    unit: 20,
                    product_status: "Unavailability",
                    img: "https://lh3.googleusercontent.com/RWLzX3cvA-wb64WCwYc3wY3HvZtnD4qc8_rgHf5oDBaUxGt2DfKtxryV5K7788y_n3x9Rku4UrsfeRV2iuqtZBWfsoYMpqbiXBQ=rw-e365-nu-w525"
                },

            ]
        }
    }
}
</script>