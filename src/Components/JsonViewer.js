
import ReactJson from 'react-json-view'
import "../styles/json-viewer.css"

export default function JsonViewer(props) {
    return (
        <div className="json-viewer-div">
            <h5 className='file-name'>File name: {props.jsonData.fileName}
                <img src="./images/delete.png" onClick={props.deleteData} className='delete-icon' alt="delete" />
            </h5>
            <ReactJson src={props.jsonData.fileData} />
        </div>
    )
}
