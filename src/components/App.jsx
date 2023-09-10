import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [array,setArray] = useState([]);

function addItems(data,setContent) {
setArray((prevValue)=>{
  return [
    ...prevValue,
    data
  ]
 
})



console.log(array);

}


function toprevent(event) {
  event.preventDefault();

}
function createNote(text,index) {
  return (
  <Note todelete = {deletingItem} id = {index} key={index} title={text.title}  content={text.note} />
  )

}

function deletingItem(id) {
setArray(prevValue=>{
 return  prevValue.filter((newData,index)=>{
    return index !==id;
  })
})
}




  return (
    <div>
      <Header />
      <CreateArea addItem= {addItems} prevent={toprevent}/>
      
      {array.map(createNote)}


     


      <Footer />
    </div>
  );
}

export default App;
