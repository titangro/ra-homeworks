'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  birthday: (props, propName, componentName) => {
    if (props[propName] && !/^[0-9]{1,4}\-[0-9]{1,2}\-[0-9]{1,2}$/.test(props[propName])) {
      return new Error(`Недопустимое значение ${propName} предоставлен ${componentName}. Необходимо значение вида «YYYY-MM-DD». Проверка не удалась.`);
    }
    return null
  },
  url: (props, propName, componentName) => {
    if (/https\:\/\/vk.com\/{1}(id[0-9]+|[A-Za-z0-9_-]+)$/.test(props[propName].slice(15))) {
      return new Error(`Недопустимое значение ${propName} предоставлен ${componentName}. Необходимо значение вида «https://vk.com/(id[0-9]+|[A-Za-z0-9_-]+)». Проверка не удалась.`);
    }
  }
}

Profile.defaultProps = {
  img: "./images/profile.jpg"
}
