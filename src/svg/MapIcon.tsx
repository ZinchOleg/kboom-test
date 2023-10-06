import { FC, SVGProps } from 'react';

type TMapIcon = SVGProps<SVGSVGElement>

const MapIcon: FC<TMapIcon> = ({ ...restProps }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke='#84F7D8'
    { ...restProps }
  >
    <path
      d='M9.00006 4L3.00006 7V20L9.00006 17M9.00006 4L15.0001 7M9.00006 4V17M15.0001 7L21.0001 4V17L15.0001 20M15.0001 7V20M15.0001 20L9.00006 17'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default MapIcon;
