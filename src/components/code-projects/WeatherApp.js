import React from "react";
import CodePrjBase from '../../baseComponents/CodePrjBase'

const WeatherApp = () => {

  return (
    <CodePrjBase
      title="Animated Weather App"
      imgSrc="/WeatherApp.gif"
      imgAlt="Weather app"
      labels="React,CSS"
      cta="View live"
      prjUrl="https://renas-weather.netlify.app/"
    >I wanted to play around with React themes / styled components and CSS animations so created a weather app that changes styles and animations based on the current weather of the searched location.</CodePrjBase>
  )
}

export default WeatherApp;