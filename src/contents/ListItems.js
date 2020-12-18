import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Item from './Item';
const ListItems = ({ products }) => {
    const handleClick=(name)=>{alert(`the product name is ${name}`)}
    return (
        <div className='container'>
            <Table striped bordered hover variant="dark" style={{textAlign:'center' ,fontWeight:'bolder'}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((props, index)=><Item props={props} key={index} handleClick={handleClick} /> )}
                   
                </tbody>
            </Table>
        </div>
    )
}

export default ListItems
