Template.ooChart.onRendered(function (params) {
  var self = this;
  var data = this.data.chartData || {};
  var options = this.data.options || {};
  var ctx = self.firstNode.getContext("2d");
  if (self.data.type) {
    var type = self.data.type;
    if (type === "Line" || type === "Pie" || type === "PolarArea" || type === "Bar" || type === "Doughnut") {
      var chart = new Chart(ctx)[type](data,options);
    } else {
      console.log('%c ooChart error: no such type="'+ type + '" ',  'background: crimson; color: white; padding: 1px 15px 1px 5px;');
    }
  } else {
    console.log('%c ooChart Error: no type="" specified   ',  'background: crimson; color: white; padding: 1px 15px 1px 5px;');
  }

});
