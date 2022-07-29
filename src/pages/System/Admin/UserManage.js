import './UserManage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
function UserAdmin() {
    return (
        <div className="container">
            <div className="row">
                <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>first Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>vietanhhappy99@gmail.com</td>
                            <td>Anh</td>
                            <td>Nguyễn Việt</td>
                            <td>Hà Nội</td>
                            <td>
                                <button className="btn-edit">
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </button>
                                <button className="btn-delete">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>vietanhhappy99@gmail.com</td>
                            <td>Anh</td>
                            <td>Nguyễn Việt</td>
                            <td>Hà Nội</td>
                            <td>
                                <button className="btn-edit">
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </button>
                                <button className="btn-delete">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserAdmin;
