import { FC, ComponentPropsWithoutRef } from 'react';
import TeamStatisticsItem from '@/components/teamBox/teamStatistics/teamStatisticsItem/TeamStatisticsItem';
import goldCoinIcon from '@/svg/Gold_Coin.svg';
import gemIcon from '@/svg/Gem.svg';
import skullIcon from '@/svg/Skull.svg';

type TTeamStatistics = ComponentPropsWithoutRef<'div'> & {
  tokens: number,
  gems: number,
  rating: number
}

const TeamStatistics: FC<TTeamStatistics> = ({
  gems,
  rating,
  tokens,
}) => (
  <div
    className='flex justify-between pl-[15px]'
  >
    <TeamStatisticsItem
      icon={ goldCoinIcon }
      value={ tokens }
    />
    <TeamStatisticsItem
      icon={ gemIcon }
      value={ gems }
    />
    <TeamStatisticsItem
      icon={ skullIcon }
      value={ `${rating}/5` }
      skull
    />
  </div>
);

export default TeamStatistics;
