import React from 'react';
import { Button } from 'reactstrap';

const BlueButton = ({ label, onClick }) =>
    <div className='container blue-button'>
        <Button size="lg" block onClick={onClick} className='button-1'>{label}</Button>{' '}
    </div>;


export default BlueButton;
