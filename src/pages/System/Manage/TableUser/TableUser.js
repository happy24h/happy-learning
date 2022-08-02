import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as userService from '~/services/userService';
import * as axios from '~/services/adminService';
import InputUser from '../InputUser';
import EditUser from '../EditUser';
import './TableUser.scss';

function TableUser() {
    const [loadApi, setLoadApi] = useState(true);
    const [layout, setLayout] = useState(true);
    const [arrUsers, setArrUsers] = useState([]);
    const [state, setState] = useState({ userEdit: {} });

    useEffect(() => {
        const fetchApi = async () => {
            const response = await userService.getAllUsers('ALL');
            setArrUsers(response);
        };
        fetchApi();
    }, [loadApi]);

    // Delete User
    const handleDeleteUser = async (user) => {
        console.log('click delete', user);
        try {
            await axios.deleteUserService(user.id);
            setLoadApi(!loadApi);
        } catch (e) {}
    };

    // Edit user
    const handleEditUser = (user) => {
        console.log('check edit user ', user);
        setState({
            userEdit: user,
        });
    };

    const doEditUser = async (user) => {
        try {
            await axios.editUserService(user);
            setLoadApi(!loadApi);
            setLayout(!layout);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            {layout ? (
                <InputUser loadApi={loadApi} setLoadApi={setLoadApi} />
            ) : (
                <EditUser currentUser={state.userEdit} editUser={doEditUser} />
            )}
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
                                    <button className="btn-edit" onClick={() => handleEditUser(item)}>
                                        <FontAwesomeIcon
                                            className="btn-icon"
                                            icon={faPencilAlt}
                                            onClick={() => setLayout(false)}
                                        />
                                    </button>
                                    <button className="btn-delete" onClick={() => handleDeleteUser(item)}>
                                        <FontAwesomeIcon className="btn-icon" icon={faTrash} />
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
