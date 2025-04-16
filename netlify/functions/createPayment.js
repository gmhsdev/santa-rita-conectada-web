// netlify/functions/createPayment.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { amount, description } = JSON.parse(event.body);
  // Lógica para llamar a Flow sandbox...
  // Por ahora devolvamos un link de prueba:
  return {
    statusCode: 200,
    body: JSON.stringify({ url: 'https://sandbox.flow.cl/app/web/pagarBtn.php?token=TEST' })
  };
};
