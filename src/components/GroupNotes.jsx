import React, { useState, useEffect } from "react";
import styles from "./GroupNotes.module.css";
import arrow from "../assets/arrow.png";
import vector from "../assets/vector.png";
import back from '../assets/back.png'

const GroupNotes = ({ group, onAddNote }) => {
  const [newNote, setNewNote] = useState("");
  const notes = document.querySelector(`.${styles.notesContainer}`)

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      const currentDate = new Date();

      const dateOptions = { day: "numeric", month: "long", year: "numeric" };
      const date = currentDate.toLocaleDateString("en-GB", dateOptions);

      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const time = currentDate.toLocaleTimeString("en-US", timeOptions);

      const note = {
        text: newNote,
        date: date,
        time: time,
      };

      onAddNote(group.name, note);

      setNewNote("");
    }
  };

  const getInitials = (name) => {
    const words = name.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
  };

  return (
    <div className={styles.notesContainer}>
        
      <div className={styles.header}>
        
        <div
          className={styles.groupIcon}
          style={{ backgroundColor: group.color }}
        >
          {getInitials(group.name)}
        </div>
        <p className={styles.groupName}>{group.name}</p>
      </div>
      <div className={styles.notesListContainer}>
        <div className={styles.notesList}>
          {group.notes
            .slice()
            .reverse()
            .map((note, index) => (
              <div key={index} className={styles.note}>
                <p>{note.text}</p>
                <div className={styles.noteFooter}>
                  <span>{note.date}</span>

                  <span>{note.time}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.addNoteContainer}>
        <textarea
          type="text"
          placeholder="Enter your text here....."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className={styles.textInput}
        />

        <div className={styles.arrow} onClick={handleAddNote}>
          {newNote.length === 0 ? (
            <img src={arrow} alt="" />
          ) : (
            <img src={vector} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupNotes;
