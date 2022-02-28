"use strict";

var myTyping;
var allItems = [];

var typing = function typing(e) {
    myTyping = e.target.value;
};

var submiting = function submiting(e) {
    e.preventDefault();
    allItems.push(myTyping);
    e.target.elements[0].value = '';
    render();
};

function render() {
    var content = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { className: "heading" },
            "To-Do List"
        ),
        React.createElement(
            "form",
            { onSubmit: submiting },
            React.createElement("input", { className: "input", type: "text", placeholder: "Type ....", onChange: typing }),
            React.createElement(
                "button",
                { className: "add", type: "submit" },
                "Add"
            )
        ),
        React.createElement(
            "ul",
            { className: "list" },
            allItems.length ? allItems.map(function (item) {
                return React.createElement(
                    "li",
                    null,
                    " ",
                    item,
                    " "
                );
            }) : ''
        )
    );

    ReactDOM.render(content, document.getElementById("app"));
};

render();
