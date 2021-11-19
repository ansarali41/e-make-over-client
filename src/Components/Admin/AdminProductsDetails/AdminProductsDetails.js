import React from 'react';
import 'react-dropdown/style.css';

const AdminProductsDetails = ({ serviceList }) => {
    const { title, _id, description, price } = serviceList;

    // delete user task or event from admin
    const deleteRegistrationOfUser = id => {
        fetch(`https://sleepy-basin-54466.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Successfully Deleted');
                }
            });
    };

    return (
        <tr>
            <th>{title}</th>
            <td>{description}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-primary" onClick={() => deleteRegistrationOfUser(_id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default AdminProductsDetails;
