import React from 'react';

function LazyInput({ type, id, name, value, onChange, className, required }) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
            required={required}
        />
    );
}

export default LazyInput;
