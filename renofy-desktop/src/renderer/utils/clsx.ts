/**
 * A simple javascript utility for conditionally joining classNames together.
 *
 * @example
 * const loading = true;
 * clsx('bg-red-500', loading && 'hidden'); // bg-red-500 hidden
 *
 * @example
 * const loading = false;
 * clsx('bg-red-500', loading && 'hidden'); // bg-red-500
 */
export function clsx(...args: unknown[]): string {
  return args.filter((arg) => typeof arg === 'string').join(' ');
}
