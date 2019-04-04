'use strict';

const App = ({items}) => {
  return (
  <main>
    {items.map((item, i) => 
      <ListItem key={i} item={item} />     
    )}
  </main>
)};

const ListItem = ({item}) => {
  const colors = {
    unisex: "black",
    male: "blue",
    female: "orange"
  }

  return <Item color={colors[item.type]} item={item} />;
}
