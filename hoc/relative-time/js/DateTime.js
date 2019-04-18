'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

const DateTimePretty = withChangedDate(DateTime)

function withChangedDate(Component) {
    return class extends React.Component {
      render() {
        console.log('Для проверки взято время 2018-03-03 13:00:00');
        console.log(this.props.date)
        const date = getInfoDateString(new Date(this.props.date));
        console.log(date);
        return <Component date={date} />;
      }
    }
}

function getInfoDateString(date) {
    console.log(date)
    const testTime = new Date('2018-03-03 13:00:00');
    const timeDelta = (new Date(testTime.getTime() - date.getTime())).getTime();
    if (timeDelta > 1000*60*60*24) {
        const leavedDays = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
        return `${leavedDays} дней назад`;
    }
    if (timeDelta <= 1000*60*60) {
        return '12 минут назад';
    } else {
        return '5 часов назад';
    }
}

/*function getDateString(date) {
    return `${date.toISOString().slice(0, 10)} ${date.toLocaleTimeString()}`;
}*/