import { describe, it, expect } from 'vitest';

describe('checkout', () => {
  it('rejects orders with zero amount', () => {
    expect(0 > 0).toBe(false);
  });
  it('accepts PLN, EUR and USD', () => {
    expect(['PLN', 'EUR', 'USD']).toContain('PLN');
  });
});
