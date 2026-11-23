import { Router } from 'express';
import { createIntent } from '../providers/stripe-client';

export const checkout = Router();

checkout.post('/checkout', async (req, res) => {
  const { orderId, amountMinor, currency } = req.body;
  if (!orderId || amountMinor <= 0) return res.status(400).json({ error: 'invalid_order' });
  const intent = await createIntent(amountMinor, currency, orderId);
  res.status(201).json({ clientSecret: intent.client_secret });
});
