let Visibility = false;
const toggle = () => {
    Visibility = !Visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{Visibility ? 'hide details' : 'show details' }</button>
            {Visibility && (
                <div>
                    <p>Hey check out your stuff!!</p>
                </div>
            )}
            </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'));
}

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

