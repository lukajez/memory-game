import { BREAKPOINTS_MIN_PER_DEVICE } from '~static/style-config'

const getScssMediaOnlyRule = ({ minWidth, maxWidth } = {}) =>
  minWidth && maxWidth
    ? `@media only screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`
    : ''

/**
 * @private
 * @immidietlyinvoked
 * @description
 * This anonymous function returns scss media only rules per device
 *
 * @param {Object} BreakpointsMin is map of minimal widths for devices
 *
 * @returns {Object}
 */
const generatedScssMediaOnlyRules = ((BreakpointsMin = BREAKPOINTS_MIN_PER_DEVICE) => {
  const devices = Object.keys(BreakpointsMin)
  const { length } = devices

  return devices.slice(0, length - 1).reduce((createdScssRules, currentDevice, currentIndex) => {
    const minWidth = BreakpointsMin[currentDevice]
    const maxWidth = BreakpointsMin[devices[currentIndex + 1]] - 1

    createdScssRules[currentDevice] = getScssMediaOnlyRule({ minWidth, maxWidth })

    return createdScssRules
  }, {})
})(BREAKPOINTS_MIN_PER_DEVICE)

export default generatedScssMediaOnlyRules
