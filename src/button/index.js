import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const {children, className} = props;
    const {disabled, setDisabled} = useState(null);

    return (
        <button type="button" className={className} {...props} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

Button.defaultProps = {
    children: '',
    className: ''
};

export default Button;
