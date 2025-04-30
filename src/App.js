import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import styled from "styled-components";


//I am using STYLED COMPONENTS OF REACT for styling


const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  background: #e5eaf5;
  border-radius: 15px
`;


const NavButton = styled.button`
 border: 2px solid #e5eaf5;
  border-radius: 15px;
  cursor: pointer;

  padding: 10px 15px;
  font-size: 15px;
  background: ${({ active }) => active ? "lightBlue" : "white"};
color: ${({ active }) => active ? "white" : "black"};
 
  &:hover {
    background: lightBlue;
  }
`;

//Imp note- Ihavent used ReactRouter for Navigation, routing,
//i have Implemented very basic manual navigation using set State

function App() {
  const [page, setPage] = useState("add");
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
  <Nav>
  <NavButton active={page === "add"} onClick={() => setPage("add")}>
    Add Note
  </NavButton>
  <NavButton active={page === "view"} onClick={() => setPage("view")}>
    View Notes
  </NavButton>
</Nav>


{/* Implement hard refresh re-mount */}   
        {page === "add" && <AddNote onNoteAdded={() => setRefresh(!refresh)} />}
        {page === "view" && <NotesList key={refresh} />}
      
    </div>
  );
}

export default App;
