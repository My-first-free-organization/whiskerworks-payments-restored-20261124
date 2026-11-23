import Stripe from 'stripe';

const client = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', { apiVersion: '2024-06-20' });

export async function createIntent(amountMinor: number, currency: string, orderId: string) {
  return client.paymentIntents.create({
    amount: amountMinor,
    currency: currency.toLowerCase(),
    metadata: { orderId },
    automatic_payment_methods: { enabled: true },
  });
}
