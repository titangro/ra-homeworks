class Cart extends React.Component {

  render() {
    return (
      <CartView {...this.props} />
    );
  }  

  shouldComponentUpdate(nextProps) {
    return nextProps.isOpen !== this.props.isOpen || nextProps.isOpen && nextProps.items.length !== this.props.items.length;    
  }

}
