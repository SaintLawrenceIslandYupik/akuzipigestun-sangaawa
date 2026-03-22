const { generateSW } = require('workbox-build');

generateSW({
  globDirectory: '.',
  globPatterns: [
    '**/*.{css,html,json,js,png,svg,ico}'
  ],
  globIgnores: [
    'node_modules/**/*',
    'package*.json',
    'workbox-config.js',
    'build-sw.js',
    'README.md',
    'sw.js',
    'contact-form-process.php'
  ],
  swDest: 'sw.js',
  mode: 'development',
  maximumFileSizeToCacheInBytes: 25 * 1024 * 1024,
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/,
    /^search$/,
    /^lang$/
  ],
  skipWaiting: true,
  clientsClaim: true
}).then(({count, size, warnings}) => {
  warnings.forEach(console.warn);
  console.log(`${count} files will be precached, totaling ${size} bytes.`);
}).catch(console.error);
