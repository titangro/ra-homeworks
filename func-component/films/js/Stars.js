'use strict';

function Stars({count}) {
  console.log(count);
  let stars = [];
  for (let i = 1; i <= count; i++) {
    stars[i-1] = <li key={i}><Star /></li>;
  }
  return count !== 0 ? (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  ) : null;
}
