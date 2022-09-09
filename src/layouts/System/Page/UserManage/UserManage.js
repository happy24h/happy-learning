import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CRUD_ACTIONS } from '~/utils/constant';
import CommonUtils from '~/utils/CommonUtils';
import * as actions from '~/store/actions/adminActions';
import { Buffer } from 'buffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal/Modal';
import './UserManage.scss';
// phóng to image
import TableManageUser from './TableManageUser';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
            action: '',
            userEditId: '',
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : '',
            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : '',
            });
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : '',
            });
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux;
            let arrRoles = this.props.roleRedux;
            let arrPositions = this.props.positionRedux;
            // rest value empty input
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : '',
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: '',
            });
        }
    }

    // js get file onchange
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let ObjectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: ObjectUrl,
                avatar: base64,
            });
        }
    };
    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true,
        });
    };

    handleModal = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: false,
        });
    };

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        let { action } = this.state;
        // let action = this.state.action

        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar,
            });
        }
        if (action === CRUD_ACTIONS.EDIT) {
            // FIRE REDUX EDIT USER
            this.props.editAUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar,
            });
        }
    };
    // fire redux action

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i]);
                break;
            }
        }
        return isValid;
    };

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    };

    handleEditUserFromParent = (user) => {
        let imageBase64 = '';
        if (user.image) {
            imageBase64 = Buffer.from(user.image, 'base64');
            // imageBase64 = new Buffer(user.image, 'base64').toString('binary');
        }

        this.setState({
            email: user.email,
            password: 'HARDCODE',
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            role: user.roleId,
            position: user.positionId,
            avatar: '',
            previewImgURL: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id,
        });
    };
    render() {
        // let imageBox = this.state.previewImgURL;
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;

        let isGetGenders = this.props.isLoadingGender;

        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, previewImgURL } =
            this.state;

        return (
            <div className="user-redux-container">
                <div className="title">Quản lý danh sách người dùng</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="l-12 my-3">Thêm người dùng mới</div>
                            <div className="l-12">{isGetGenders === true ? 'loading genders' : ''}</div>

                            <div className="form-group col l-3">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'email');
                                    }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className="form-group col l-3">
                                <label>Password</label>
                                <input
                                    className="form-control "
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'password');
                                    }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className="form-group col l-3">
                                <label>First name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={firstName}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'firstName');
                                    }}
                                />
                            </div>
                            <div className="form-group col l-3">
                                <label>Last name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={lastName}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'lastName');
                                    }}
                                />
                            </div>
                            <div className="form-group col l-3">
                                <label>Phone number</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'phoneNumber');
                                    }}
                                />
                            </div>
                            <div className="form-group col l-9">
                                <label>Address</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={address}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'address');
                                    }}
                                />
                            </div>
                            <div className="form-group col l-3">
                                <label>Gender</label>
                                <select
                                    className="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'gender');
                                    }}
                                    value={gender}
                                >
                                    {genders &&
                                        genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {item.valueVi}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="form-group col l-3">
                                <label>Position</label>
                                <select
                                    className="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'position');
                                    }}
                                    value={position}
                                >
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {item.valueVi}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="form-group col l-3">
                                <label>Role</label>
                                <select
                                    className="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'role');
                                    }}
                                    value={role}
                                >
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {item.valueVi}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="form-group col l-3">
                                <label>Avatar</label>
                                <div className="preview-img-container">
                                    <input
                                        id="previewImg"
                                        type="file"
                                        hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}
                                    />
                                    <label className="label-upload" htmlFor="previewImg">
                                        Tải ảnh <FontAwesomeIcon icon={faUpload} />
                                    </label>
                                    <div
                                        className="preview-image"
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    ></div>
                                </div>
                            </div>
                            <div className=" col l-12 my-3">
                                <button
                                    className={
                                        this.state.action === CRUD_ACTIONS.EDIT ? 'btn btn-warning' : 'btn btn-primary'
                                    }
                                    onClick={() => this.handleSaveUser()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT ? 'Edit' : 'Save'}
                                </button>
                            </div>
                            <div className=" col l-12 mb-5">
                                <TableManageUser
                                    handleEditUserFromParentKey={this.handleEditUserFromParent}
                                    action={this.state.action}
                                />
                            </div>
                        </div>
                    </div>
                    {/* phóng to ảnh image */}
                    {this.state.isOpen === true && <Modal handleModal={this.handleModal} dataImage={previewImgURL} />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGenderReact: state.admin.isLoadingGender,
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        editAUserRedux: (data) => dispatch(actions.editAUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
