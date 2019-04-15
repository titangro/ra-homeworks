class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  componentDidMount() {    
    window.addEventListener('scroll', this.setPosition.bind(this))
  }

  isFixed() {
    return (document.querySelector('.search-box').getBoundingClientRect().top <= 0 && window.pageYOffset > document.querySelector('.header').clientHeight);
  }

  setPosition() {
    if (this.state.fixed != this.isFixed()) {
      this.setState({ fixed: !this.state.fixed })
    }    
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition.bind(this))
  }
  
}
