import React from "react";
import CodePrjBase from '../../design-system/CodePrjBase'

const D3Guns = () => {

  return (
    <CodePrjBase
      title="Visualizing Gun Rights v Gun Control Funding"
      imgSrc="/D3Guns.png"
      imgAlt="Gun rights v gun control funding line chart"
      labels="React,D3"
      cta="View live"
      prjUrl="https://gun-views.netlify.app/"
    >I utilized data from OpenSecrets.gov to visualize the difference in gun rights v gun control funding in the US. I also plotted funding received by our current congressmen. The trickiest thing for this project was to keep D3 as the calculation engine and use React for the rendering.</CodePrjBase>
  )
}

export default D3Guns;