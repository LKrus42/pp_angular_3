// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authApiUrl:
    'http://kong.fte3.10.97.145.65.nip.io/sso/auth/realms/mts/protocol/openid-connect/token',
  resourceInventoryApiUrl:
    'http://kong.fte3.10.97.145.65.nip.io/auth/resource/inventory/item',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
