import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <p>Hello Gatsby!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
