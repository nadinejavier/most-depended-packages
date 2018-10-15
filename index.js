'use strict'
const axios = require('axios');
const tb = require('tarball-extract');
const mostDependedPackages = require('./mostDependedPackages')

module.exports = downloadPackages

async function downloadPackages (count, callback) {
  const packages = await mostDependedPackages(count)
  
  packages.forEach(function(p){
    //tarball-extract is a library that can take the tarball url and export it to a directory
    tb.extractTarballDownload(p.tarball , `/Users/nadinejavier/Downloads/${p.name}-${p.latestVersion}.tgz`, `./packages/${p.name}`,
    {}, 
    function(err, result) {
      console.log(err, result)
    })
  }); 
}

downloadPackages(3);

