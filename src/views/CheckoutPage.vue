<template>
  <div id="Checkout-page">
    <!-- 結帳步驟 Stepper && 綁定互動狀態 -->
    <Stepper :checkout-steps="checkoutSteps" :current-step="currentStep" :total-steps="totalSteps" />
    <!-- 結帳資訊表 CheckoutForm-->
    <CheckoutForm :initial-form-values="formValues" :current-step="currentStep" :total-steps="totalSteps" />
    <!-- 結帳購物車 CheckoutShoppingCart -->
    <CheckoutShoppingCart :initial-shopping-cart="shoppingCart" />
  </div>
</template>

<script>
import Stepper from './../components/Stepper.vue'
import CheckoutForm from './../components/CheckoutForm.vue'
import CheckoutShoppingCart from './../components/CheckoutShoppingCart.vue'


export default {
   components: {
    Stepper,
    CheckoutForm,
    CheckoutShoppingCart,
  },

   data() {
    return {
      //前後綁定現在步驟 & 總步驟
      currentStep: 1,
      totalSteps: 3,
      //Stepper section
      checkoutStep: {
        steps: [
          {
            title: '寄送地址',
            isActive: true,
            isChecked: false,
          },
          {
            title: '運送方式',
            isActive: false,
            isChecked: false,
          },
          {
            title: '付款資訊',
            isActive: false,
            isChecked: false,
          }
        ],
      },
      //ChekcoutForm
      formValues: {
        //步驟1
        customInfo: {
          formId: 1,
          title: "寄送地址",
          salutation: "",
          name: "",
          tel: "",
          email: "",
          city: "",
          address: "",
        },
        //步驟2
        shippingOption: {
          formId: 2,
          title: "運送方式",
          shipping: "standard",
          fee: {
            Standard: 0,
            DHL: 500,
          },
        },
        //步驟3
        paymentInfo: {
          formID: 3,
          title: "付款資訊",
          creditCardHolder: "",
          creditCardNo: "",
          creditCardExpiration: "",
          cvcCcv: "",
        },
      },
      //ShoppingCart
      shoppingCart: {
        product: [
          {
            id: 1,
            name: "破壞補丁修身牛仔褲",
            image: "product_01.jpg",
            price: 3999,
            qty: 1,
          },
          {
            id: 1,
            name: "刷色直筒牛仔褲",
            image: 'product_02.jpg',
            price: 1299,
            qty: 1,
          },
        ],
        shippingFee : 0,
        totalAmount: 5298,
      },
    };
  },
    methods: {
    updateFormProgress() {
      this.checkoutSteps = this.checkoutSteps.map((step, index) => {
        if (index < this.currentStep - 1) {
          return {
            ...step,
            isChecked: true,
          };
        } else if (index === this.currentStep - 1) {
          return {
            ...step,
            isActive: true,
          };
        } else {
          return step;
        }
      });
    },
  },
    updateCurrentStep(newStep) {
      this.currentStep = newStep;
    },
    updateShippingFee(inputValue) {
      this.shoppingCart.shippingFee = this.formValues.shippingOption.fee[inputValue];
    },
    updateShoppingAmount (amount) {
      this.shoppingCart.totalAmount = amount
    },
    handleAfterFormSubmit(formData) {
      console.log("-- 透過 API 傳送資料到後端伺服器 --");
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
    watch: {
    currentStep: {
      handler: function () {
        this.updateFormProgress();
      },
      deep: true,
    },
  },
};
</script>
