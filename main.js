const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = {left: 100, right: 50, top: 50, bottom: 50};

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME = d3.select("#vis1") 
                  .append("svg") 
                    .attr("height", FRAME_HEIGHT)   
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

        
d3.csv("data/data.csv").then((data) => {
  
  const MAX_Y2 = d3.max(data, (d) => { return parseInt(d.value); });
          // Note: data read from csv is a string, so you need to
          // cast it to a number if needed 
  
  // Define scale functions that maps our data values 
  // (domain) to pixel values (range)
  const Y_SCALE2 = d3.scaleLinear() 
                    .domain([0, (MAX_Y2 + 10000)]) // add some padding  
                    .range([VIS_HEIGHT,0]);

  
      // Add an axis to the vis   
  FRAME.append("g") 
            .attr("transform", "translate(" + MARGINS.left + 
                  "," + (VIS_HEIGHT + MARGINS.top) + ")") 
            .call(d3.axisLeft(X_SCALE3).ticks(4)) 
              .attr("font-size", '20px'); 

  
  FRAME.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
              .attr("x", MARGINS.left)
              .attr("y", (VIS_HEIGHT + MARGINS.top))
              .attr("height", (d) => {SCALE(d.Value);})
              .attr("width", 50)
              .attr("fill", "blue")
              .attr("class", "bar");

    })
