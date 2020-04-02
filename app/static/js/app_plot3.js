//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_helmet.json'
d3.json(path).then(function(data){
    
    var helmetUse = data.map(d=>d.REST_USE);
    var accident = data.map(d=>d.PER_TYP);
        console.log(helmetUse)

        var data1 = {
          type: 'bar',
          width: 0.2,
          x: helmetUse,
          y: accident,
          marker:{color: 'rgb(127,204,182)',
          },
          // mode: 'lines+markers',
          transforms: [{
           type: 'aggregate',
           groups: helmetUse,
           aggregations: [
              {target: 'y', func: 'sum', enabled: true},
      ]
    }]
  };

  // Define layout
  var layout = {

    title:{text:"<b>Number of Fatalities vs. Helmet Use</b>",
    font:{
    color: 'black',
    size: 28,
    // family: 'Old Standard TT, serif',
    }
  },
  size: 40,
      
    yaxis: {
    title: {text: "<b>Number of Fatalities</b>",
    zerolinecolor:"green",
    font:{
    color: 'green',
    size: 26,
    }
    },

    gridcolor:"lightgreen",
    tickfont: {
    // family: 'Old Standard TT, serif',
    size: 16,
    color: 'green',
      }
    },

    xaxis: {
    // outlinecolor:"green",
    title:{text: "",
    font:{
    color: 'green',
    size: 25,
      }
    },
    tickfont: {
    // family: 'Old Standard TT, serif',
    size: 28,
    color: 'darkgreen',
      }
    },
  plot_bgcolor: "white",
  paper_bgcolor:"white",

};

// End Layout



  var traces = [data1]
  Plotly.newPlot("plot", traces, layout);
}); 