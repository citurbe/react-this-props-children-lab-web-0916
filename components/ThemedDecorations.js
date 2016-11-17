const React = require('react')
class ThemedDecorations extends React.Component {
  render() {
    const kidsWithTheme = React.Children.map(this.props.children, child =>{
      return React.cloneElement(child,{
        className: this.props.theme
      })
    })

    return (
      <div>
      {kidsWithTheme}
      </div>
    )
  }
}
module.exports = ThemedDecorations
