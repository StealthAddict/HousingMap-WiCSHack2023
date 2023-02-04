import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import { govCensus } from "./gov_census";


const topoGeoLink = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json"


// TODO: Find a way to be able to populate map counties with different colors
// based on something like income.
// This is currently using react simple maps.
export default function MapChart() {
  const [data, setData] = useState([]);

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.state))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  function onMapLoad() {
    // csv("./datasets/est21all.csv").then(counties => {
    //   setData(counties);
    // });
    console.log('hello world')
  }


  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={topoGeoLink} onLoad={onMapLoad}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} 
            fill={"blue"} // changes color of fill, can be individualized to county
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

