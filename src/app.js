

console.log('apps.js is running');
// jsx - javascript XML

let app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life In The Hands of The Computer',
    options: []
}

function getTitle(title) {
    if (title) {
        return <h1>{title}</h1>;
    } else {
        return undefined
    }
}

function getSubtitle(subtitle){
    if (subtitle){
        return <p>{subtitle}</p>
    } else {
        return undefined
    }
}



const onFormSubmit =(e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIdecisionApp();
    }
};

const RemoveAll = () =>{
    app.options = [];
    renderIdecisionApp();
};

    const onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum];
        alert(option);
    };

const appRoot = document.getElementById('app');



const renderIdecisionApp = () => {

    let template = (
 <div>
             {getTitle(app.title)}
             {getSubtitle(app.subtitle)}
              <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
              <button disabled={app.options.legnth === 0} onClick={onMakeDecision}>What should I do?</button>
              <button onClick={RemoveAll}>Remove All</button>
        {        
           /* numbers.map((number) => {
                return <p key="number">Number: {number}</p>

            }) */
        }
         <ol>
             {
                 app.options.map((option) => {
                     return <li key={option}>{option}</li>;
                 })
             }

         </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
    </form>
</div>
);
ReactDOM.render(template, appRoot);
};
renderIdecisionApp();






/*let user = {
    name: 'kyle',
    age: '26',
    location: 'riverton'
}

function getLocation(location) {
    if (location){
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}
let template2 = (
    <div>
      <h1>{user.name ? user.name : 'anonymous'}</h1>
      {(user.age && user.age >= 18)&& <p>Age: {user.age}</p>}
      
      {getLocation(user.location)}
 
     </div>
 );

let testroot = document.getElementById("test")
ReactDOM.render(template2, testroot)



//challenge
// make button "-1" - setup minusOne function and register - log "minusOne"
// make reset button "reset" -setup reset funtction - log "reset"
let count = 0;
const addOne =() => {
    count++;
   renderCounterApp();
};
const minusOne =() => {
    count--;
    renderCounterApp();
}
const reset =() => {
    count = 0;
    renderCounterApp();
    
}




const renderCounterApp = () => {
    const templatetwo =(
        <div>
        <h1>count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
        
        </div>
    );
    ReactDOM.render(templatetwo,appRoot);
};

renderCounterApp();*/



