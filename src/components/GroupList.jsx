import React from "react";
import styles from "./GroupList.module.css";

const GroupList = ({ groups, setShowPopup, setSelectedGroup }) => {
  const getInitials = (name) => {
    const words = name.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={styles.sidebarContent}>
        {groups.map((group, index) => (
          <div
            key={index}
            className={styles.groupItem}
            onClick={() => {
              setSelectedGroup(group);
              const sidebar = document.querySelector(`.${styles.sidebar}`);

              if (sidebar) {
                if (sidebar.offsetWidth <= 434) {
                  sidebar.style.display = "none";
                }
              }
            }}
          >
            <div
              className={styles.groupIcon}
              style={{ backgroundColor: group.color }}
            >
              {getInitials(group.name)}
            </div>
            <div className={styles.name}>{group.name}</div>
          </div>
        ))}
        <button className={styles.btn} onClick={() => setShowPopup(true)}>
          +
        </button>
      </div>
    </aside>
  );
};

export default GroupList;
