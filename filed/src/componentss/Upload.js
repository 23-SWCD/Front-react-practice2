import React,{useState} from 'react'

function Upload(props) {
  const [Content, setContent] = useState("");
  
  
  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr])
    setContent("");

  };
  return (
    <div>
      <input 
        type="text"
        value={Content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
        />
        <button 
        style={{marginTop: "1rem"}}
        onClick = {() => {
          onSubmit();
        }}
        >제출!</button>
    </div>
    
  );
}

export default Upload;
