'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(props)
    this.state = {
      view: VIEW_MODULE
    }
  }

  render() {
    console.log(this.state.view)
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.view}
            onSwitch={() => {
              this.setState({
                view: this.state.view !== "view_module" ? VIEW_MODULE : VIEW_LIST
              });
              console.log("сменился тип вывода")}
            } />
        </div>
        {this.renderLayout(this.state.view === "view_module")}
      </div>
    );
  }

  renderLayout(cardView) {
    console.log(cardView)
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
