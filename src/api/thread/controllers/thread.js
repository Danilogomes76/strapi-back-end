/**
 * thread controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::thread.thread", ({ strapi }) => ({
	async threadCount(ctx) {
		try {
			const count = await strapi.db.query("api::thread.thread").count();
			return { data: count };
		} catch (err) {
			console.error(err);
			return { error: err.message };
		}
	},
}));
