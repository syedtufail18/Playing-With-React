import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement('div', { key: 'div1' }, [
      React.createElement('h1', { key: 'h1-1' }, 'Hello World1'),
      React.createElement('p', { key: 'p1' }, 'This is a paragraph1')
    ]),
    React.createElement('div', { key: 'div2' }, [
      React.createElement('h1', { key: 'h1-2' }, 'Hello World2'),
      React.createElement('p', { key: 'p2' }, 'This is a paragraph2')
    ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);