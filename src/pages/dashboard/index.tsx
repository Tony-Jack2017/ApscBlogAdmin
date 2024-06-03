import {useState} from "react";
import axios from "axios";

const DashboardDefault = () => {

    const handleUpload = () => {
        axios.post("http://127.0.0.1:8080/api/common/single/upload_file", {
            "file": selectedFile
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    }

    const [selectedFile , setSelectedFile] = useState<File | undefined>()

    return (
        <div>
           <p> This is DashboardDefault Page</p>
            <input type="file" onChange={handleInput} />
            <button onClick={handleUpload} >上传</button>
        </div>
    )
}

export default DashboardDefault