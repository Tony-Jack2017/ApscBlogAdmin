import {GetProp, message, Upload, UploadProps} from "antd";
import {FC} from "react";

interface UploadFileItf {
    url?: string
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const UploadFile:FC<UploadFileItf> = (props) => {
    const { url } = props

    const beforeUpload = (file: FileType) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    return (
        <div className="upload-file">
            <Upload accept={url} beforeUpload={beforeUpload}>
                Test
            </Upload>
        </div>
    )
}

export default UploadFile