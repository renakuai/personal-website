import React, { useState, useEffect } from "react";

const CodePrjBase = (props) => {

  const [labelArray, setLabelArray] = useState([])

  const {
    children,
    title,
    imgSrc,
    imgAlt,
    labels,
    cta,
    prjUrl
  } = props

  useEffect(() => {
    const array = labels.split(',')
    setLabelArray(array)
  }, [labels])

  return (
    <section
      className="Proj"
      title={title}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      labels={labels}
      cta={cta}
      prjUrl={prjUrl}>
      <header><h2>{title}</h2></header>
      <div className="Proj__img-wrapper"><img src={imgSrc} alt={imgAlt} /></div>
      <div className="Proj__desc-wrapper">
        <p>{children}</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            {labelArray && labelArray.map((item, i) => (
              <li key={i} className="Proj__label">{item}</li>
            ))}
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href={prjUrl} target="_blank" rel="noreferrer">{cta} →</a>
        </div>
      </div>
    </section>
  )
}

export default CodePrjBase;