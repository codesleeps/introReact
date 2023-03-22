// first component ES6 🤖
// eslint-disable-next-line
import React from 'react';
import ReactDom from 'react-dom';
// stateless functional components 🤖
// always return JSX 🤖
// set up function component for React first letter of function component is uppercase 🤖
// return function jsx(html) 🤖
// JSX RULES :return single element, div / section / article or Fragment, use camelCase for html attributes, className instead of class, close every element, formatting 🤖
// Nested Components, React Tools 🤖
function Greeting() {
	return (
		<div>
			<Person />
			<Message />
		</div>
	);
}
// Person = JSX element 🤖
// below and above functions code blocks do the same thing - choose one 🤖
// const Greeting = () => {
// 	return React.createElement(
// 		'h1',
// 		{},
// 		'this is me and this is my first component'
// 	);
// };

const Person = () => <h2>this is it and this is my first component</h2>;
const Message = () => {
	return <p>this is my message</p>;
};
// injecting Greeting function into the div with id of 'root' 🤖
ReactDom.render(<Greeting />, document.getElementById('root'));
