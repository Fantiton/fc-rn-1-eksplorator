import FileItem from "./fileItem";
import FolderItem from "./FolderItem";
import FileTree from "./FileTree";
import "./FileExplorer.css"

function FileExplorer({fileSystem}) {
    return (
        <>
            <FileTree />
        </>
    )
}

export default FileExplorer