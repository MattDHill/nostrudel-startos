import { sdk } from './sdk'
import { uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.host.multi(effects, 'ui-multi')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
  })
  const ui = sdk.createInterface(effects, {
    name: 'Web UI',
    id: 'ui',
    description: 'The noStrudel web app',
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    search: {},
  })

  const uiReceipt = await uiMultiOrigin.export([ui])

  return [uiReceipt]
})
