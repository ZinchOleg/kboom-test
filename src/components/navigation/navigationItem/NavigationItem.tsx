import { cn } from '@/utils/generalUtils';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { FC } from 'react';
import { TTeam } from 'types/generalTypes';

type TNavigationItem = {
  team: TTeam;
  changeActiveTeamFunc: ({ id }: {id: number}) => void;
  activeTeamId: number | null;
}

const NavigationItem: FC<TNavigationItem> = ({ team, changeActiveTeamFunc, activeTeamId }) => {
  const searchParams = useSearchParams();
  return (
    <li
      className={ cn('w-[64px] h-[64px] rounded-full bg-transparent bg-[#587481] p-[1px] cursor-pointer hover:bg-[#85abbd]', {
        'p-[4px] bg-gradient-to-r from-[#FCE33E] to-[#BC7824]': activeTeamId === team.id,
      }) }
      onClick={ () => changeActiveTeamFunc({ id: team.id }) }
    >
      <div className='bg-[#262c3a] rounded-full w-full h-full flex items-center justify-center'>
        <Image
          quality={ 100 }
          alt='team image'
          src={ team.img }
          width={ 40 }
          height={ 40 }
        />
      </div>
    </li>
  );
};

export default NavigationItem;
