import { FC, SVGProps } from 'react';

type TMilitaryAwardIcon = SVGProps<SVGSVGElement>

const MilitaryAwardIcon: FC<TMilitaryAwardIcon> = ({ ...restProps }) => (
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
      d='M8.50006 10.5L7.50006 8H2.00006L4.48006 13.788C4.63438 14.148 4.89102 14.4548 5.21812 14.6702C5.54521 14.8857 5.92838 15.0003 6.32006 15H8.50006M15.5001 10.5L16.5001 8H22.0001L19.5201 13.788C19.3657 14.148 19.1091 14.4548 18.782 14.6702C18.4549 14.8857 18.0717 15.0003 17.6801 15H15.5001M8.00006 13C8.00006 14.0609 8.42149 15.0783 9.17163 15.8284C9.92178 16.5786 10.9392 17 12.0001 17C13.0609 17 14.0783 16.5786 14.8285 15.8284C15.5786 15.0783 16.0001 14.0609 16.0001 13C16.0001 11.9391 15.5786 10.9217 14.8285 10.1716C14.0783 9.42143 13.0609 9 12.0001 9C10.9392 9 9.92178 9.42143 9.17163 10.1716C8.42149 10.9217 8.00006 11.9391 8.00006 13Z'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>

);

export default MilitaryAwardIcon;
