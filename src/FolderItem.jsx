import { useState } from "react"
import "./FolderItem.css"
import FileItem from "./fileItem"

function FolderItem(){
    const [isExpanded, setIsExpanded] = useState(false)
    const files = [
        {id: 'ft1', name: 'skibidi', type: 'tekst', size: '1024', sizeUnit: "KB"}
    ]

    function handleExpansion(){
        setIsExpanded(!setIsExpanded)
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
                    (file) => (
                        <FileItem key={file.id} name={file.name} type={file.type} size={file.size} sizeUnit={file.sizeUnit}/>
                    )
                )}
            </div>
        </>
    )
}

export default FolderItem