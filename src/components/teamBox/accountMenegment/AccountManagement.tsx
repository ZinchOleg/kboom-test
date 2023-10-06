import { FC, ComponentPropsWithoutRef } from 'react';
import { accountManagementArray } from '@/components/teamBox/teamMenu/constants';
import TeamMenuItem from '../teamMenu/teamMenuItem/TeamMenuItem';

type TAccountManagement = ComponentPropsWithoutRef<'div'>

const AccountManagement: FC<TAccountManagement> = ({ ...restProps }) => (
  <div
    { ...restProps }
  >
    <h3 className='text-xs font-normal text-white mb-3'>Account management</h3>
    <ul className='flex flex-col gap-3'>
      { accountManagementArray.map((item) => (
        <TeamMenuItem
          key={ item.text }
          Icon={ item.icon }
          text={ item.text }
        />
      )) }
    </ul>
  </div>
);

export default AccountManagement;
