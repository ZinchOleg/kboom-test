import { FC, ComponentPropsWithoutRef } from 'react';
import Avatar from '@/svg/Avatar.svg';
import Image from 'next/image';
import ProgressBar from '@/components/progressBar/ProgressBar';
import TeamStatistics from '@/components/teamBox/teamStatistics/TeamStatistics';

type TTeamInfo = ComponentPropsWithoutRef<'div'> & {
  level: number;
  experience: number;
  tokens: number,
  gems: number,
  rating: number
}

const TeamInfo: FC<TTeamInfo> = ({
  experience,
  gems,
  level,
  rating,
  tokens,
}) => (
  <div
    className='p-3 border-[#587481] border rounded-[4px]'
  >
    <div className='flex gap-4 items-center'>
      <Image
        alt='avatar'
        src={ Avatar }
      />
      <h4 className='text-[#84F7D8] font-medium text-base'>
        Pseudo
      </h4>
    </div>
    <div className='flex mt-[12px] items-center'>
      <div className='w-6 h-6 bg-[#2CE5A7] text-[#262C3A] flex items-center justify-center rounded-[4px]'>
        { level }
      </div>
      <ProgressBar percentage={ (experience * 100) / 1000 } text={ `${experience}/1000` } />
    </div>
    <div className='mt-[12px]'>
      <TeamStatistics
        gems={ gems }
        rating={ rating }
        tokens={ tokens }
      />
    </div>
  </div>
);

export default TeamInfo;
