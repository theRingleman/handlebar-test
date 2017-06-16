// var panelContext = {
//   data: [
//     {
//       adwords: {
//         adwordsId: "928-183-0085",
//         email: "madwire.assets@gmail.com",
//         refreshToken: "success"
//       }
//     },
//     {
//       analytics: {
//         analyticsId: "UA-50819014-1",
//         email: "madwire.assets@gmail.com",
//         refreshToken: "success"
//       }
//     },
//     {
//       bing: {
//         bingId: "41040720",
//       }
//     },
//     {
//       search_console: {
//         searchConsoleId: "https://www.marketing360.com",
//         email: "madwire.assets@gmail.com",
//         refreshToken: "success"
//       }
//     },
//     {
//       facebook: {
//         facebookId: "908081675899740",
//       }
//     },
//     {
//       merchant_center: [
//         "Merchant Center api settings are not configured."
//       ]
//     }
//   ]
// }

var panelContext = {
  adwords: {
    adwordsId: "928-183-0085",
    email: "madwire.assets@gmail.com",
    refreshToken: "success"
  },
  analytics: {
    analyticsId: "UA-50819014-1",
    email: "madwire.assets@gmail.com",
    refreshToken: "success"
  },
  bing: {
    bingId: "41040720",
  },
  search_console: {
    searchConsoleId: "https://www.marketing360.com",
    email: "madwire.assets@gmail.com",
    refreshToken: "success"
  },
  facebook: {
    facebookId: "908081675899740",
  },
  merchant_center: [
    "Merchant Center api settings are not configured."
  ]
}

function checkForError(obj){
  for(var test in obj){
    if(obj.hasOwnProperty('0')){
      return true
    } else {
      return false
    }
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function snakeToTitle(string){
  string =  string.replace(/_/g, ' ')
  return string.split(' ').map(function(word){
    return capitalizeFirstLetter(word)
  }).join(' ')
}

Handlebars.registerHelper('snakeToTitle', function(string){
  return snakeToTitle(string);
});

Handlebars.registerHelper('checkForError', function(obj){
  return checkForError(obj)
})

Handlebars.registerHelper("debug", function(optionalValue) {
  // console.log("Current Context");
  // console.log("====================");
  // console.log(this);
 
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
    console.log("Type Of");
    console.log("====================");
    console.log(typeof optionalValue);
});

// Handlebars.registerPartial('loading', AccountValidation.templates.loadingPartial)
// Handlebars.registerPartial('panel', AccountValidation.templates.panel)
// Handlebars.registerPartial('panelHeading', AccountValidation.templates.panelHeading)
// Handlebars.registerPartial('panelBody', AccountValidation.templates.panelBody)

var html = AccountValidation.Templates.apiSettingsTemplate(panelContext)

$('.handlebar-append').append(html)

