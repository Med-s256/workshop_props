import React from 'react'
const Item = ({ props, handleClick }) => {
    return (
        <>
            
                <tr>
                    <td><button onClick={()=>handleClick(props.name)}>afficher</button></td>
                    <td><img src={props.imgSrc} style={{ width: '200px', height: '200px' }} alt={props.name} /></td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                </tr>
            
        </>
                );
                }

                export default Item
