import React from "react"
import { Link } from "gatsby"

// ListLink is a functional component, it's just inline
// It renders its children using composition, in this case the link text
// The alternative would be just to wrap the Link components in <li> tags
// But then you'd have to duplicate the inline styling for each one 


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (

    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>

      <header style={{ marginBottom: `1.5rem` }}>
        
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>

      </header>
      {/* This is props.children */}
      {children}
    </div>
  )
}
