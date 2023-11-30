<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-product">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Detail Product</h1>
                    <p class="mt5 mb10 tc-green">Your product details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt20">
                <div class="image-container">
                    <img src="https://images.samsung.com/id/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-exclusive-blue.jpg?imbypass=true"
                        style="width: 300px;">
                    <div class="mt0">
                        <p class="detail-title-bold" style="margin-right: 100px; text-decoration: underline ;">
                            Status</p>
                        <p class="detail-title-bold" style="text-decoration: underline;">Product Status</p>

                    </div>
                    <div class="mt0">
                        <label class="label-green" style="margin-right: 100px;">Publish</label>
                        <label class="label-green">Availability</label>
                    </div>

                    <div style="overflow: hidden;">
                        <img src="../../assets/icons/admin.svg" style="float: left; margin-right: 5px; margin-top: 50px;">
                        <p style="float: left; margin-top: 55px; font-size: 10px;">Create by Admin 1</p>
                    </div>

                    <img src="../../assets/icons/admin.svg" style="float: left; margin-right: 5px; margin-top: 5px;">
                    <p style="float: left; margin-top: 10px; font-size: 10px;">Create by Admin 2</p>
                </div>
                <div class="text-container">
                    <p class="text-container" style="font-size: 10px; color: grey;">kwdwn289</p>
                    <h1 class="text-container" style="font-size: 20px;">Samsung Galaxy Z Fold5</h1>
                    <h2 class="text-container" style="font-size: 20px;">Rp 29.990.000</h2>
                    <h3 class="text-container">Product Description</h3>
                    <div class="data">
                        <p class="text-container">- Sesuai dengan namanya, Galaxy Zx Fold5 dapat dilipat, sehingga layarnya
                            yang
                            besar akan tetap muat di saku Anda</p>
                        <p class="text-container">- Buka, tutup, atau tekuk ponsel ke sudut yang pas dengan Flex Hinge yang
                            dirancang ulang.
                        </p>
                        <p class="text-container">- Lebih ramping, lebih ringan, lebih portabel5</p>
                        <p class="text-container">- Pengalaman menonton yang lebih menakjubkan</p>
                        <p class="text-container">- Layar selalu cerah dengan 1750 nit</p>
                        <p class="text-container">- Gaming dahsyat dengan Snapdragon tercepat di Galaxy Z Fold</p>
                        <p class="text-container"></p>
                    </div>
                    <div style="overflow: hidden;">
                        <h3 class="text-container" style="float: left; margin-right: 5px;">Product Category: </h3>
                        <p class="text-container" style="color: grey;">Electronic</p>
                        <h3 class="text-container" style="float: left; margin-right: 5px;">Unit: </h3>
                        <p class="text-container" style="color: grey;">20</p>
                        <h3 class="text-container" style="float: left; margin-right: 5px;">Min Purchases: </h3>
                        <p class="text-container" style="color: grey;">1 Unit</p>
                        <h3 class="text-container" style="float: left; margin-right: 5px;">Max Purchases: </h3>
                        <p class="text-container" style="color: grey;">10 Unit</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null
        }
    },

    created() {
        this.id = this.$route.params.id;
    },
}
</script>