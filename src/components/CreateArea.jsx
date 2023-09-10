import React , {useState} from "react";

function CreateArea(props) {

  const [actualcontent,setContent] = useState({
   title : "",
   note : ""
  })

function handleChange(event) {
  const name = event.target.name;
  // console.log(name);
  const value = event.target.value;


if(name === "title") {

setContent(prevValue =>{
  return( 
    {
    ...prevValue,
    title : value
  })


})

} else if(name === "content") {
  

setContent(prevValue =>{
  return(
    {
      ...prevValue,
      note : value
    }
  )
})

}

// console.log(content)



}





  return (
    <div>
      <form onSubmit={ props.prevent} >
        <input onChange ={handleChange} name="title" placeholder="Title" value = {actualcontent.title} />
        <textarea onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" value ={actualcontent.note} />
        <button onClick={()=>{
          props.addItem(actualcontent);
          setContent({
            title: "",
            note : ""
            }
            )
        }} type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
