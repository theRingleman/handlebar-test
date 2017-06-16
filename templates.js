this["AccountValidation"] = this["AccountValidation"] || {};
this["AccountValidation"]["Templates"] = this["AccountValidation"]["Templates"] || {};

Handlebars.registerPartial("loadingGif", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\""
    + container.escapeExpression(((helper = (helper = helpers.account || (depth0 != null ? depth0.account : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"account","hash":{},"data":data}) : helper)))
    + "-loading\"><img src=\"styles/21.gif\" /></span>";
},"useData":true}));

Handlebars.registerPartial("panel", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"col-sm-4\">\n    <div class=\"panel panel-primary\">\n"
    + ((stack1 = container.invokePartial(partials.panelHeading,(data && data.key),{"name":"panelHeading","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.panelBody,depth0,{"name":"panelBody","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n  </div>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("panelBody", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr>\n          <td>"
    + container.escapeExpression((helpers.snakeToTitle || (depth0 && depth0.snakeToTitle) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.key),{"name":"snakeToTitle","hash":{},"data":data}))
    + " Api Status</td>\n          <td>"
    + ((stack1 = container.invokePartial(partials.loadingGif,depth0,{"name":"loadingGif","hash":{"account":(data && data.key)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</td>\n        </tr>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(helpers.checkForError || (depth0 && depth0.checkForError) || helpers.helperMissing).call(alias1,blockParams[0][1],{"name":"checkForError","hash":{},"data":data,"blockParams":blockParams}),{"name":"unless","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.program(6, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams) {
    return "          <tr>\n            <td>"
    + container.escapeExpression(container.lambda(blockParams[1][0], depth0))
    + "</td>\n          </tr>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "          <tr>\n            <td>"
    + alias2(alias1(blockParams[1][1], depth0))
    + "</td>\n            <td>"
    + alias2(alias1(depth0, depth0))
    + "</td>\n          </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"panel-body\">\n  <table class=\"table table-striped\">\n    <tbody>\n"
    + ((stack1 = helpers.unless.call(alias1,(helpers.checkForError || (depth0 && depth0.checkForError) || helpers.helperMissing).call(alias1,depth0,{"name":"checkForError","hash":{},"data":data,"blockParams":blockParams}),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(3, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>";
},"usePartial":true,"useData":true,"useBlockParams":true}));

Handlebars.registerPartial("panelHeading", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"panel-heading\">\n  "
    + container.escapeExpression((helpers.snakeToTitle || (depth0 && depth0.snakeToTitle) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"snakeToTitle","hash":{},"data":data}))
    + "\n</div>";
},"useData":true}));

this["AccountValidation"]["Templates"]["apiSettingsTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.panel,depth0,{"name":"panel","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"api-info-wrapper\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});