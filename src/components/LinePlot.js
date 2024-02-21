import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

function LinePlot({
  data,
  width = 300,
  height = 200,
  margin = { top: 20, right: 20, bottom: 20, left: 40 },
}) {
  const svgRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(data.filter((d) => !isNaN(d))))
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveLinear);

    setIsLoading(true); // Set loading to true before rendering

    svg.selectAll("*").remove(); // Clear previous content

    // Render the y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

    // Render the line
    svg
      .append("path")
      .data([data])
      .attr("key", "lineplot") // Set a key for the data array
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Set loading to false after a delay
    const delay = 0; // Adjust the delay as needed
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [data, width, height, margin]);

  return (
    <div style={{ position: "relative", width, height }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            background: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          Loading...
        </div>
      )}
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  );
}

export default LinePlot;
