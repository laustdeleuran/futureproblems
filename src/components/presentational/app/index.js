import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import './fonts.css';
import './base.css';

const App = ({ children }) => <main>{children}</main>;

App.propTypes = {
	children: PropTypes.node.isRequired,
};

export default App;
