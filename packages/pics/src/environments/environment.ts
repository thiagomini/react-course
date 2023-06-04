// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  unsplash: {
    accessToken: process.env.NX_UNSPLASH_ACCESS_TOKEN ?? '',
  },
};
