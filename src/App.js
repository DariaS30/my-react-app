import React, { useState } from 'react';

const initialContacts = [
  {
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442"
  },
  {
    id: 2,
    name: "Ervin Howell",
    phone: "010-692-6593 x09125"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    phone: "1-463-123-4447"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    phone: "493-170-9623 x156"
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    phone: "(254)954-1289"
  }
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleSave = () => {
    if (name.trim() && phone.trim()) {
      setContacts([...contacts, { id: contacts.length + 1, name, phone }]);
      setName('');
      setPhone('');
      setShowForm(false);
    }
  };

  return (
      <div className="App">
        <h1>Contacts</h1>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
              </tr>
          ))}
          </tbody>
        </table>
        {showForm ? (
            <div>
              <h2>Add New Contact</h2>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
        ) : (
            <button onClick={() => setShowForm(true)}>Add Contact</button>
        )}
      </div>
  );
}

export default App;

