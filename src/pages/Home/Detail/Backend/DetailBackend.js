import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as axios from '~/services/adminService';
import _ from 'lodash';
import './DetailBackend.scss';
function DetailBackend() {
    const [state, setState] = useState({});
    let { id } = useParams();
    console.log('id--->', id);
    console.log('-----> ', state);

    useEffect(() => {
        const fetchApi = async () => {
            let res = await axios.getAllDetailClinicById({ id: id });
            if (res && res.errCode === 0) {
                let data = res.data;
                let arrBackendId = [];
                if (data && !_.isEmpty(res.data)) {
                    let arrData = data.doctorClinic;
                    if (arrData && arrData.length > 0) {
                        arrData.map((item) => {
                            return arrBackendId.push(item.doctorId);
                        });
                    }
                }
                setState({
                    dataDetailBackend: res.data,
                    arrBackendId: arrBackendId,
                });
                console.log(data);
            }
        };
        fetchApi();
    }, [id]);

    let { dataDetailBackend } = state;

    return (
        <div className="detail-specialty-container">
            <div className="detail-specialty-body">
                <div className="description-specialty">
                    {dataDetailBackend && !_.isEmpty(dataDetailBackend) && (
                        <>
                            <div>{dataDetailBackend.name}</div>
                            <div dangerouslySetInnerHTML={{ __html: dataDetailBackend.descriptionHTML }}></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailBackend;
