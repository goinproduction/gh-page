import { Modal } from 'antd';
import { ReactNode } from 'react';

type statusType = 'success' | 'error' | 'info' | 'warning';
type modalInfo = string | ReactNode;

/**
 * Generates notification
 * @param {statusType} status - The status of modal of ant design
 * @param {title} title - The title of the modal
  * @param {content} content - The content of the modal
 */

export const showNotification = (status: statusType, title: modalInfo, content: modalInfo) => {
    return Modal[status]({
        title,
        content,
    });
};
