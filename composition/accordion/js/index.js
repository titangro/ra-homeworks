'use strict';
class App extends React.Component {
    constructor (props) {
        super(props);
        this.props = props;
    }

    render () {        
        return (
            <main className="main">
                <h2 className="title">React</h2>
                {this.props.data.map((item,itemIndex) => 
                    <Section key={itemIndex} {...item} onClick={this.handleTitle.bind(this)} />
                )}                
            </main>
        )
    }

    handleTitle(event) {
        event.target.parentElement.classList.toggle('open');
    }
}

const Section = ({title, description, onClick}) => 
    <section className="section">
        <button>toggle</button>
        <h3 className="sectionhead" onClick={onClick}>{title}</h3>
        <div className="articlewrap">
            <div className="article">
                {description}
            </div>
        </div>
    </section>