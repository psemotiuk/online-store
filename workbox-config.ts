module.exports = {
    globDirectory: './public/',
    globPatterns: ['\*\*/\*.{html,js}'],
    swDest: './src/service-worker.ts',
    clientsClaim: true,
    skipWaiting: true
};
