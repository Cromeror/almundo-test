import React from 'react';
import ReactDOM from 'react-dom';
import LoginBox from 'Login/LoginBox.component/index.js';

describe('renders without crashing', () => {
    it('LoginBox', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoginBox />, div);
    });
});