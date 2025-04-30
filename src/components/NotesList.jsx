import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getNotes } from "../utils/storage";

const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 20px;
`;

const NoteCard = styled.div`
  margin-bottom: 15px;
  background:  #e5eaf5;
  padding: 25px ;
  border-left: 6px solid lightBlue;
  border-radius: 20px;

  h4 {
    margin-top: 5px;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: #666;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: black;
  font-size: 60px;
  margin-top: 20px;
`;

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    
      const storedNotes = getNotes();
      setNotes(storedNotes);
    
  }, []); 
  

  return (
    <Container>
      {notes.length === 0 ? (
        <EmptyMessage>No notes yet.... Add one!</EmptyMessage>
      ) : (
        notes.map((note, idx) => (
          <NoteCard key={idx}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
          </NoteCard>
        ))
      )}
    </Container>
  );
}
