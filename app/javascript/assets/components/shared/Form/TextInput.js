/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/static-property-placement */
import React from 'react';
import PropTypes from 'prop-types';


class TextInput extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string.isRequired,
        className: PropTypes.string,
        error: PropTypes.string,
        handleChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        value: '',
        type: 'text',
        className: '',
        error: '',
    };

    render() {
        const {
            id, type, name, placeholder, className,
            value, error, label, handleChange, ...rest
        } = this.props;

        return (
            <>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label htmlFor={id} className="block uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">{label}</label>

                        <input
                            id={id}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            className={`${className} "appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-2 mb-3 text-sm`}
                            value={value}
                            onChange={handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onFocusOut}
                            error={error}
                            {...rest}
                        />
                        {error && <div className="text-red-500 text-xs text-left">{error}</div>}
                    </div>
                </div>
            </>
        );
    }
}

export default TextInput;
