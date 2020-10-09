import React from "react"

export default function Layout({ children }) {
  return (
    // Or, I guess this could be a styled component
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {/* This is props.children */}
      {children}
    </div>
  )
}
