import React, { useState } from "react";
import styled from "styled-components";
import { saveNote } from "../utils/storage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #e5eaf5;
  border-radius: 20px;
  gap: 20px;
  max-width: 550px;
  margin: 40px auto;
  padding: 40px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 18px;
  border: 1px solid #e5eaf5;
  border-radius: 15px;
  outline: none;
`;

const TextArea = styled.textarea`
   padding: 15px;
  font-size: 18px;
  border: 1px solid #e5eaf5;
  border-radius: 15px;
  outline: none;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  background: lightBlue;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
   opacity:0.5
  }
`;

const ErrorBanner = styled.div`
  padding: 10px;
  background: #ffe6e6;
  color: #cc0000;
  border: 1px solid #cc0000;
  border-radius: 15px;
`;
//in case any error from localstorage happens , 
// it shouws this error banner 

export default function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e)  => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  //i had added an async op in order to see other user, 
  // that theryre notes saving... text

  try {
    await new Promise((res) => setTimeout(res, 300)); 
    saveNote({ title, content });
    onNoteAdded();
    setTitle("");
    setContent("");
  } catch {
    setError("Could not save the note sorry!");
  }

  setLoading(false);
};

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorBanner>{error}</ErrorBanner>}
      {/* mostly  it will never occur, but if it does then 
      means user localstorage gets full or .. */}
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Content"
       
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">{loading ? "Saving...😍" : "Add Note"}</Button>
    </Form>
  );
}
