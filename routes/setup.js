var stripe = require("stripe")(SECRET_KEY);

const product = stripe.products.create({
  name: 'My SaaS Platform',
  type: 'service',
});
