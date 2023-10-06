import { FC, ComponentPropsWithoutRef } from 'react';

type TProgressBar = ComponentPropsWithoutRef<'div'> & {
  percentage: number;
  text: string;
}

const ProgressBar: FC<TProgressBar> = ({ percentage, text }) => (
  <div className='h-[18px] w-full bg-[#2B5D68] overflow-hidden rounded-r-[4px] border border-[#2CE5A7] relative'>
    <div
      style={ {
        width: `${percentage}%`,
      } }
      className='h-full bg-[#2CE5A7]'
    />
    <span className='text-white z-10 absolute text-[8px] top-[2px] font-bold left-1'>{ text }</span>
  </div>
);

export default ProgressBar;
