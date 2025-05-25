
const element = React.createElement('div', {id:"parent"}, [
    React.createElement('div', {}, [
        React.createElement('h1', {id:null}, "Hello World1"),
        React.createElement('p', {id:null}, "This is a paragraph1")
    ]),
        
    React.createElement('div', {},[
        React.createElement('h1', {id:null}, "Hello World2"),
        React.createElement('p', {id:null}, "This is a paragraph2")
    ])
]
    
);
//console.log(element);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
