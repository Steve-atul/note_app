import React, { useState, useEffect, useRef } from 'react';
import styles from './CreateGroupPopup.module.css'

const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];
const CreateGroupPopup = ({ show, onClose, onCreate,selected }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  const handleSubmit = () => {
    onCreate(groupName,selectedColor);
    setGroupName('');
    setSelectedColor(colors[0]);
    onClose();
    selected();
  };

  if (!show) return null;
  

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent} ref={popupRef}>
        <h1>Create New Group</h1>
        <div className={styles.inp}>
            <h2>Group Name</h2>
        <input className={styles.txt}
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter Group Name"
        />
        </div>
        
        <div className={styles.colorSelection}>
            <h2>Choose Color</h2>
            <div className={styles.color}>
            {colors.map((color) => (
            <div
              key={color}
              className={`${styles.colorCircle} ${color === selectedColor ? styles.selected : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
            </div>
          
        </div>
        <button className={styles.create} onClick={handleSubmit} >Create</button>
        
      </div>
    </div>
  );
};

export default CreateGroupPopup;