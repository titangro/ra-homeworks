'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
    .then(res => res.json())
    .then(res => {        
        ReactDOM.render(
            <Listing items={res}/>,
            document.getElementById('root')
        );
    })

function Listing(list) {
    const items = list.items.map(
        item =>
        <div className="item" key={item.listing_id}>
            <MainImage props={item} />
            <Details props={item} />
        </div>
    )
    return list.items.length ? (
    <div className="item-list">
        {items}        
    </div>
    ) : null;
}

function MainImage({props}) {    
    const {MainImage, url} = props;    
    return (
        <div className="item-image">
            <a href={url}>
                <img src={MainImage.url_570xN} />
            </a>
        </div>
    )
}

function Details({props}) {
    const {title, currency_code, price, quantity} = props;
    const formatedTitle = title.slice(0,50) + "...";
    const formatedCurrencyCode = currency_code == "USD" ? '$' : currency_code == "EUR" ? '€' : currency_code;
    return (
        <div className="item-details">
            <p className="item-title">{title.length <= 50 ? title : formatedTitle}</p>
            <p className="item-price">{formatedCurrencyCode} {price}</p>
            <p className="item-quantity level-medium">{quantity} left</p>
        </div>
    )
}