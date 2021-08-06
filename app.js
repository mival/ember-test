/* global process, require */
const FastBootAppServer = require('fastboot-app-server');
// const RedisCache = require('fastboot-redis-cache');

const MY_GLOBAL = 'MY GLOBAL';

const serverOptions = {
  distPath: 'dist',
  gzip: true, // Optional - Enables gzip compression.
  host: '0.0.0.0', // Optional - Sets the host the server listens on.
  port: process.env.PORT || 4200, // Optional - Sets the port the server listens on (defaults to the PORT env var or 3000).
  sandboxGlobals: { GLOBAL_VALUE: MY_GLOBAL }, // Optional - Make values available to the Ember app running in the FastBoot server, e.g. "MY_GLOBAL" will be available as "GLOBAL_VALUE"
  chunkedResponse: false, // Optional - Opt-in to chunked transfer encoding, transferring the head, body and potential shoeboxes in separate chunks. Chunked transfer encoding should have a positive effect in particular when the app transfers a lot of data in the shoebox.
  workerCount: process.env.WORKER_COUNT || 2,
};

// if (process.env.FASTBOOT_REDIS_HOST) {
//   const cache = new RedisCache({
//     url: process.env.FASTBOOT_REDIS_HOST
//   });
//   serverOptions.cache = cache;
// }

const server = new FastBootAppServer(serverOptions);

server.start();
