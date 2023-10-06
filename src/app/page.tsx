'use client';

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import useTeamsStore from '@/stores/teams/teamsSlice';
import { selectActiveTeam, selectTeamsSetTeams } from '@/stores/teams/teamsSelectors';
import Image from 'next/image';
import TeamBox from '@/components/teamBox/TeamBox';
import getTeam from '../graphql/getTeam.gql';
import { TTeam } from '../../types/generalTypes';

if (process.env.NODE_ENV !== 'production') {
  loadDevMessages();
  loadErrorMessages();
}

type TQueryTeamsResponse = {
  allTeams: TTeam[],
}

export default function Home() {
  const { loading, data } = useQuery<TQueryTeamsResponse>(getTeam);
  const setTeams = useTeamsStore(selectTeamsSetTeams);
  const activeTeam = useTeamsStore(selectActiveTeam);
  // eslint-disable-next-line max-len
  useEffect(() => {
    if (data?.allTeams) setTeams({ teamsArr: data.allTeams });
  }, [ data, setTeams ]);

  if (loading) return <div className='w-screen h-screen flex items-center justify-center cursor-wait'> Loading... </div>;

  return activeTeam && (
    <TeamBox activeTeam={ activeTeam } />
  );
}
