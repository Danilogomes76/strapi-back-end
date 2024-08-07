// @ts-nocheck
module.exports = {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	register(/*{ strapi }*/) {},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	bootstrap({ strapi }) {
		const io = require("socket.io")(strapi.server.httpServer, {
			transports: ["websocket"],
			cors: {
				origin: "http://localhost:7520",
				methods: ["GET", "POST"],
				allowedHeaders: ["my-custom-header"],
				credentials: true,
			},
		});

		strapi.io = io;

		io.on("connection", (socket) => {
			console.log("Client connected");
			socket.on("disconnect", () => {
				console.log("Client disconnected");
			});
		});
	},
};
