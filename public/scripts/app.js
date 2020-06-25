'use strict';

var Visibility = false;
var toggle = function toggle() {
    Visibility = !Visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            Visibility ? 'hide details' : 'show details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey check out your stuff!!'
            )
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();

/* const app = {
    title: 'Visibility Toggle',
    options: []
};

function getTitle(title) {
    if (title){
        return <h1>{title}</h1>
    } else {
        return undefined
    }
}

const toggle = () => {

}

const template = (
    <div>
        {getTitle(app.title)}    
        <button onClick={toggle}>show details</button>
    
    
    </div>
    
);
*/
