function FileTree(){
    return (
        <>
            <ul>
                {
                    fileSystem.children.map(
                        (node) => {
                            if(node.type === "file") {
                                return <FileItem name={node.name} type={node.type} size={node.size}/>
                            } else {
                                return <FolderItem name={node.name} children={node.children}/>
                            }
                        }      
                    )
                }
            </ul>
        </>
    )
}

export default FileTree