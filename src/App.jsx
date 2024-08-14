import React,  { useState, useEffect } from 'react'
import GroupNotes from './components/GroupNotes';
import GroupList from './components/GroupList';
import CreateGroupPopup from './components/CreateGroupPopup';
import Right from './components/Right'
import './App.css'

function App() {
  const [groups, setGroups] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups'));
    if (storedGroups) {
      setGroups(storedGroups);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const handleCreateGroup = (groupName, color) => {
    const newGroup = { name: groupName, color: color, notes: [] };
    setGroups([...groups, newGroup]);
    setSelectedGroup(newGroup);
  };

  

  const handleAddNote = (groupName, note) => {
    const updatedGroups = groups.map(group => {
      if (group.name === groupName) {
        return { ...group, notes: [note, ...group.notes] };
      }
      return group;
    });
    setGroups(updatedGroups);
    setSelectedGroup(updatedGroups.find(group => group.name === groupName));
    
  };

  return (
    <div className="app">
      
      <div className="container">
        
        <GroupList groups={groups} setSelectedGroup={setSelectedGroup}  setShowPopup={setShowPopup}/>
        
        {selectedGroup ? (
          <GroupNotes group={selectedGroup} onAddNote={handleAddNote} />
        ) : (
          <Right />
        )}
      </div>
      <CreateGroupPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onCreate={handleCreateGroup}
        selected={()=>setSelectedGroup(null)}
      />
      
    </div>
  );
}

export default App;
