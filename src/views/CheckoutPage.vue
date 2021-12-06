<template>
  <div id="Checkout-page">
    <!-- 結帳步驟 Stepper -->
    <Stepper />
    <!-- 結帳資訊表 CheckoutForm-->
    <CheckoutForm />
    <!-- 結帳購物車 CheckoutShoppingCart -->
    <CheckoutShoppingCart />
  </div>
</template>

<script>
import Stepper from './../components/Stepper.vue'
import CheckoutForm from './../CheckoutForm.vue'
import CheckoutShoppingCart from './../components/CheckoutShoppingCart.vue'


export default {
    components: {
    Stepper,
    CheckoutForm,
    CheckoutShoppingCart,
  },

   data() {
    return {
      formValues: {
        customInfo: {
          title: "寄送地址",
          salutation: "Mr",
          name: "",
          tel: "",
          email: "",
          city: "",
          address: "",
        },
        shippingOption: {
          title: "運送方式",
          shipping: "",
          fee: {
            standard: 0,
            dhl: 500,
          },
        },
        paymentInfo: {
          title: "付款資訊",
          creditCardHolder: "",
          creditCardNo: "",
          creditCardExpiration: "",
          cvcCcv: "",
        },
      },
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
        totalSteps: 3,
        currentStep: 1,
      },
      shoppingCart: {
        product : [
          {
            id: 1,
            name: '破壞補丁修身牛仔褲',
            image: 'product_01.jpg',
            price: 3999,
            qty: 1
          },
          {
            id: 1,
            name: '刷色直筒牛仔褲',
            image: 'product_02.jpg',
            price: 3999,
            qty: 1
          },
        ],
        shippingFee : 0,
        totalAmount: -1,
      }
    };
  },
};
</script>
