import './App.jsx'
import FileItem from './fileItem.jsx'
import FolderItem from './FolderItem.jsx'



function FileTree(){
    return (
        <>
            <ul>
                {
                    fileSystem.children.map(
                        (node) => {
                            if(node.type === "file") {
                                return <FileItem name={node.name} type={node.type} size={node.size} key={node.id}/>
                            } else {
                                return <FolderItem name={node.name} children={node.children} key={node.id}/>
                            }
                        }      
                    )
                }
            </ul>
        </>
    )
}

export default FileTree