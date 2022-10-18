import * as Sentry from "@sentry/browser"

export const initSentry = (): typeof Sentry => {
  Sentry.init({
    release: RELEASE_VERSION,
    dsn:
      "https://eee58f41dda54d2b814296e12dced4b7@o48788.ingest.sentry.io/5304953"
  })
  return Sentry
}
