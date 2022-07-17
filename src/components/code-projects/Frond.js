import React from "react";
import CodePrjBase from '../../design-system/CodePrjBase'

const Frond = () => {

  return (
    <CodePrjBase
      title="Creating a Full-Stack Community App"
      imgSrc="/Frond.png"
      imgAlt="Home page of community app"
      labels="React,Node/Express,Design System"
      cta="View code"
      prjUrl="https://github.com/renakuai/frond-app"
    >I'm currently building out an app idea called Frond with the purpose of helping people build closer connections to the people that they care about. I designed the design system and built out all the components myself in React. I also built out the API using Express / Mongo and created an authentication system utilizing JSON Web Tokens, Passport, and Cookies.</CodePrjBase>
  )
}

export default Frond;