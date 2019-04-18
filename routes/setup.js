var stripe = require("stripe")("sk_test_fZYYEKHgbd1BrdtAaXFAMWQG");

const product = stripe.products.create({
  name: 'My SaaS Platform',
  type: 'service',
});
