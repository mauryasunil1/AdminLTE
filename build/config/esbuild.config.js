'use strict'

const esbuild = require('esbuild')
const { getTarget } = require('./getTarget')

const pkg = require('../../package')
const year = new Date().getFullYear()
const banner = `/*!
 * AdminLTE v${pkg.version} (${pkg.homepage})
 * Copyright 2014-${year} ${pkg.author}
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */`

esbuild.build({
  entryPoints: ['build/ts/adminlte.ts'],
  banner: {
    js: banner
  },
  bundle: true,
  color: true,
  format: 'iife',
  sourcemap: true,
  target: getTarget(['es', 'chrome', 'edge', 'firefox', 'ios', 'safari']),
  outfile: 'dist/js/adminlte.js'
}).then(
  console.log('build/ts/adminlte.ts is BUILD')
).catch(
  error => console.error(error)
)