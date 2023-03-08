/* eslint-disable react/no-unescaped-entities */
import { Avatar, Col, Row } from 'antd';
import coinImage from '../../assets/images/coin.png';
import useScrollToTop from '../../hooks/useScrollToTop';
import useTitle from '../../hooks/useTitle';
import LeagueList from '../../modules/league-list/components/LeagueList/LeagueList';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';
import banner from '../../assets/images/banner.png';

const HomePage = () => {
	useScrollToTop();
	useTitle(`${pageTitle.homePage} - ${defaultTitle}`);
	return (
		<div className='home-page'>
			<div className='banner'>
				<Row gutter={[24, 24]}>
					<Col lg={12} md={24} sm={24}>
						<img className='banner__image' src={banner} alt="" />
					</Col>
					<Col lg={12} md={24} sm={24}>
						<div className='d-flex justify-content-center flex-column h-100'>
							<h2 className='banner__title'>
								Orient Betting
							</h2>
							<p className='banner__description'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos, vero cumque illum dolorem ullam laborum nulla odio at soluta facere et enim amet? Tempora consequuntur nemo iste quisquam hic!
							</p>
						</div>
					</Col>
				</Row>
			</div>
			<Row gutter={[24, 24]}>
				<Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
					<div className="d-flex bg-dark rules">
						<Col md={24} lg={24} xl={16}>
							<h6 className='color-primary rules__title'>Rules</h6>
							<ul>
								<li>Everyone bet with the same amount</li>
								<li>The winner won't pay the bet amount</li>
								<li>The loser will have to pay the predetermined amount</li>
							</ul>
							<h6 className='color-primary rules__title'>There are 3 options to bet</h6>
							<div className='d-flex mb-2'>
								<div className='rules__block rules__block_home'>
									<p>Home Team</p>
								</div>
								<div className='rules__block rules__block_away'>
									<p>Away Team</p>
								</div>
								<div className='rules__block rules__block_draw'>
									<p>Draw</p>
								</div>
							</div>
						</Col>
						<Col xl={8} className='d-flex align-items-end justify-content-center'>
							<img className='rules__meme' src="https://s1.stickers.cloud/packs/a3133859-dcfc-419c-a8ea-94e6de3f6e4c/png/87e6f384-773a-49a4-8324-314153019778.png" alt="" />
						</Col>
					</div>
					<Row gutter={[12, 12]}>
						<Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
							<div className="bg-dark p-2 definition mt-1">
								<h6 className='color-primary definition__title'>Currency</h6>
								<div className="d-flex align-items-center">
									<h5>1</h5>
									<Avatar src={coinImage} className='left-icon ml-1' />
									<h5>= 1.000 VND</h5>
								</div>
							</div>
						</Col>
						<Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
							<div className="bg-dark p-2 definition mt-1">
								<h6 className='color-primary definition__title'>Definition</h6>
								<ul>
									<li>Home team: A team which is playing on its own ground.</li>
									<li>Away team: A team on the road and thus without the "home advantage".</li>
									<li>Handicap: Handicap score between home team and away team.</li>
									<li>Upcoming: Match which has not started, player can make a bet on that match.</li>
									<li>Live: Match which is in progress, player cannot place bet on that match.</li>
									<li>Past: Match which has ended. Players can know their bet of that match is win or lose.</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Col>
				<Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
					<LeagueList />
				</Col>
			</Row>
		</div>
	);
};

export default HomePage;
