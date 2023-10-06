import React from 'react';
import Image from 'next/image';
import Logo from '@/svg/LogoKBOOM.svg';
import Twitter from '@/svg/Twitter.svg';
import Twitch from '@/svg/Twitch.svg';
import TikTok from '@/svg/TikTok.svg';
import YouTube from '@/svg/YouTube.svg';
import Instagram from '@/svg/Instagram.svg';
import Facebook from '@/svg/Facebook.svg';
import Discord from '@/svg/Discord.svg';

const Header = () => (
  <div className='w-full flex items-center justify-between py-6 px-36 border-b border-[#587481] '>
    <Image src={ Logo } alt='LogoKBOOM' />
    <div className='flex items-center gap-4'>
      <Image className='cursor-pointer' src={ Twitter } alt='Twitter-Logo' />
      <Image className='cursor-pointer' src={ Twitch } alt='Twitch-Logo' />
      <Image className='cursor-pointer' src={ TikTok } alt='TikTok-Logo' />
      <Image className='cursor-pointer' src={ YouTube } alt='YouTube-Logo' />
      <Image className='cursor-pointer' src={ Instagram } alt='Instagram-Logo' />
      <Image className='cursor-pointer' src={ Facebook } alt='Facebook-Logo' />
      <Image className='cursor-pointer' src={ Discord } alt='Discord-Logo' />
    </div>
  </div>
);

export default Header;
