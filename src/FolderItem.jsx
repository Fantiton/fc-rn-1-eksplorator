import { useState } from "react"
import "./FolderItem.css"

function FolderItem(){
    const [isExpanded, setIsExpanded] = useState(false)

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
            </div>
        </>
    )
}

export default FolderItem