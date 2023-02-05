import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Annotation, Marker } from "react-simple-maps";
import kaggleIncome from '../data/csvjson_kaggle_income.json'
import { scaleQuantize } from "d3-scale";
import { Tooltip, TooltipWrapper } from 'react-tooltip'
import Overlay from 'react-bootstrap'

// Tooltip not working, no time to troubleshoot
/* Tooltip would include custom info based on particular county
  Including: county name, median household income, median housing price,
  nearby educational institutes.
*/



const topoGeoLink = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json"

export default function MapChart( props ) {

  const [show, setShow] = useState(false);

  const colorScale = scaleQuantize()
    .domain([10000, 100000])
    .range([
      "#1B2F11",
      "#29481A",
      "#375F22",
      "#44772B",
      "#518E33",
      "#5FA53C",
      "#6CBC45",
      "#7FC45C",
      "#91CD73"
  ]);

  function onSelect(){
    setShow(!show);
  }

  return (
    <>
      <ComposableMap projection="geoAlbersUsa" className="geoMap">
        <ZoomableGroup center={[0,0]} zoom={1}>
        <Geographies geography={topoGeoLink}>
          {({ geographies }) => (
            <>
            {geographies.map((geo) => {
              const cur = kaggleIncome.find((s) => s.County.slice(0, -7) === geo.properties.name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.Mean : "#EEE")}
                  stroke="#15312E"
                  id={geo.properties.name}
                />
              );
            })}
            </>
          )
          }
        </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
}

