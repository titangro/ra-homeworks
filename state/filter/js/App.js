'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All',
      projects: this.props.projects
    }
  }
  
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected = {this.state.selected}
          onSelectFilter={
            filter =>
            {
              console.log(filter);
              this.setState({
                selected: filter,
                projects: filter === 'All' ? this.props.projects :
                  this.props.projects.filter(project => project.category === filter)
              });
            }
          } />
        <Portfolio projects={this.state.projects} />
      </div>
    )
  }
}
