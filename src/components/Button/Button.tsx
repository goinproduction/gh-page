import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { buttonHtmlType, buttonType } from '../../utils/button-type';

type ButtonProps = {
    type?: buttonType,
    htmlType: buttonHtmlType,
    isLoading?: boolean,
    isDisable?: boolean,
    className?: string,
    children: React.ReactNode,
    onClick?: () => void,
}
const Button = ({ type, htmlType, isLoading, isDisable, className, children, onClick } : ButtonProps) => {
    return (
        <button
            type={htmlType}
            className={`btn btn-${type || 'primary'} ${className || ''}`}
            disabled={isLoading === true ? true : isDisable}
            onClick={onClick}
        >
             {isLoading
                ? <LoadingOutlined />
                : children}
        </button>
    );
};

export default Button;
