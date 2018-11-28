const { prettify } = require('../utils');
const addActionsToReduxFile = require('./addActionsToReduxFile');
const generateActionCode = require('../createActionFile/generateActionCode');
const generateReducerCode = require('../createReducerFile/generateReducerCode');
const generateDuckCode = require('../createDuckFile/generateDuckCode');

describe('addActionsToReduxFile()', () => {
  describe('on an action file', () => {
    it('Matches the old snapshot', () => {
      const existingFile = generateActionCode('Zone', ['AddZone'])
      const result = addActionsToReduxFile('Zone', ['RemoveZone'], existingFile)
  
      expect(prettify(result)).toMatchSnapshot()
    })
  })
  describe('on an reducer file', () => {
    it('Matches the old snapshot', () => {
      const existingFile = generateReducerCode('Zone', ['AddZone'])
      const result = addActionsToReduxFile('Zone', ['RemoveZone'], existingFile)
  
      expect(prettify(result)).toMatchSnapshot()
    })
  })
  describe('on an duck file', () => {
    it('Matches the old snapshot', () => {
      const existingFile = generateDuckCode('Zone', ['AddZone'])
      const result = addActionsToReduxFile('Zone', ['RemoveZone'], existingFile)
  
      expect(prettify(result)).toMatchSnapshot()
    })
  })
})
