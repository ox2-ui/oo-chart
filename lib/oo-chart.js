Template.ooChart.onRendered(function() {
  const self = this;
  const colors = ['#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#27AE60', '#8E44AD', '#F1C40F', '#E67E22', '#E74C3C', '#ECF0F1', '#95A5A6', '#F39C12', '#D35400', '#C0392B', '#BDC3C7', '#7F8C8D'];
  let chart;
  // let
  const options = self.data.options || {};
  const cursor = self.data.cursor;
  const labelField = self.data.labelField || 'label';
  const valueField = self.data.valueField || 'value';
  const colorField = self.data.colorField || 'color';
  const highlightField = self.data.highlightField || 'highlight';

  const ctx = self.firstNode.getContext('2d');
  if (self.data.type) {
    const type = self.data.type;
    if ( type === 'Pie' || type === 'PolarArea' || type === 'Doughnut') {
      // Pass empty data as we manage everything through cursor observer
      chart = new Chart(ctx)[type]([], options);
    } else if (type === 'Line' || type === 'Bar' || type === 'Radar') {
      console.log('%c ooChart error: this type is not supported: "' + type + '" ',  'background: crimson; color: white; padding: 1px 15px 1px 5px;');
    }
  } else {
    console.log('%c ooChart Error: no type="" specified   ',  'background: crimson; color: white; padding: 1px 15px 1px 5px;');
  }

  if (cursor) {
    self.autorun(function() {
      cursor.observe({
        addedAt: function(doc, atIndex, before) {
          chart.addData({
            value: doc[valueField],
            color: doc[colorField],
            highlight: '#C69CBE',
            label: doc[labelField],
          });
        },
        changedAt: function(newDoc, oldDoc, atIndex) {
          chart.segments[atIndex].value = newDoc[valueField];
          chart.update();
        },
        removedAt: function(oldDocument, atIndex) {
          chart.removeData(atIndex);
        },
      });
    });
  }
});
