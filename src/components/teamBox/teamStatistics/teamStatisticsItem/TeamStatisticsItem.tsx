import { cn } from '@/utils/generalUtils';
import Image from 'next/image';
import { FC, ComponentPropsWithoutRef } from 'react';
import { SrcType } from 'types/generalTypes';
import plusIcon from '@/svg/plusIcon.svg';

type TTeamStatisticsItem = ComponentPropsWithoutRef<'div'> & {
  icon: SrcType;
  value: number | string;
  skull?: boolean;
}

const TeamStatisticsItem: FC<TTeamStatisticsItem> = ({
  icon,
  value,
  skull = false,
}) => (
  <div
    className='relative border h-[22px] border-[#587481] p-1 pl-2 rounded-r-[4px] flex items-center'
  >
    <div className={ cn('absolute top-[-3px] left-[-15px] w-[24px] h-[24px]', {
      'top-[-15px]': skull,
    }) }
    >
      <Image
        alt='stats item'
        src={ icon }
      />
    </div>
    <div className='absolute top-[-6px] cursor-pointer left-0 w-[12px] h-[12px]'>
      <Image
        alt='plus icon'
        src={ plusIcon }
      />
    </div>
    <span className='font-bold text-[12px]'>{ value }</span>
  </div>
);

export default TeamStatisticsItem;
