import { Row } from 'antd';
import { IMatchItem } from '../../interfaces/match-list';
import MatchItem from '../MatchItem/MatchItem';

type Props = {
    data: Array<IMatchItem>;
};

const MatchList = (props: Props) => {
    const { data } = props;
    return (
        <div className="match-list">
            <Row gutter={[24, 24]}>
                {data.map((match) => <MatchItem key={match.match.id} data={match} />)}
            </Row>
        </div>
    );
};

export default MatchList;
