    var myTyping;
    var allItems = [];

    var typing=(e)=>{
        myTyping = e.target.value;
    };
    
    var submiting=(e)=>{
        e.preventDefault();
        allItems.push(myTyping);
        e.target.elements[0].value = '';
        render();
    }

    function render(){
        var content = (
            <div>
            <h1 className ="heading" >To-Do List</h1>
                <form onSubmit={submiting}>
                    <input className="input" type="text" placeholder="Type ...." onChange={typing} />
                    <button className ="add" type="submit">Add</button>
                </form>
                <ul className="list">
                    { allItems.length ? allItems.map( (item) => <li> {item} </li> ) : ''}
                </ul>
            </div>
        );
            
        ReactDOM.render( content , document.getElementById("app")); 
    };

    render();


