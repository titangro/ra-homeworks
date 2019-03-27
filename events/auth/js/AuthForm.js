'use strict';

function AuthForm( onAuth ) {
    return (
        <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={(e) => {
                console.log(e.nativeEvent.currentTarget);
                e.preventDefault();                
                const form = new FormData(e.nativeEvent.currentTarget);
                const user = {};
                for (const [k, v] of form) {
                    console.log(k, v)
                    user[k] = v;
                }
                console.log(user);
                //onAuth(user);
            }
        } >
            <div className="Input">
                <input required type="text" placeholder="Имя" name="name" />
                <label></label>
            </div>
            <div className="Input">
                <input type="email" placeholder="Электронная почта" name="email" onChange={validateEmail} />
                <label></label>
            </div>
            <div className="Input">
                <input required type="password" placeholder="Пароль" name="password" onChange={validatePassword} />
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    )
}

function validateEmail(e) {
    const email = e.nativeEvent.target.value;
    e.nativeEvent.target.value = !/^[a-zA-Z0-9@._-]+$/.test(email) ? email.slice(0, email.length - 1) : email.slice(0, email.length);
}

function validatePassword(e) {
    const password = e.nativeEvent.target.value;
    e.nativeEvent.target.value = !/^[a-zA-Z0-9_]+$/.test(password) ? password.slice(0, password.length - 1) : password.slice(0, password.length);
}
