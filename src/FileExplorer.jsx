import FileItem from "./fileItem";
import FolderItem from "./FolderItem";
import FileTree from "./FileTree";
import "./FileExplorer.css"

function FileExplorer({fileSystem}) {
    function display(child){
        if(child.type === "folder"){
            <>
                <p>{child.name}, {child.type}</p>
                {child.children.map(
                    (child) => display(child)
                )}
            </>
        } else {
            <>
                <p>{child.name}, {child.type}</p>
            </>
        }
    }

    return (
        <>
           {fileSystem.name}
           {fileSystem.type}
           {fileSystem.children.map(
            (child) => display(child)
           )}
        </>
    )
}

export default FileExplorer