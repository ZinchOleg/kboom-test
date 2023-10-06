import type { TZTeamsState } from 'src/stores/teams/teamsSlice';

export const selectTeamsSetTeams = (state: TZTeamsState) => state.setTeams;
export const selectTeamsArray = (state: TZTeamsState) => state.teamsArr;
export const selectActiveTeam = (state: TZTeamsState) => state.activeTeam;
export const selectSetActiveTeam = (state: TZTeamsState) => state.setActiveTeams;
