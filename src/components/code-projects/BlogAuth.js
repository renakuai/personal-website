import React from "react";
import CodePrjBase from '../../design-system/CodePrjBase'

const BlogAuth = () => {

  return (
    <CodePrjBase
      title="Creating an API & Auth System for my Blog"
      imgSrc="/BlogAuth.png"
      imgAlt="Blog comment field"
      labels="React,Express,MongoDB"
      cta="View live"
      prjUrl="https://rena-blog-auth.netlify.app"
    >My first full-stack project utilizing Express / MongoDB on the back-end and React on the front-end. I created an API to manage Blog Posts and Comments and also an auth system using JSON web tokens / Passport. I implemented this on a previous version of my personal website, which is where this project lives.</CodePrjBase>
  )
}

export default BlogAuth;