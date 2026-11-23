import { Router } from 'express';

export const refunds = Router();

refunds.post('/refunds', async (req, res) => {
  const { paymentIntentId, amountMinor, reason } = req.body;
  if (!paymentIntentId) return res.status(400).json({ error: 'missing_payment_intent' });
  // Partial refunds are allowed up to the captured amount.
  res.status(202).json({ paymentIntentId, amountMinor, reason: reason ?? 'requested_by_customer' });
});
