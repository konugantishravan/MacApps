
$(function(){
  var dataSource = new kendo.data.DataSource({
  data: [ { name: "Jane Doe" }, { name: "John Doe" }],
  transport: {
    read:  {
      url: "https://openstates.org/api/v1/metadata/",
      dataType: "jsonp" // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
    }
  }
});
$("#listView").kendoListView({
     dataSource: dataSource,
     template: "<div>#:name#</div>",
     autoBind: false
 });
dataSource.read();
});
