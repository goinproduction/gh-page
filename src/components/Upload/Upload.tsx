/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Upload, Image, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

type Props = {
    children?: JSX.Element,
    imageUrl: string,
    beforeUpload: (file: File) => void,
    className?: string,
    name: string,
    rest?: UploadProps
}
const UpLoad = ({ beforeUpload, children, imageUrl, className, name, ...rest }: Props) => {
    return (
        <Upload
            beforeUpload={beforeUpload}
            name={name}
            listType="picture-card"
            className={` ${className || ''}`}
            showUploadList={false}
            maxCount={1}
            itemRender={() => {
                if (imageUrl) {
                    return (
                        <Image className='image-uploaded' src={imageUrl} alt='' />
                    );
                } return (<div />);
            }}
            {...rest}
        >
            {children || (imageUrl ? <Image preview={false} className='image-uploaded' src={imageUrl} alt='' />
            : (
                <div className="d-flex flex-column">
                    <UploadOutlined className='upload-icon' />
                    <span className='color-grey'>Upload</span>
                </div>
            ))}
        </Upload>
    );
};

export default UpLoad;
