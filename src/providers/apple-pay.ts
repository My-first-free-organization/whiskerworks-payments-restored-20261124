export const APPLE_PAY_MERCHANT_ID = 'merchant.com.whiskerworks.shop';

export function isApplePayAvailable(userAgent: string): boolean {
  return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
}
