import FileItem from "./fileItem";
import FolderItem from "./FolderItem";
import "./FileExplorer.css"

function FileExplorer({fileSystem}) {
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