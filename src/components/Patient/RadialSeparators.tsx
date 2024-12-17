import React from "react";
import _ from "lodash";

function Separator(props: { turns: any; style: React.CSSProperties | undefined; }) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props: { count: number; style: any; }) {
  const turns = 1 / props.count;
  return _.range(props.count).map(index => (
    <Separator 
      key={index}
      turns={index * turns} 
      style={props.style} 
    />
  ));
}

export default RadialSeparators;
