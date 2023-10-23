# Namaste-React
Lesson1 - Inception

To use React in the code, we need to get its script files. They can be obtained from CDN React.
1st script file is react.develpment.js where all react code is present. 2nd script file is react-dom.development.js, it acts like bridge between react and browser.

First in index.html, I wrote a hello world code using HTML and JS.

Next in React1.html,React2.html I have written Hello world program using React.
1. Use React.createElement to create object where it has 3 arguments.
    i) tagName ii) Object to give attributes to tags iii)Value to be given to tags
2. ReactDOM.createRoot() is used to get the DOM element root
3. root1.Render(root) -> to render the ReactElement object to HTML. It takes JS object, create h1 tag and put it inside root of html.


Next, I created react3.html with nested tag structure.

react4.html, react5.html contains nested tag structure with multiple child tags. During more than 1 child tag, we need to use Array to handle the children.

Notes: If there is any content present in div root tag of html, it gets replaced with the content rendered from the script file.

React is a library. It can be specifically used to any specific tag.
