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
    MonthTable,
    'month'
);

const YearTableList = withData(
    YearTable,
    'year'
);

const SortTableList = withData(
    SortTable,
    ''
);

function withData(Component, propName) {
    return class extends React.Component {
        getSort() {
            if (propName === 'month') {
                return this.props.list.map(item => {
                    const obj = {};
                    obj.month = (new Date(item.date)).toLocaleString('en', {month: 'short'});
                    obj.amount = item.amount;
                    return obj
                })
            }
            if (propName === 'year') {
                return this.props.list.map(item => {
                    const obj = {};
                    obj.year = (new Date(item.date)).getFullYear();
                    obj.amount = item.amount;
                    return obj
                })
            }
            return this.props.list;
        }

        render() {
            const list = this.getSort();
            console.log(list);
            return <Component list={list} />;
        }
    }
}