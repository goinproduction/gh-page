import { Col, Row } from 'antd';
import { getDateTimeSpecific } from '../../../../utils/get-date-time-specific';

const Overview = () => {
    const { dateDay, dateMonth, dateYear } = getDateTimeSpecific(new Date());
    return (
        <div className="admin-overview">
            <Row gutter={[20, 20]}>
                <Col xxl={6} lg={12} md={24}>
                    <div className="admin-overview__box admin-overview__box_total-user">
                        <h2>Total User</h2>
                        <div className="d-flex justify-content-between">
                            <h1>20</h1>
                            <h1><i className="fas fa-users" /></h1>
                        </div>
                    </div>
                </Col>
                <Col xxl={6} lg={12} md={24}>
                    <div className="admin-overview__box admin-overview__box_budget">
                        <h2>Budget</h2>
                        <div className="d-flex justify-content-between">
                            <h1>20</h1>
                            <h1><i className="fas fa-sack-dollar" /></h1>
                        </div>
                    </div>
                </Col>
                <Col xxl={6} lg={12} md={24}>
                    <div className="admin-overview__box admin-overview__box_date">
                        <h2>Date</h2>
                        <div className="d-flex justify-content-between">
                            <h1> {dateDay}-{dateMonth}-{dateYear} </h1>
                            <h1><i className="fas fa-calendar-alt" /></h1>
                        </div>
                    </div>
                </Col>
                <Col xxl={6} lg={12} md={24}>
                    <div className="admin-overview__box admin-overview__box_matches">
                        <h2>Total Matches today</h2>
                        <div className="d-flex justify-content-between">
                            <h1>1</h1>
                            <h1><i className="fas fa-trophy-alt" /></h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Overview;
