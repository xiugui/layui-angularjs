// default settings. fis3 release
// fis.set('project.files', ['**']);
// fis.set('project.ignore', ['node_modules/**','fis-conf.js']);

fis.hook('module', {
  mode: 'mod'    //这里支持amd和commonJs
});

fis.match("**/*", {
  release: '$0'
})




// fis.match('*.html', {
//   useMap: true
// });
fis.match('src/**/*.less', {
  rExt: '.css', // from .scss to .css
  parser: fis.plugin('less', {
    //fis-parser-less option
  })
});

fis.match('::package', {
  postpackager: [fis.plugin('loader', {
    resourceType: 'mod',
    obtainScript: false,
    allInOne: false,
    useInlineMap: true // 资源映射表内嵌
  })]
});


fis.match('{lib,extendsModule,node_modules}/**.js', {
  isMod: false,
});


fis.match(/^\/src\/(.*)\.(js)$/i, {
  isMod: true,
  id: '$1', //id支持简写，去掉modules和.js后缀中间的部分
})

// Global start
fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end

// default media is `dev`
fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  });

// extends GLOBAL config
fis.media('production');
