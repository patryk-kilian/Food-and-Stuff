const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }

  const data = JSON.parse(event.body);

  const { amount } = data;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });

  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };

    return callback(null, response);
  } catch (err) {
    const response = {
      statusCode: 500,
      message: err.message,
    };

    return callback(null, response);
  }
};
