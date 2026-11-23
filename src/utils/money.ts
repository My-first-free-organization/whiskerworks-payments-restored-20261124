const MINOR_UNITS: Record<string, number> = { PLN: 2, EUR: 2, USD: 2, JPY: 0 };

export function toMinor(amount: number, currency: string): number {
  const digits = MINOR_UNITS[currency] ?? 2;
  // Round half away from zero to avoid 0.01 drift on PLN and EUR totals.
  return Math.sign(amount) * Math.round(Math.abs(amount) * 10 ** digits);
}
