/* <div id=parent>
    <div id=child>
        <h1></h1>
        <h2></h2>
    </div>
</div> */
const parent = React.createElement('div', {
    id: 'parent',
    class: "parents"
}, React.createElement('div', { id: 'child' },
    [React.createElement('h1', {}, 'This is H1 from react!'), React.createElement('h2', {}, 'This is H2 from react!')]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);