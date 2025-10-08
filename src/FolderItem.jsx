import { useState } from "react"
import "./FolderItem.css"

function FolderItem(){
    const [isExpanded, setIsExpanded] = useState(false)
    
    return (
        <>
            <div className="Folder">
                <p>Nazwa</p>
                <p>Ilość Elementów: ???</p>
            </div>
        </>
    )
}

export default FolderItem