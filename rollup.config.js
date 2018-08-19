export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ngx-pica.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ngx-pica',
    globals: {
        '@angular/core': 'ng.core'
    }
}