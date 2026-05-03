import { useState } from "react";
import folder from "../assets/folder.png";
import file from "../assets/word.png";
import openFolder from "../assets/open-folder.png"

const FileExplorer = ({folderData}:any) => {
  const [showFolderData,setShowFolderData] = useState(false)
  const handleClick = () =>{
    setShowFolderData(!showFolderData)
  }
  return (
     <h4 className="container">
      {folderData.type === "folder" ? (showFolderData ? <img src={openFolder}/> :<img src={folder}/> ) : <img src={file}/>}
      <span onClick={handleClick} className="name">{folderData?.name}</span>

      {showFolderData && folderData?.children?.length > 0 &&
      folderData?.children.map((child:any,i:any)=>{
        return <FileExplorer folderData={child} key={i}/>
      })
      }
     </h4>
  )
}

export default FileExplorer