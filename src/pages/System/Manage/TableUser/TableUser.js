import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as userService from '~/services/userService';
import * as axios from '~/services/adminService';
import './TableUser.scss';

function TableUser({ data, setData }) {
    const [arrUsers, setArrUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await userService.getAllUsers('ALL');
            setArrUsers(response);
        };
        fetchApi();
    }, [data]);

    const handleDeleteUser = async (user) => {
        console.log('click delete', user);
        try {
            await axios.deleteUserService(user.id);
            setData(!data);
        } catch (e) {}
    };

    console.log('------>', arrUsers);
    return (
        <div className="container">
            <div className="row">
                <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
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
                                    <button className="btn-delete" onClick={() => handleDeleteUser(item)}>
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
