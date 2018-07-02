const notifier = require('node-notifier');
const colors = require('colors/safe');

const log = function(options) {
  const title = `${options.title.toUpperCase()}`;

  notifier.notify({
    title,
    message: options.message,
  });

  const level = options.level || 'info';
  const msg = `==> ${title} -> ${options.message}`;

  switch (level) {
    case 'warn': console.log(colors.yellow(msg)); break;
    case 'error': console.log(colors.bgRed.white(msg)); break;
    case 'info':
    default: console.log(colors.green(msg));
  }
}

module.exports = log;
