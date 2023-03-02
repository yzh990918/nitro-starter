import { defineNitroConfig } from 'nitropack'
import nitroPkg from 'nitropack/package.json'
import errorHandler from './error'

export default defineNitroConfig({
  renderer: './renderer',
  runtimeConfig: {
    nitroVersion: nitroPkg.version
  },
  publicAssets: [
    {
      baseURL: '/_dist',
      dir: './public/_dist',
      maxAge: 60 * 60 * 24 * 365
    }
  ],
  errorHandler: './error',
  devErrorHandler: errorHandler
})
