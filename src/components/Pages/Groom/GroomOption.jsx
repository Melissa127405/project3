import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function GroomOption({ options, setOptions }) {
const [newOption, setNewOption] = React.useState({
  toDo: "Option",
  ears: "",
  tail: "",
  feet: "",
  body: "",
  head: ""
});

function handleChange(e) {
  const { name, value } = e.target;
  setNewOption(prev => ({ ...prev, [name]: value }));
}

function handleAdd() {
  const newItem = {
    id: Date.now(),
    ...newOption
  };

  setOptions(prev => [...prev, newItem]);

  // Clear the inputs
  setNewOption({
    toDo: "Option",
    ears: "",
    tail: "",
    feet: "",
    body: "",
    head: ""
  });
}

function handleDelete(id) {
    const results = options.filter(option => option.id !== id);
    setOptions(results);
  }

  return (
  <>
    <div className="table-responsive">
      <Table striped bordered hover className="table-shrink">
        <thead>
          <tr>
            <th>Option</th>
            <th>Ears</th>
            <th>Tail</th>
            <th>Feet</th>
            <th>Body</th>
            <th>Head</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {options.map(option => (
            <tr key={option.id}>
              <td>{option.toDo}</td>
              <td>{option.ears}</td>
              <td>{option.tail}</td>
              <td>{option.feet}</td>
              <td>{option.body}</td>
              <td>{option.head}</td>
              <td>
                <Button
                  variant="light"
                  onClick={() => handleDelete(option.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
  <tr>
    <td>{newOption.toDo}</td>
  <td>
    <input
      name="ears"
      value={newOption.ears}
      onChange={handleChange}
    />
  </td>
  <td>
    <input
      name="tail"
      value={newOption.tail}
      onChange={handleChange}
    />
  </td>
  <td>
    <input
      name="feet"
      value={newOption.feet}
      onChange={handleChange}
    />
  </td>
  <td>
    <input
      name="body"
      value={newOption.body}
      onChange={handleChange}
    />
  </td>
  <td>
    <input
      name="head"
      value={newOption.head}
      onChange={handleChange}
    />
  </td>
  <td>
    <Button variant="dark" onClick={handleAdd}>
      Add
    </Button>
  </td>
</tr>
     </Table>
    </div>
  </>
  );
}

export default GroomOption;