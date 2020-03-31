import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Contact
        name ="Rose Sutton"
        image = "https://randomuser.me/api/portraits/women/44.jpg"
        online = {true}
      />
      <Contact
        name ="Bill Rogers"
        image ="https://randomuser.me/api/portraits/men/42.jpg"
        online ={false}
      />
       <Contact
        name ="Everett Matthews"
        image ="https://randomuser.me/api/portraits/men/35.jpg"
        online ={true}
      />
    </div>
  );
}

export default App;
