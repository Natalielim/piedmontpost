var stripe = Stripe('pk_test_lmInY2xqjlYr8Kg5EwkQ3WD0');

stripe.redirectToCheckout({
  items: [
    // Replace with the ID of your SKU
    {sku: 'sku_123', quantity: 1}
  ],
  successUrl: 'https://your-website.com/success',
  cancelUrl: 'https://your-website.com/canceled',
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});
