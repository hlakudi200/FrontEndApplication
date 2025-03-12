"use client";
import React from "react";

interface Iprops {
  name: string;
  category: string;
  protein: number;
  carbs: number;
  sugar: number;
  fat: number;
}

const Food = (props: Iprops) => {
  return (
    <div
      style={{
        lineHeight: 2,
        borderRadius: 15,
        background: "rgb(33,32,32)",
        paddingLeft: 20,
        paddingTop: 5,
        width: "90%",
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        marginTop:20,
      }}
    >
      <div>
        <h3 style={{color:"red"}}>{props.name}</h3>
        <p style={{ color: "red" }}>{props.category}</p>
      </div>
      <div></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
        }}
      >
        <div style={{ marginRight: 200 }}>
          <p>Protein</p>
          <p>Carbs</p>
          <p>Sugar</p>
          <p>Fat</p>
        </div>
        <div>
          <p>{props.protein}</p>
          <p>{props.carbs}</p>
          <p>{props.sugar}</p>
          <p>{props.fat}</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
