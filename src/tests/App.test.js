import React from "react"
import ReactDOM from "react-dom"
import FullApp from "../App"

it('safety render', () => {
  let div = document.createElement("div")
  ReactDOM.render(<FullApp />, div)
  ReactDOM.unmountComponentAtNode(div)
}) 