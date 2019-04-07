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
				<Charts {...this.state} max={max} />        

				<Charts addedCls={"stacked"} {...this.state} max={max} />        

				<Charts addedCls={"layered"} {...this.state} max={max} /> 

				<Charts addedCls={"horizontal"} {...this.state} max={max} />        
				
				<LabelsItem labels={labels} colors={colors} />
			</section>
		);
	}
}

const ChartsSerie = ({height, addedCls, serieIndex}) => {
	const cls = !addedCls ? "Charts--serie" : "Charts--serie " + addedCls;
	return (
		<div className={ cls }
      key={ "Charts--serie" }
      style={{height: height}}
    >
      <label>{ labels[serieIndex] }</label>
        { serie.map((item, itemIndex) => 
					<ChartItem key={itemIndex} item={item} color={colors[itemIndex]}
						style={{
						backgroundColor: colors[itemIndex],
						opacity: item/max + .05,
            zIndex: item,
            height: item / (max) * 100 + '%'
				}} />
			) }
    </div>
	)
}

const ChartItem = ({item, style, color, addedCls}) => {
	const cls = !addedCls ? "Charts--item" : "Charts--item " + addedCls;	
	return (
	<div className={cls} style={ style }>
  	<b style={{ color: color }}>{ item }</b>
  </div>
	)
}

const Charts = ({ addedCls, data, series, colors, max }) => {
	const cls = !addedCls ? "Charts--serie" : "Charts--serie " + addedCls;
	return (
		<div className={addedCls === "horizontal" ? "Charts horizontal" : "Charts"}>
			{ data.map((serie, serieIndex) => {
				let sortedSerie = serie.slice(0), sum;

				sum = serie.reduce((carry, current) => carry + current, 0);
				sortedSerie.sort(compareNumbers);

				return (
					<div className={cls}
						key={ serieIndex }
						style={{ height: addedCls === "horizontal" ? 'auto' : 250 }}
						>
						<label>{ series[serieIndex] }</label>
						{ serie.map((item, itemIndex) => 
							<ChartItem key={itemIndex} item={item} color={colors[itemIndex]} addedCls={addedCls === "horizontal" ? null : addedCls}
								style={{
								backgroundColor: colors[itemIndex],
								opacity: addedCls === "stacked" ? 1 : item/max + .05,
								zIndex: item,
								height: addedCls === "horizontal" ? 
									'transparent' : 
									addedCls === "stacked" ? 
										(item / sum * 100 + '%') :
										(item / (max) * 100 + '%'),
								width: addedCls === "horizontal" ? 
									(item / (max) * 100 + '%') : 
										'auto',
								right: addedCls === "layered" ? 
									(((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%') :
										'transparent'
								}} />
						) }
					</div>
				);
			}) }
		</div>
	);
}


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
