//initialise tabletop.js
function init() {
  Papa.parse(sheetID, {
    download: true,
    header: true,
    complete: function(results) {
      $.when(replaceKeys(results)).then(createContent(results));
      }
  });
}

//initialise tabletop
init();

//apply data to templates
function createContent(results, templateNum) {
  $(document).ready(function() {
    var data = results.data;
    //iterate through templates
    for (i = 0; i < templateList.length; i++) {
      let source = $(templateList[i][0]).html();
      let template = Handlebars.compile(source);
      let html = template(data);
      //write data into template
      $(templateList[i][1]).append(html);
    }

      contentLoaded();
  });
}

//FORMATING FUNCTIONS
//format keys: remove spaces & lowercase
function replaceKeys(object) {
  Object.keys(object).forEach(function(key) {
    var newKey = key.replace(/\s+/g, '').toLowerCase();
    if (object[key] && typeof object[key] === 'object') {
      replaceKeys(object[key]);
    }
    if (key !== newKey) {
      object[newKey] = object[key];
      delete object[key];
    }
  });
}
