'use strict';

const Form = (props) => {
  console.log(props)
  return (
    <div className="col-md-5 offset-md-4">
      <h1 className="text-center">Регистрация</h1>
      <hr/>
      <form onSubmit={props.handleSubmit}>
        <TextInput label="Email" type="email" name="email" onChange={props.handleChange} value={props.email}
                   required={true}/>
        <TextInput label="Имя" type="text" name="first_name" onChange={props.handleChange}
                   value={props.first_name}/>
        <TextInput label="Фамилия" type="text" name="last_name" onChange={props.handleChange}
                   value={props.last_name}/>
        <DateInput label="День Рождения" name="birthday" onChange={props.handleChange} value={props.birthday}/>
        <TextInput label="Пароль" type="password" name="password" onChange={props.handleChange}
                   value={props.password}/>
        <RadioGroup label="Пол" name="sex" onChange={props.handleChange} value={props.sex} list={['муж', 'жен']}/>

        <button type="submit" className="btn btn-primary mt-2 float-right">Зарегистрироваться</button>
      </form>
    </div>
  )
};

const emailPropType = (props, propName, componentName) => { 
  let email = props[propName];
  let isEmail = (typeof email === 'string') && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  if(!isEmail) { 
    return new Error(`Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть адресом электронной почты`); 
  }
  return null;
}

const createChainableTypeChecker = (validate) => { 
  const checkType = (isRequired, props, propName, componentName) => {
    if (props[propName] === null) { 
      if (isRequired) { 
        return new Error(`Обязательный атрибут ${propName} не был передан компоненту ${componentName}`); 
      } 
      return null; 
    } else { 
      return validate(props, propName, componentName);
    }
  } 
  let chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true); 
  return chainedCheckType;
}

const emailPropTypeChecker = createChainableTypeChecker(emailPropType);

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,

  email: emailPropTypeChecker,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  birthday: PropTypes.string,
  password: PropTypes.string,
  sex: PropTypes.oneOf(['муж', 'жен'])
};

Form.defaultProps = {
  birthday: (new Date()).getFullYear() + "-" + ((new Date()).getUTCMonth() < 9 ? "0" + ((new Date()).getUTCMonth() + 1) : ((new Date()).getUTCMonth() + 1))  + "-" + ((new Date()).getDate() < 10 ? "0" + (new Date()).getDate() : (new Date()).getDate()),
  email: "test@test.ru"
}
