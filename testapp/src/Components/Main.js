import React, { useEffect, useState } from "react";

function Main() {
  const [list, setList] = useState([]);
  const [num, setNum] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  const setNumber = (e) => {
    setNum(e.target.value);
  };
  const handleSubmit = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${num}/comments`)
      .then((response) => response.json())
      .then((data) => setList(data));
  };

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          {item.postId}
          <br></br>
          {item.name}
          <br></br>
          {item.email}
        </div>
      ))}
      <input
        type="id"
        placeholder="Enter id"
        value={num}
        onChange={setNumber}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Main;
