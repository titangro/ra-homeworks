function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
		
		return (
			<section>
        <div className="Charts">
          { data.map((serie, serieIndex) => {
            var sortedSerie = serie.slice(0),
              sum;

            sum = serie.reduce((carry, current) => carry + current, 0);
            sortedSerie.sort(compareNumbers);

            return (
              <div className="Charts--serie"
                key={ serieIndex }
                style={{height: 250}}
              >
              <label>{ labels[serieIndex] }</label>
              { serie.map((item, itemIndex) => {
                var color = colors[itemIndex], style,
                  size = item / (max) * 100;

                style = {
                  backgroundColor: color,
                  opacity: item/max + .05,
                  zIndex: item,
                  height: size + '%'
                };

              return (
                <div
                  className="Charts--item"
                  style={ style }
                  key={ itemIndex }
                >
                  <b style={{ color: color }}>{ item }</b>
                 </div>
              );
              }) }
              </div>
            );
          }) }
        </div>

        <div className="Charts">
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
  						<div className="Charts--serie stacked"
  				 			key={ serieIndex }
  							style={{ height: 250 }}
  						>
  						<label>{ labels[serieIndex] }</label>
  						{ serie.map((item, itemIndex) => {
  							var color = colors[itemIndex], style,
  								size = item / sum * 100;

  							style = {
  								backgroundColor: color,
  								opacity: 1,
  								zIndex: item,
                  height: size + '%'
  							};

  						 return (
  							 <div
  							 	className="Charts--item stacked"
  							 	style={ style }
  								key={ itemIndex }
  							>
  							 	<b style={{ color: color }}>{ item }</b>
  							 </div>
  						);
  						}) }
  						</div>
  					);
  				}) }
  			</div>

        <div className="Charts">
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
  						<div className="Charts--serie layered"
  				 			key={ serieIndex }
  							style={{ height: 250 }}
  						>
  						<label>{ labels[serieIndex] }</label>
  						{ serie.map((item, itemIndex) => 
								<ChartItem key={itemIndex} item={item} color={colors[itemIndex]} addCls="layered"
									style={{
									backgroundColor: colors[itemIndex],
  								opacity: (item/max + .05),
  								zIndex: item,
                  height: item / (max) * 100 + '%',
                  right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
									}} />
							) }
  						</div>
  					);
  				}) }
  			</div>

        <div className="Charts horizontal">
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
  						<div className="Charts--serie"
  				 			key={ serieIndex }
  							style={{ height: 'auto' }}
  						>
  						<label>{ series[serieIndex] }</label>
  						{ serie.map((item, itemIndex) => 
								<ChartItem key={itemIndex} item={item} color={colors[itemIndex]}
									style={{
									backgroundColor: colors[itemIndex],
  								opacity: (item/max + .05),
  								zIndex: item,
                  width: item / (max) * 100 + '%'
									}} />
  						) }
  						</div>
  					);
  				}) }
  			</div>
				
				<LabelsItem labels={labels} colors={colors} />        
			</section>
		);
	}
}

const ChartItem = ({item, style, color, addCls}) => {
	const cls = !addCls ? "Charts--item" : "Charts--item " + addCls;	
	return (
	<div className={cls} style={ style }>
  	<b style={{ color: color }}>{ item }</b>
  </div>
	)
}

/*const Chart = ({}) => {

}*/

const LabelsItem = ({labels, colors}) => 
	<div className="Legend">
		{ labels.map((label, labelIndex) => {
			return (
			<div>
				<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
				<span className="Legend--label">{ label }</span>
			</div>
			);
		}) }
	</div>
