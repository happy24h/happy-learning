import './UserManage.scss';
import TableUser from './TableUser';
import InputUser from './InputUser';
function UserAdmin() {
    return (
        <div className="container">
            <InputUser />
            <TableUser />
        </div>
    );
}

export default UserAdmin;
