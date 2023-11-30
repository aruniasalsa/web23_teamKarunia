<style>
.row {
    display: flex;
    margin-top: 15px;
}

.w20 {
    width: 20%;
    padding-right: 10px;
    box-sizing: border-box;
}

.w80 {
    width: 80%;
    box-sizing: border-box;
    position: relative;
}

.form-text {
    width: calc(100% - 10px);
    box-sizing: border-box;
    font-size: 14px;
}

.character-count {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    font-size: 14px;
}
</style>


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
                    <h1 class="m0">Add Product</h1>
                    <p class="mt5 mb20 tc-green">Make your product looking good for customers</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Image</label>
                </div>

                <div class="w80 relative">
                    <input class="hidden" type="file" id="upload-file" />
                    <img class="cursor-pointer" src="../../assets/icons/tambahkanFoto.svg" alt=""
                        style="width: 100px; height: auto;" @click="upload_file()">
                </div>
            </div>

            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Product Code</label>

                </div>
                <div class="w80">
                    <input v-model="product_code" @input="handleInput" class="form-text" type="text"
                        placeholder="Product Code" maxLength="8" />
                    <div class="character-count text-bold">
                        | {{ product_code_length }} / 8
                    </div>
                </div>
            </div>
            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Product Name</label>
                </div>
                <div class="w80">
                    <input v-model="product_name" @input="handleInput" class="form-text" type="text"
                        placeholder="Product Name" maxLength="20" />
                    <div class="character-count text">
                        | {{ product_name_length }} / 20
                    </div>
                </div>
            </div>
            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Price">
                </div>
            </div>
            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Product Description</label>
                </div>
                <div class="w80">
                    <textarea placeholder="Masukkan Product Description"></textarea>
                </div>
            </div>
            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Unit</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Unit">
                </div>
            </div>
            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Min Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Masukkan Min Purchase">
                </div>
            </div>
            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Max Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Masukkan Max Purchase">
                </div>
            </div>
            <div class="mt20 row">
                <div class="w20">
                    <label class="form-label">Category</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Pilih Category">
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-product">
                    <button class="bt-submit-green">Add Product</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'add-product',
    methods: {
        upload_file() {
            const input_file = document.querySelector("#upload-file");
            input_file.click();
        },
    },


    name: "add-product",
    data() {
        return {
            product_name: "",
            product_code: "",
            product_code_length: 0,
            product_name_length: 5,
        };
    },
    methods: {
        handleInput() {
            this.product_code_length = this.product_code.length;
            this.product_name_length = this.product_name.length;
        },
    },


};

</script>