const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.npmjs.com/browse/depended';


rp(url)
  .then(function(html){
    //success!
    var title = $('.flex flex-row items-end pr3', html)
    console.log(title.children.text());
    // console.log($('.package-list-item__title___sqwj8 fw6 f4 black-90 dib lh-solid ma0 no-underline hover-black', html));
    console.log($('a > h3', html).length);
  })
  .catch(function(err){
    //handle error
  });


//<div class="w-80"><div class="flex flex-row items-end pr3"><a target="_self" href="/package/lodash"><img src="https://static.npmjs.com/26de4581a89de8a6501ce9a3dbb06b85.svg" class="package-list-item__packagePublicIcon___3kPSp dn"><h3 class="package-list-item__title___sqwj8 fw6 f4 black-90 dib lh-solid ma0 no-underline hover-black">lodash</h3></a></div><h4 class="global__a11yOnly___vhlm_">Description</h4><p class="package-list-item__description___1nEpN f5 black-60 mt1 mb0 pv1 no-underline lh-copy">Lodash modular utilities.</p><h4 class="global__a11yOnly___vhlm_">Publisher</h4><div class="package-list-item__publisherRow___13wUH f6 black-80 mt1 mb1 flex-ns db flex-row lh-copy"><div class="flex flex-row pl1 br3"><a target="_self" href="/~jdalton" class="package-list-item__publisherName___3I3K2 pl2 pr2 black-70 fw6 db hover-black no-underline">jdalton</a></div><span title="Wed Sep 12 2018 18:32:16 GMT+0000 (UTC)and Latest Version" class="package-list-item__publisherString___1Obvd black-50">published <!-- -->4.17.11<!-- --> • <!-- -->a month ago</span></div></div>

//<h3 class="package-list-item__title___sqwj8 fw6 f4 black-90 dib lh-solid ma0 no-underline hover-black">lodash</h3>