import { Tag, Tooltip } from 'antd';
import coinImage from '../../../../../assets/images/coin.png';
import Button from '../../../../../components/Button/Button';
import Image from '../../../../../components/Image/Image';
import { matchStatus } from '../../../../../utils/constants/match-status';
import { getDateTimeSpecific } from '../../../../../utils/get-date-time-specific';
import { IMatchInfo, IMatchItem } from '../../interfaces/match-list';

type Props = {
  onEditMatch: (match: IMatchInfo) => void,
  onDeleteMatch: (match: IMatchInfo) => void,
}
export const matchColumns = ({ onEditMatch, onDeleteMatch }: Props) => {
  return [
    {
      title: () => (
        <p className='text-end'>Home Team</p>
      ),
      key: 'teamHome',
      render: (matchItem: IMatchItem) => (
        <div className='d-flex align-items-center justify-content-end'>
          <span> {matchItem.match.homeTeam.name} </span>
          <Image className='admin-match__team-logo' src={matchItem.match.homeTeam.logo} />
        </div>
      ),
    },
    {
      title: () => (
        <p className='text-center'>Score</p>
      ),
      key: 'score',
      render: (matchItem: IMatchItem) => {
        let handicapScoreHomeTeam = 0;
        let handicapScoreAwayTeam = 0;
        if (matchItem.match.handicap > 0) {
          handicapScoreAwayTeam = Math.abs(matchItem.match.handicap);
        }
        if (matchItem.match.handicap < 0) {
          handicapScoreHomeTeam = Math.abs(matchItem.match.handicap);
        }
        return (
          <div className='d-flex align-items-center flex-column'>
            <p className="admin-match__score">
              {matchItem.match.scoreTeamHome} : {matchItem.match.scoreTeamAway}
            </p>
            <p className="admin-match__handicap">
              {handicapScoreHomeTeam} (Handicap) {handicapScoreAwayTeam}
            </p>
          </div>
        );
      },
    },
    {
      title: () => (
        <p className='text-start'>Away Team</p>
      ),
      key: 'teamAway',
      render: (matchItem: IMatchItem) => (
        <div className='d-flex align-items-center'>
          <Image className='admin-match__team-logo' src={matchItem.match.awayTeam.logo} />
          <span> {matchItem.match.awayTeam.name} </span>
        </div>
      ),
    },
    {
      title: () => (
        <p className='text-center'>Start Time</p>
      ),
      key: 'date',
      render: (matchItem: IMatchItem) => (
        <div className="d-flex flex-column">
          <span className="text-center mt-1"> {getDateTimeSpecific(new Date(matchItem.match.startTime)).time} </span>
          <span className="text-center"> {getDateTimeSpecific(new Date(matchItem.match.startTime)).formattedDate} </span>
        </div>
      ),
    },
    {
      title: () => (
        <p className='text-center'>Status</p>
      ),
      key: 'status',
      render: (matchItem: IMatchItem) => (
        <div className='d-flex justify-content-center'>
          {matchItem.match.status === matchStatus.upComing && <Tag color='#5ac963'> Up coming </Tag>}
          {matchItem.match.status === matchStatus.live && <Tag color='#cf1322'> Live </Tag>}
          {matchItem.match.status === matchStatus.past && <Tag color='#595959'> Past </Tag>}
        </div>
      ),
    },
    {
      title: 'Bet amount',
      key: 'betAmount',
      render: (matchItem: IMatchItem) => (
        <div className="d-flex align-items-center admin-match__bet-amount">
          <p className='color-light'>
            {matchItem.match.betAmount
              ? matchItem.match.betAmount
              : '0'}
          </p>
          <img className='ml-1' src={coinImage} alt="" />
        </div>
      ),
    },
    {
      title: <p className='text-center'>Action</p>,
      key: 'action',
      width: 120,
      render: (match: IMatchItem) => {
        const { status } = match.match;
        return (
          <div className="d-flex justify-content-center">
            <Button
              isDisable={status === matchStatus.past}
              onClick={() => onEditMatch(match.match)}
              className='btn-edit'
              type='dark'
              htmlType='button'
            >
              <Tooltip zIndex={999} title={status === matchStatus.past ? 'Match ended is not able to edit' : 'Edit match'}>
                <i className='fal fa-pen' />
              </Tooltip>
            </Button>
            <Button
              onClick={() => onDeleteMatch(match.match)}
              className='ml-1 btn-delete'
              type='dark'
              htmlType='button'
            >
              <Tooltip zIndex={999} title='Delete match'>
                <i className='fal fa-trash-alt' />
              </Tooltip>
            </Button>
          </div>
        );
      },
    },
  ];
};
