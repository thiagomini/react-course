export type OneOf<T, K extends keyof T = keyof T> = K extends keyof T
  ? Pick<T, K> & {
      [Key in Exclude<keyof T, K>]?: undefined;
    }
  : never;
