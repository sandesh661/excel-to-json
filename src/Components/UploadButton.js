import "../styles/upload-btn.css";

export default function UploadButton(props) {
    return (
        <div className="upload-btn-div">
            <div className="upload-btn-wrapper">
                <label htmlFor="uploadBtn" className="btn-label">
                    <img src="./images/file-upload.png" alt="upload-img" />
                    Upload Excel file
                </label>
                <input id="uploadBtn" type="file" name="myfile" onChange={props.readUploadFile} onClick={(event) => { event.target.value = null }}
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
            </div>
        </div>
    )
}
