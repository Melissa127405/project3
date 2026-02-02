import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function GroomOption({ option,setOptions }) {

    function handleDelete(id, GroomOption) {
        console.log ( id)
        console.log ( GroomOption)
        // comst result = Option.filter(option => option.id!== id);
        // setOptions(result);
        const results = options.filter(option => option.id!== id);
        setOptions(results);
    }

    return (
        <>
        <Table striped bordered hover>
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
                        <td><Button variant="danger" onClick={() => handleDelete(option.id, option)}>Delete</Button></td>
                    </tr>
                ))}

            </tbody>
         </Table>
        </>
    )
}


export default GroomOption;