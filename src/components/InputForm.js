import React from 'react';
import { Label, Input } from 'reactstrap';

const InputForm = ({ placeholder, type, name, id, value, disabled }) => {
    return (
        <div>
            <Input
                type={type}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                className='input-form'
            />

        </div>
    );
};

export default InputForm;
