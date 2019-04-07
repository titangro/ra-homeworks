const SubscribeForm = () => {
    let form;
    const handleSubmit = event => {
        event.preventDefault();
    }
    const handleValid = () => {
        if (form.querySelector('input[type="email"]').validity.valid) {
            form.classList.remove('is-error');
            form.classList.add('is-valid');
        } else {
            form.classList.add('is-error');
            form.classList.remove('is-valid');
        }
    }

    return (
        <div className="subscribe__form">
            <form className="form form--subscribe" onSubmit={handleSubmit} ref={element => form = element}>
                <h4 className="form-title">Подписаться:</h4>
                <div className="form-group">
                <label htmlFor="input-email" className="sr-only">Email</label>
                <input onChange={handleValid} onClick={handleValid} type="email" id="input-email" placeholder="Email" className="form-control"/>
                <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                <button type="submit" className="form-next">
                    <i className="material-icons">keyboard_arrow_right</i>
                </button>
                </div>
            </form>
        </div>
    )
};