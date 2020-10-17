import React from "react"
import { withStyles } from "arwes";

let styles = (theme) => ({
  root: {
    background: theme.background.header.level2,
  },
  title: {
    textDecoration: "underline",
  },
  inputColor: {
    background: theme.background.header.level3,
    color: "#fff"
  }
});

const WithStyleHOC = (Component) => {
  class ComponentStyle extends React.Component {
    render() {
      return <Component {...this.props} />
    }
  }
  return withStyles(styles)(({classes, children}) => (
    <ComponentStyle classes={classes}>{ children }</ComponentStyle>
  ))
}


export default WithStyleHOC;