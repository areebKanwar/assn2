// Load the NSW wildfire map
var vg_1 = "vega_lite.json";
vegaEmbed("#map", vg_1).catch(console.error);

// Load the bar chart
var vg_2 = "bar_chart.json";
vegaEmbed("#barChart", vg_2).catch(console.error);

// Load the scatter plot
var vg_3 = "scatter_plot.json";
vegaEmbed("#scatterPlot", vg_3).catch(console.error);

// Load the scatter plot
var vg_4 = "top_ten_fires_viz.json";
vegaEmbed("#top_ten_fires", vg_4).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);
