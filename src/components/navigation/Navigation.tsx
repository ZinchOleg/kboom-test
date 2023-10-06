'use client';

import { selectActiveTeam, selectSetActiveTeam, selectTeamsArray } from '@/stores/teams/teamsSelectors';
import useTeamsStore from '@/stores/teams/teamsSlice';
import { useEffect } from 'react';
import NavigationItem from '@/components/navigation/navigationItem/NavigationItem';

const Navigation = () => {
  const teamsArray = useTeamsStore(selectTeamsArray);
  const setActiveTeam = useTeamsStore(selectSetActiveTeam);
  const activeTeam = useTeamsStore(selectActiveTeam);

  useEffect(() => {
    if (teamsArray.length > 0) {
      setActiveTeam({ id: teamsArray[0].id });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ teamsArray ]);
  return (
    <nav className='border-r border-[#587481] p-6 nav-height'>
      <ul className='gap-3 flex flex-col'>
        { teamsArray.length > 0 && teamsArray.map((team) => (
          <NavigationItem
            team={ team }
            key={ team.id }
            changeActiveTeamFunc={ setActiveTeam }
            activeTeamId={ activeTeam?.id || null }
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
