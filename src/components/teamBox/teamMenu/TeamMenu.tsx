import { FC, ComponentPropsWithoutRef } from 'react';
import { menuArray } from '@/components/teamBox/teamMenu/constants';
import TeamMenuItem from '@/components/teamBox/teamMenu/teamMenuItem/TeamMenuItem';

type TTeamMenu = ComponentPropsWithoutRef<'ul'>

const TeamMenu: FC<TTeamMenu> = () => (
  <ul className='flex flex-col gap-3'>
    { menuArray.map((menuItem) => (
      <TeamMenuItem
        key={ menuItem.text }
        Icon={ menuItem.icon }
        text={ menuItem.text }
      />
    )) }
  </ul>
);

export default TeamMenu;
