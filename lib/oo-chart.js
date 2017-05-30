import Chart from 'chart.js';

function addData(chart, label, data, backgroundColor) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach(dataset => {
    dataset.data.push(data);
    dataset.backgroundColor.push(backgroundColor);
  });
  chart.update();
}

Template.ooChart.onRendered(function() {
  let chart;
  const options = this.data.options || {};
  const cursor = this.data.cursor;
  const labelField = this.data.labelField || 'label';
  const valueField = this.data.valueField || 'value';
  const colorField = this.data.colorField || 'color';
  const highlightField =
    this.data.highlightField || 'highlight';

  const ctx = this.firstNode.getContext('2d');
  if (this.data.type) {
    let type;
    switch (this.data.type) {
      case 'Pie':
        type = 'pie';
        break;
      case 'PolarArea':
        type = 'polarArea';
        break;
      case 'Doughnut':
        type = 'doughnut';
        break;
    }
    if (typeof type !== 'string') {
      type = 'pie';
    }
    chart = new Chart(ctx, {
      type: type,
      data: {
        datasets: [
          {
            data: [],
            backgroundColor: [],
          },
        ],
        labels: [],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
  } else {
    console.log(
      '%c ooChart Error: no type="" specified   ',
      'background: crimson; color: white; padding: 1px 15px 1px 5px;',
    );
  }

  if (cursor) {
    this.autorun(() => {
      cursor.observe({
        addedAt: function(doc, atIndex, before) {
          // console.log('👽', chart);
          // console.log('👽', doc);
          // console.log('👽', doc[valueField]);
          addData(
            chart,
            doc[labelField],
            doc[valueField],
            doc[colorField],
          );
          // chart.addData({
          //   value: doc[valueField],
          //   color: doc[colorField],
          //   highlight: doc[highlightField],
          //   label: doc[labelField],
          // });
        },
        changedAt: function(newDoc, oldDoc, atIndex) {
          chart.data.datasets[0].data[atIndex] =
            newDoc[valueField];
          chart.update();
        },
      });
    });
  }
});
