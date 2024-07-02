import React, {CSSProperties, FC, ReactNode, useState} from "react";
import {message, Upload, Image, GetProp, UploadFile, UploadProps} from "antd";
import { PlusOutlined } from "@ant-design/icons"
import classNames from "classnames";

interface UploadFileItf {
  autoUpload?: boolean
  editable?: boolean
  url: string
  fileType?: "picture" | "file"
  fileMultiple?: false | Number
  customClass?: string
  style?: CSSProperties
  children?: ReactNode
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

const DefaultChildren = () => {
  return (
      <button style={{ border: 0, background: 'none' }} type="button">
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </button>
  )
}

const ComUploadFile: FC<UploadFileItf> = (props) => {
  const {
    url, fileType, editable, autoUpload,
    fileMultiple = false,
    customClass, style, children
  } = props
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
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
  const handleChange: UploadProps['onChange'] = ({file, fileList: newFileList, event}) => {

    setFileList(newFileList)
    if (file.status === 'uploading') {
      return;
    }
    if (file.status === 'done') {
      return;
    }
    if (file.status === 'error') {
      return;
    }
  };
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };
  const classes = classNames(
      "upload-file",
      `file-${fileMultiple ? "multiple" : "single"}`
  )
  const uploadProps: UploadProps = {
    action: autoUpload ? url : undefined,
    listType: fileType === "picture" ? "picture-card" : "text",
    beforeUpload: beforeUpload,
    fileList: fileList,
    onChange: handleChange,
    onPreview: handlePreview,
    className: customClass
  }

  return (
    <div className={classes} style={style}>
      <Upload  {...uploadProps}>
        {
          fileList.length >= (fileMultiple ? fileMultiple : 1) ? null : children ? children : <DefaultChildren />
        }
      </Upload>
      {previewImage && (
          <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
          />
      )}
    </div>
  )
}

export default ComUploadFile
