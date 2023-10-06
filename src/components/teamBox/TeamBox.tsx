import Image from 'next/image';
import { FC, ComponentPropsWithoutRef } from 'react';
import { TTeam } from 'types/generalTypes';
import TeamMenu from '@/components/teamBox/teamMenu/TeamMenu';
import TeamInfo from './teamInfo/TeamInfo';
import AccountManagement from './accountMenegment/AccountManagement';

type TTeamBox = ComponentPropsWithoutRef<'div'> & {
  activeTeam: TTeam;
}

const TeamBox: FC<TTeamBox> = ({ activeTeam }) => (
  <div className='flex flex-col gap-6 w-[250px] px-[10px] py-[36px] border-r h-full border-[#587481]'>
    <div className='flex items-center gap-3'>
      <Image
        alt='team logo'
        width={ 48 }
        height={ 48 }
        src={ activeTeam?.img }
      />
      <h2 className='text-white font-medium'>{activeTeam.name}</h2>
    </div>
    <TeamInfo
      experience={ activeTeam.experience }
      gems={ activeTeam.gems }
      level={ activeTeam.level }
      rating={ activeTeam.rating }
      tokens={ activeTeam.tokens }
    />
    <TeamMenu />
    <div className='mt-auto'>
      <AccountManagement />
    </div>
  </div>
);

export default TeamBox;
