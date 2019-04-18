'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <MonthTableList list={this.state.list} />
                <YearTableList list={this.state.list} />
                <SortTableList list={this.state.list} />
            </div>
        );
    }
};

const MonthTableList = withData(
    MonthTable
);

const YearTableList = withData(
    YearTable
);

const SortTableList = withData(
    SortTable
);

function withData(Component) {
    return class extends React.Component {
        constructor(...args){
            super(...args)
            console.log(...args)
        }
        render() {            
            return <Component list={this.args} />;
        }
    }
}