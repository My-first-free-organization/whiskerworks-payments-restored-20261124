export type PaymentStatus = 'requires_payment' | 'processing' | 'succeeded' | 'failed' | 'refunded';

export interface PaymentIntent {
  id: string;
  orderId: string;
  amountMinor: number;
  currency: 'PLN' | 'EUR' | 'USD';
  status: PaymentStatus;
  createdAt: Date;
}
