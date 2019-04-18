'use strict';

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <ChangedVideo {...item} />
                );

            case 'article':
                return (
                    <ChangedArticle {...item} />
                );
        }
    });
};

const ChangedVideo = updgade(
    Video   
)

const ChangedArticle = updgade(
    Article
)

function updgade(Component, propName) {
    return class extends React.Component {
        showComponent() {
            if (this.props.views >= 1000) 
                return (
                    <Popular >
                        <Component {...this.props} />
                    </Popular>
                );            
            if (this.props.views < 100) 
                return (
                    <New >
                        <Component {...this.props} />
                    </New>
                );      
            return <Component {...this.props} />;
        }
        
        render() {
            return this.showComponent();            
        }
    }
}
