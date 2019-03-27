'use strict';

function FeedbackForm({data, onSubmit}) {
    return (
        <form className="content__form contact-form" onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.nativeEvent.currentTarget);
            let result = {};
            for (const [k, v] of form) {
                result[k] = v;
            }            
            onSubmit(JSON.stringify(result));
        }} >
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div className="contact-form__input-group" > 
                <input className="contact-form__input contact-form__input--radio" defaultChecked={"Мистер" === data.salutation} id="salutation-mr" name="salutation" type="radio" value="Мистер"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
                <input className="contact-form__input contact-form__input--radio" defaultChecked={"Мисис" === data.salutation} id="salutation-mrs" name="salutation" type="radio" value="Мисис"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
                <input className="contact-form__input contact-form__input--radio" defaultChecked={"Мис" === data.salutation} id="salutation-ms" name="salutation" type="radio" value="Мис"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" value={data.name} />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" value={data.email} />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject} >
                <option>У меня проблема</option>
                <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" value={data.message}></textarea>
            </div>
            <div className="contact-form__input-group">
                <p className="contact-form__label--checkbox-group">Хочу получить:</p>
                <input className="contact-form__input contact-form__input--checkbox" defaultChecked={data.snacks.indexOf("пицца") !== -1} id="snacks-pizza" name="snacks" type="checkbox" value="пицца"/>
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
                <input className="contact-form__input contact-form__input--checkbox" defaultChecked={data.snacks.indexOf("пирог") !== -1} id="snacks-cake" name="snacks" type="checkbox" value="пирог"/>
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </div>
            <button className="contact-form__button" type="submit">Отправить сообщение!</button>
            <output id="result" />
        </form>
    )    
}


