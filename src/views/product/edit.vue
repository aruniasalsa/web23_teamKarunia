//EDIT PRODUCT
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
                        <img src="../../assets/icons/back.svg" />
                    </router-link>
                </div>
                <div>
                    <h1 class="m0" style="font-size: 20px;">Update Product</h1>
                    <p class="mt5 mb20 tc-green" style="font-size: 14px;">
                        Make your product looking good for customer
                    </p>
                </div>
            </div>
            <hr class="uline-grey" />

            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px;">Product Image</label>
                </div>
                <div class="w80">
                    <img src="https://images.samsung.com/id/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-exclusive-blue.jpg?imbypass=true"
                        alt="Product Image" width="100" />
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Product Code</label>
                </div>
                <div class="w80">
                    <input v-model="product_code" @input="handleInput" class="form-text" type="text"
                        placeholder="Product Code" maxLength="8" />
                    <div class="character-count text-bold">
                        | {{ product_code_length }} / 8
                    </div>
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Product Name</label>
                </div>
                <div class="w80">
                    <input v-model="product_name" @input="handleInput" class="form-text" type="text"
                        placeholder="Product Name" maxLength="20" />
                    <div class="character-count text">
                        | {{ product_name_length }} / 20
                    </div>
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Price</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Input your product price" />
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Product Description</label>
                </div>
                <div class="w80">
                    <textarea class="form-text" placeholder="Input your product description here"
                        style="height: 100px; vertical-align: top;"></textarea>
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Unit</label>
                </div>
                <div class="w80">
                    <input class="form-text" style="font-size: 14px" type="text" placeholder="Input available unit" />
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Min Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" style="font-size: 14px" type="text"
                        placeholder="Input minimum purchase quantity" />
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Max Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" style="font-size: 14px" type="text"
                        placeholder="Input maximum purchase quantity" />
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label" style="font-size: 14px">Category</label>
                </div>
                <div class="w80">
                    <input class="form-text" style="font-size: 14px" type="text" placeholder="Input product category" />
                </div>
            </div>
        </div>



        <div class="flex mt30">
            <router-link to="/list-product">
                <button class="bt-submit-green" style="font-size: 14px; padding: 8px 16px;">Update Product</button>
            </router-link>
        </div>



    </div>
</div></template>

<script>
export default {
    name: "detail-product",
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
