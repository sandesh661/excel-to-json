import { useState } from "react";
import * as xlsx from 'xlsx';
import JsonViewer from "./JsonViewer";
import UploadButton from "./UploadButton";

export default function MainArea() {
    const [jsonStore, setJsonStore] = useState([]);

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            let fileDataObj = { "fileName": e.target.files[0].name, fileData: [] }
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                fileDataObj.fileData = json;
                setJsonStore([...jsonStore, fileDataObj])
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const deleteData = (index) => {
        const newData = JSON.parse(JSON.stringify(jsonStore));
        newData.splice(index, 1);
        setJsonStore(newData);
    }

    return (
        <div className="mainarea-div">
            <UploadButton readUploadFile={readUploadFile} />
            {jsonStore.map((data, index) => <JsonViewer jsonData={data} deleteData={() => { deleteData(index) }} key={index} />)}
        </div>
    )
}
