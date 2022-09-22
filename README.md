# ReactJS - To-do App

### Description
- Project requirement: Code the to-do app using ReactJS
- Release date: 22 Sep 2022

### General Guideline
1. Preparation steps:
- Step 1:  Buid a static version
    - Analyze the component structure
- Step 2: Identify states
- Step 3: Handle events

2. Coding notes
- We can use the {...} to execute a JavaScript code in JSX
- The (...) is used to open the JSX code
- JSX allows us to add the HTML code to the React file after `return`. However, only 1 element is apply, meaning that
    - You can not add 2 seperate block of code. For examples: 
    > `<div></div>`
    > `<div></div>`
    - Instead you can grab those tags in one `tag` code or using `<> </>`

- Component is function, but only have 1 prop. However, prop can have many parameters based on the coding requirements.
- Component name is written with in the uppercase format for all first word letter.
- Components/ functions can be divided to other JS file to make the App.js more readable.

- `const [state, setState] = useState(initialValue)` hook:
    - state = initialState
    - setState is used to adjust the state value

Cheers!