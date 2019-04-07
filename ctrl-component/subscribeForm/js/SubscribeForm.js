class SubscribeForm extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data;        
        this.form
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    handleValid(event) {
        if (event.target.validity.valid) {
            this.setState({valid: true})
        } else {
            this.setState({valid: false})
        }
    }

    render () {
        const cls = !this.state ? "form form--subscribe" :
         this.state.valid ? "form form--subscribe is-valid" : ("form form--subscribe is-error");
        return (
        <div className="subscribe__form">
            <form className={cls} onSubmit={this.handleSubmit.bind(this)} ref={element => this.form = element}>
                <h4 className="form-title">Подписаться:</h4>
                <div className="form-group">
                <label htmlFor="input-email" className="sr-only">Email</label>
                <input onChange={this.handleValid.bind(this)} type="email" id="input-email" placeholder="Email" className="form-control"/>
                <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                <button type="submit" className="form-next">
                    <i className="material-icons">keyboard_arrow_right</i>
                </button>
                </div>
            </form>
        </div>
        )
    }
};