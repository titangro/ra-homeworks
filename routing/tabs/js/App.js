const App = props => {
    return (
        <Router>
            <div className="tabs">
                <nav className="tabs__items">
                    <NavLink className="tabs__item" exact activeClassName="tabs__item-active" to="/">Главная</NavLink>
                    <NavLink className="tabs__item" exact activeClassName="tabs__item-active" to="/creator">Криэйтор</NavLink>
                    <NavLink className="tabs__item" exact activeClassName="tabs__item-active" to="/fortune">Гадалка</NavLink>
                </nav>
                <div className="tabs__content">
                    <Route path="/creator" exact component={Creator} />
                    <Route path="/fortune" component={Fortune} />
                    <Route path="/" component={Essay} />
                </div>
            </div>
        </Router>
    )
}
