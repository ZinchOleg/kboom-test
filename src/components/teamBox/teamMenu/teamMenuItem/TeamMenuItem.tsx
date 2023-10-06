import { FC, ComponentPropsWithoutRef, SVGProps } from 'react';

type TTeamMenuItem = ComponentPropsWithoutRef<'li'> & {
  Icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
}

const TeamMenuItem: FC<TTeamMenuItem> = ({
  text,
  Icon,
  ...restProps
}) => (
  <li
    className='w-full h-[40px] flex items-center px-3 py-2 rounded-[46px] group hover:bg-[#2CE5A7] transition-all duration-100'
    { ...restProps }
  >
    <div className='w-6 h-6 mr-2'>
      <Icon
        width='24px'
        height='24px'
        className='group-hover:stroke-[#262C3A]'
      />
    </div>
    <span className=' group-hover:text-[#262C3A] text-sm font-medium text-[#84F7D8]'>
      { text }
    </span>
  </li>
);

export default TeamMenuItem;
