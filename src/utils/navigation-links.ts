import {
    PieChartOutlined,
    SkinOutlined,
    TableOutlined,
    UserOutlined,
    TrophyOutlined,
} from '@ant-design/icons';
import { routes } from './config/routes';

export const navigationLinks = [{
    title: 'Home',
    path: routes.homePath,
},
{
    title: 'Match',
    path: routes.matchPath,
},
{
    title: 'Statistic',
    path: routes.userBettedStatisticPath,
}];

export const adminNavigationLinks = [
    {
        path: routes.adminPath,
        title: 'Overview',
        icon: PieChartOutlined,
    },
    {
        path: routes.adminMatchPath,
        title: 'Match',
        icon: TableOutlined,
    },
    {
        path: routes.adminLeaguePath,
        title: 'League',
        icon: TrophyOutlined,
    },
    {
        path: routes.adminUserPath,
        title: 'User',
        icon: UserOutlined,
    },
    {
        path: routes.adminTeamPath,
        title: 'Team',
        icon: SkinOutlined,
    },
];
