import QuestIcon from '@/svg/QuestIcon';
import RewardIcon from '@/svg/RewardIcon';
import MilitaryAwardIcon from '@/svg/MilitaryAwardIcon';
import MapIcon from '@/svg/MapIcon';
import ShopIcon from '@/svg/ShopIcon';
import BellIcon from '@/svg/BellIcon';
import AccountIcon from '@/svg/AccountIcon';
import SettingsIcon from '@/svg/SettingsIcon';

import { FC, SVGProps } from 'react';

type TMenuArray = {
  icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
}[]

export const menuArray: TMenuArray = [
  { text: 'Quests', icon: QuestIcon },
  { text: 'Map', icon: MapIcon },
  { text: 'Reward', icon: RewardIcon },
  { text: 'Shop', icon: ShopIcon },
  { text: 'Military reward', icon: MilitaryAwardIcon },
  { text: 'Notifications', icon: BellIcon },
];

export const accountManagementArray: TMenuArray = [
  { text: 'Profile', icon: AccountIcon },
  { text: 'Settings', icon: SettingsIcon },
];
