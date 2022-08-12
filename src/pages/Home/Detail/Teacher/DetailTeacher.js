import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as axios from '~/services/adminService';
import './DetailTeacher.scss';

function DetailTeacher() {
    const { id } = useParams();
    const [state, setState] = useState({
        detailTeacher: {},
    });

    console.log('state', state);

    useEffect(() => {
        const fetchApi = async () => {
            let res = await axios.getDetailInforDoctor(id);
            if (res && res.errCode === 0) {
                setState({
                    detailTeacher: res.data,
                });
            }
        };
        fetchApi();
    }, [id]);

    let { detailTeacher } = state;

    return (
        <div className="doctor-detail-container">
            <div className="intro-doctor">
                <div
                    className="content-left"
                    style={{
                        backgroundImage: `url(${detailTeacher && detailTeacher.image ? detailTeacher.image : ''})`,
                    }}
                ></div>
                <div className="content-right">
                    <div className="up">{`${detailTeacher.lastName} ${detailTeacher.firstName}`}</div>
                    <div className="down">
                        {detailTeacher.Markdown && detailTeacher.Markdown.description && (
                            <span>{detailTeacher.Markdown.description}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="schedule-doctor">
                {/* <div className="content-left">
            <DoctorSchedule
                doctorIdFromParent={this.state.currentDoctorId}
            />

        </div>
        <div className="content-right">
            <DoctorExtraInfor
                doctorIdFromParent={this.state.currentDoctorId}
            />

        </div> */}
            </div>
            <div className="detail-infor-doctor">
                {detailTeacher && detailTeacher.Markdown && detailTeacher.Markdown.contentHTML && (
                    <div dangerouslySetInnerHTML={{ __html: detailTeacher.Markdown.contentHTML }}></div>
                )}
            </div>
            <div className="comment-doctor"></div>
        </div>
    );
}

export default DetailTeacher;
