import FileExplorer from "./Components/FileExplorer"
import data from "./data.json"
 
 const App = () => {
   return (
     <div>
      <FileExplorer folderData={data}/>
     </div>
   )
 }
 
 export default App