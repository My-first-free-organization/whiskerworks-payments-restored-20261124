import type { Request, Response } from 'express';
import Stripe from 'stripe';

export function stripeWebhook(req: Request, res: Response) {
  const signature = req.headers['stripe-signature'] as string;
  try {
    const event = Stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET ?? '');
    if (event.type === 'payment_intent.succeeded') {
      // mark order as paid
    }
    res.sendStatus(200);
  } catch {
    res.status(400).send('invalid signature');
  }
}
