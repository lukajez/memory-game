const path = require('path') // NOSONAR

/**
 * @private
 * @readonly
 *
 * @description
 * Map of aliases and paths to coresponding modules path depends on this file location
 *
 * This map is used as an param for function which resolve this paths and create map
 * which is later used in webpack.config.js
 */
const ALIASES_MAP = Object.freeze({
  '~containers': '../src/containers',
  '~components': '../src/components',
  '~styled-components': '../src/components/styled-components',
  '~helpers': '../src/helpers',
  '~hooks': '../src/hooks',
  '~routes': '../src/router/routes',
  '~constants': '../src/constants/Memorize.constants',
  '~utilities': '../src/utilities',
  '~service': '../src/service',
  '~store': '../src/store',
  '~actions': '../src/store/Memorize.actions',
  '~static': '../src/static',
  '~icons': '../src/static/icons',
  '~images': '../src/static/images',
  '~videos': '../src/static/videos',
  '~router': '../src/router'
})

/**
 * Immediately invoked anonymous function which will return map of aliases with resolved paths
 * so it can be used in webpack.config.js file in resolve: { alias: ...aliases }
 *
 * @HindleyMilner procitati o ovim likovima
 *
 * @pure
 * @param {Object} aliasesMap will be probably equal to ALIASES_MAP, specified in upper scope
 * @returns {Object} map of aliases and resolved paths to modules
 */
const aliases = ((aliasesMap = {}) => {
  const resolvedAliases = {}

  for (const key in aliasesMap) {
    // Restrict what this loop acts on by testing each property.
    if (Object.hasOwnProperty.call(aliasesMap, key)) {
      // get path to module from specified aliasesMap
      const pathToModule = aliasesMap[key]

      // resolve path and attach it to coresponding alias
      resolvedAliases[key] = path.resolve(__dirname, pathToModule)
    }
  }

  return resolvedAliases
})(ALIASES_MAP)

module.exports = aliases
