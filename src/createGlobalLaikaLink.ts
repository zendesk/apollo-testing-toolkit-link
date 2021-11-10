import memoize from 'lodash/memoize'
import { DEFAULT_GLOBAL_PROPERTY_NAME } from './constants'
import { Laika } from './laika'
import type { CreateLaikaLinkOptions } from './typedefs'

export const getLaikaSingleton = memoize(
  (
    globalPropertyName: string = DEFAULT_GLOBAL_PROPERTY_NAME,
    startLoggingImmediately: boolean = false,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access,no-multi-assign
    const singleton = ((globalThis as any)[globalPropertyName] = new Laika({
      referenceName: globalPropertyName,
    }))

    if (startLoggingImmediately) {
      singleton.log.startLogging()
    }
    return singleton
  },
)

/**
 * Creates an instance of ApolloLink with intercepting functionality.
 * @param options
 */
export function createGlobalLaikaLink({
  clientName = '__unknown__',
  globalPropertyName,
  startLoggingImmediately = false,
}: CreateLaikaLinkOptions) {
  if (clientName === '__unknown__') {
    throw new Error('LaikaLink: clientName is required')
  }
  const laika = getLaikaSingleton(globalPropertyName, startLoggingImmediately)
  return laika.createLink((operation) => {
    operation.setContext({ clientName })
  })
}
