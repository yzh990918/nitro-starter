import { defineNitroConfig } from 'nitropack/config'
import errorHandler from './error'

export default defineNitroConfig({
  renderer: './renderer',
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
