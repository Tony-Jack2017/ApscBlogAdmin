import {CSSProperties, FC, ReactNode, useState} from "react";
import {message, Upload, GetProp, UploadFile, UploadProps} from "antd";

interface UploadFileItf {
  autoUpload?: boolean
  editable?: boolean
  url: string
  fileType?: "picture" | "file"
  fileMultiple?: false | Number
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const ComUploadFile: FC<UploadFileItf> = (props) => {
  const {
    url, fileType, editable, autoUpload,
    fileMultiple,
    className, style, children
  } = props
  console.log(editable, autoUpload)
  const [fileList, setFileList] = useState<UploadFile[]>([])
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
  const handleChange: UploadProps['onChange'] = (info) => {

    setFileList((pre: UploadFile[] | undefined) => {
      if (fileMultiple) {
        if (pre) {
          return [info.file, ...pre]
        } else {
          return [info.file]
        }
      } else {
        return [info.file]
      }
    })
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      console.log(info.event)
      return;
    }
    if (info.file.status === 'error') {
      return;
    }
  };

  const uploadProps = {
    accept: autoUpload ? url : undefined,
    listStyle: fileType === "picture" ? "picture-card" : "picture-card",
    beforeUpload: beforeUpload,
    fileList: fileList,
    onChange: handleChange
  }

  return (
    <div className={`upload-file ${className}`} style={style}>
      <Upload {...uploadProps}>
        {
          fileList.length >= (fileMultiple ? fileMultiple : 1) ? null : children
        }
      </Upload>
    </div>
  )
}

export default ComUploadFile
