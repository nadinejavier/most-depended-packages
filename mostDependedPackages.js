const rp = require('request-promise');
const $ = require('cheerio');
const registryURL = 'http://registry.npmjs.org/';
const mostDependedURL = 'https://www.npmjs.com/browse/depended';
const axios = require('axios');

module.exports = extractPackages

async function extractPackages(count) {

//Instead of webscraping 'https://www.npmjs.com/browse/depended', for the top 10 most depended packages, I just put the titles in an array.

  const mostDepended = ['lodash', 'request', 'chalk', 'react', 'express', 'commander', 'async', 'moment', 'bluebird', 'debug']
  var promises = [];
  let packages = []


  mostDepended.forEach(function(p){
    promises.push( axios.get(registryURL + p))
  });

  const results = await axios.all(promises)
      results.forEach(function(response){
        var name = response.data.name
        var latestVersion = response.data['dist-tags']['latest']
        //creates array of packages with values that will be used for downloadPackages()
        packages.push({"name": name, "latestVersion": latestVersion, "tarball": `http://registry.npmjs.org/${name}/-/${name}-${latestVersion}.tgz` })
      })
   return packages.splice(0, count);
}




