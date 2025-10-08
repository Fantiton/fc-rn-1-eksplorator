import { useState } from "react"
import "./FolderItem.css"
import FileItem from "./fileItem"

function FolderItem(){
    const [isExpanded, setIsExpanded] = useState(false)
    const files = [
        {id: 'ft1', name: 'skibidi', type: 'tekst', size: '1024', sizeUnit: "KB"}
    ]

    function handleExpansion(){
        setIsExpanded(!isExpanded)
        if(isExpanded){
        console.log("Folder jest rozwinięty")
        } else{
        console.log("Foler jest zwinięty")
        }
    }

    return (
        <>
            <div className="Folder">
                <p>Nazwa</p>
                <p>Ilość Elementów: ???</p>
                <p onClick={handleExpansion}>
                    {isExpanded ? "😊" : "😔"}
                </p>
            </div>
            <div className="folder-content">
                {isExpanded && files.map(
                    (node) => (
                        <FileTree fileSystem={node.children}/>    
                    )
                )}
            </div>
        </>
    )
}

export default FolderItem