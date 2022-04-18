// Probably clearer implementation: https://stackoverflow.com/a/34637436
export class Deferred<T> extends Promise<T> {
  public readonly resolve: (value: T | PromiseLike<T>) => void;
  public readonly reject: (reason?: any) => void;
  // Technically `resolve` and `reject` are still accessible
  public readonly promise: Promise<T> = this;

  // Signature from lib.es2015.promise.d.ts
  // Normal usage SHOULD NOT pass an executor
  constructor(executor?: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) {
    // extremely roundabout way of getting resolve/reject
    let res, rej;

    // Need if statement b/c .then calls constructor w/ executor param
    if (!executor)
      executor = (resolve, reject) => {
        res = resolve;
        rej = reject;
      }
    /*else
      // The goal of this was to make .then() work as a Deferred object, but for some reason, .resolve doesn't work.
      // Not priority to fix. Typing is correct (Promise instead of Deferred)
      exec = (resolve, reject) => {
        res = resolve;
        rej = reject;
        executor(resolve, reject);
      }*/

    super(executor);
    // Trust me, the types on res & rej are correct, there was no DRY way of including that info
    this.resolve = res;
    this.reject = rej;

    // This doesn't work, so don't do it
    //const {resolve, reject, promise, ...purePromise} = this;
    //this.promise = purePromise;
  }
}

/** Flatten object shaped like {key: [{key: [{things}]}, {key: [{things}]}]}
 * @returns array that is guaranteed to have at least one item
 */
export function flattenObj<T extends { [Property in K]?: Iterable<T> }, K extends string>(object: T, key: K): Omit<T, K>[] {
  let acc: Omit<T, K>[] = [];
  if (object[key] === undefined) return [object];
  for (const part of object[key]) {
    acc = acc.concat(flattenObj(part, key));
  }
  return acc;
}

export function relativeDate(date: Date): string {
  // TODO: account for time zones
  const daysAgo = (date.getTime() - new Date().setUTCHours(0, 0, 0, 0)) / (1000 * 3600 * 24);
  const formatted = new Intl.RelativeTimeFormat(undefined, {numeric: "auto"}).format(daysAgo, "days");
  if (formatted.split(" ").length === 1)
    return formatted;  // Case "yesterday", "today", "tomorrow", "antier" in spanish, etc
  else if (Math.abs(daysAgo) < 7)
    return date.toLocaleString(undefined, {  timeZone: "UTC", weekday: "long" });
  else
    return date.toLocaleDateString();
}