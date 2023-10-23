/**
 * I need to have multiple tag in the following structure and also have multiple children within a tag
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        { id:"child1" },
        [
        React.createElement("h1",{id:"heading"}, "I'm h1 tag" ),
        React.createElement("h2",{},"I'm h2 tag")
        ]),
    React.createElement(
        "div",
        {id:"child2"},
        [
            React.createElement("h1",{},"child2 h1 tag"),
            React.createElement("h2",{},"child2 h2 tag")
        ]
    )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);