const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const XeonBotIncLog = (text, color) => {
	return !color ? chalk.red('◢∆◣') + chalk.yellow(text) : chalk.red('◢∆◣ ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  XeonBotIncLog
}