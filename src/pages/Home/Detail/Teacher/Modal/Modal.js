import './Modal.scss';
// import ProfileTeacher from '../../Course/ProfileTeacher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal({ setModal }) {
    return (
        <div class="modal ">
            <div class="modal__inner">
                <div class="modal__header">
                    <p>Thông tin đặt lịch khám bệnh</p>
                    <span onClick={() => setModal(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </div>
                <div class="modal__body">
                    <div className="info-teacher">
                        {/* <ProfileTeacher 
                        /> */}
                    </div>
                    <form className="row">
                        <div className="col l-6 form-group">
                            <label>Họ và tên</label>
                            <input type="text" value="" className="form-control" />
                        </div>
                        <div className="col l-6 form-group">
                            <label>Số điện thoại</label>
                            <input type="text" value="" className="form-control" />
                        </div>
                        <div className="col l-6 form-group">
                            <label>Địa chỉ email</label>
                            <input type="text" value="" className="form-control" />
                        </div>
                        <div className="col l-6 form-group">
                            <label>Địa chỉ liên lạc</label>
                            <input type="text" value="" className="form-control" />
                        </div>
                        <div className="col l-6 form-group">
                            <label>Ngày sinh</label>
                            <input type="date" className="form-control" required />
                        </div>
                        <div className="col l-6 form-group">
                            <label>Giới tính</label>
                            {/* <input type="text" value="" className="form-control" /> */}
                            <select className="form-control">
                                <option selected>Choose...</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                            </select>
                        </div>
                        <div className="col l-12 form-group">
                            <label>Lý do khám</label>
                            <input type="text" value="" className="form-control" />
                        </div>
                    </form>
                </div>
                <div class="modal__footer">
                    <button>Xác nhận</button>
                    <button className="cancel" onClick={() => setModal(false)}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
