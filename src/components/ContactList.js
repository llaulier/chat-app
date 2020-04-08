// src/components/ContactList.js
import React from "react";
import Contact from "./Contact.js";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    online: false,
  },
  {
    name: "Caroline Sutton",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    online: true,
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true,
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false,
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true,
  },
];
const ContactList = () => (
  <div>
    {users.map((item) => (
      <Contact name={item.name} image={item.avatar} online={item.online} />
    ))}
  </div>
);

export default ContactList;
