import FileItem from "./fileItem";
import FolderItem from "./FolderItem";
import "./FileExplorer.css"

function FileExplorer() {
    return (
        <>
            <FolderItem/>
            <FileItem/>
            <FileItem/>
            <FileItem/>
        </>
    )
}

export default FileExplorer