const log = require('../utils/log');

function NotificationPlugin(options) {}

NotificationPlugin.prototype.apply = function(compiler) {
	compiler.plugin('compile', () => {
		log({
			title: 'Compiling',
			level: 'info',
			message: 'Building new Bundle ...'
		});
  });

	compiler.plugin('done', (stats) => {
		try {
			if (stats.hasErrors()) {
				log({
				  title: 'Build failed',
					level: 'error',
				  message: 'Check console for more information.'
				});
			} else {
				log({
				  title: 'Build finished',
					level: 'info',
				  message: 'Client running with latest changes.'
				});
			}
		} catch (e) {
			// failed to start. please check the console for more information
			log({
				title: 'Failed to start',
				level: 'error',
				message: 'Please check the console for more information.'
			});
		}
  });
};

module.exports = NotificationPlugin;
