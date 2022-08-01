import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as userService from '~/services/userService';
import './TableUser.scss';

function TableUser({ data }) {
    const [arrUsers, setArrUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await userService.getAllUsers('ALL');
            setArrUsers(response);
        };
        fetchApi();
    }, [data]);

    console.log('------>', arrUsers);
    return (
        <div className="container">
            <div className="row">
                <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>first Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers.map((item, index) => (
                            <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.phonenumber}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button className="btn-edit">
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </button>
                                    <button className="btn-delete">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableUser;
