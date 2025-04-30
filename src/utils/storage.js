const secret_key = "pradumn_notes";

//main key- for local storage that will ge provided to each user, 
// to have their notes stored in their localStor

export const getNotes = () => {
  try {
    //get stored items using key
    const stored = localStorage.getItem(secret_key);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    throw new Error("There is an error! Try Again");
  }
};

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem(secret_key, JSON.stringify(notes));
  } catch (e) {
    throw new Error("There is an error! Try Again");
  }
};
