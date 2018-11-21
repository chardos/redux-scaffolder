const changeCase = require('change-case')

exports.renderSwitchStatement = (name, actions) => {
  return `
    export default function ${name}(state = {}, action) {
      switch (action.type) {
        ${renderCases(actions)}
        default:
          return state;
      }
    }
  `
}

exports.renderImports = (name, actions) => {
  const imports = actions
    .map(actionName => changeCase.constantCase(actionName))
    .join(',')

  return `
    import { 
      ${imports}
    } from './actions/${name}'  
  `
}


const renderCases = (actions) => {
  const cases = actions.map((actionName) => {
    const constantName = changeCase.constantCase(actionName);
    return `
      case ${constantName}:
        return state;
    `
  });

  return cases.join('');
}