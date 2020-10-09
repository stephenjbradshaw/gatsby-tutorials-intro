import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="Header text passed down on props" />
      <Header headerText="More header text wooo!" />
      <p>About</p>
    </div>
  )
}
