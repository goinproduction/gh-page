import { Modal } from 'antd';

type ConfirmArgument = {
    title: string,
    onOk: () => void,
    content?: JSX.Element | string,
    okText?: string,
    cancelText?: string,
}
export const renderConfirmModal = ({ title, content, onOk, okText, cancelText } : ConfirmArgument) => {
    return Modal.confirm({
        title,
        content,
        onOk,
        okText: okText || 'Ok',
        cancelText: cancelText || 'Cancel',
    });
};
