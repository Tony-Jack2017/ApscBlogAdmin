import instance from "../config/http";

export function uploadFile<T extends File>(file: T){
    return instance.post("/file/upload",
        {
            "file": file,
        }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}