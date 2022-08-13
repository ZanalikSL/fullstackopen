import { useState } from "react";

import Person from "./components/person";
import PersonForm from "./components/personForm";
import Filter from "./components/filter";
import AreTheseObjectsEqual from "./utils/objectsEquajs";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    let result = persons.map((person) =>
      AreTheseObjectsEqual(person, newPerson)
    );
    if (!result.includes(true)) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newPerson?.name} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const filterdPersosn = !!filter
    ? persons.filter(
        (person) => person.name.toLowerCase() === filter.toLowerCase()
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      {filterdPersosn.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
