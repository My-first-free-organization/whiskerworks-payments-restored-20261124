# Payments runbook

## Failed payments spike
1. Check the Stripe status page.
2. Check `payments-errors` dashboard.
3. If the error rate is above 5% for 10 minutes, page the on-call engineer.

## Refund stuck in processing
Retry with the same idempotency key. Never create a second refund.
