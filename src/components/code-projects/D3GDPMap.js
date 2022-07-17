import React from "react";
import CodePrjBase from '../../design-system/CodePrjBase'

const D3GDPMap = () => {

  return (
    <CodePrjBase
      title="Visualizing GDP per Capita Using a Choropleth Map"
      imgSrc="/D3GDPMap.png"
      imgAlt="Choropleth map of GDP per capita"
      labels="React,D3"
      cta="View live"
      prjUrl="https://d3playground.netlify.app/"
    >My first project working with D3 in conjunction with React. I utilized and manipulated several year's worth of GDP data from The World Bank and geo methods from D3 to create a map.</CodePrjBase>
  )
}

export default D3GDPMap;