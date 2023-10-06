import { TTeam } from 'types/generalTypes';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TState = {
  teamsArr: TTeam[];
  activeTeam: TTeam | null;
}

type TActions = {
  setTeams: ({ teamsArr }: { teamsArr: TTeam[] }) => void;
  setActiveTeams: ({ id }: { id: number }) => void;
}

export type TZTeamsState = TState & TActions;

const useTeamsStore = create<TZTeamsState>()(
  devtools(immer((set) => ({
    teamsArr: [],
    activeTeam: null,
    setTeams: ({ teamsArr }) => set((state) => {
      state.teamsArr = teamsArr;
    }),
    setActiveTeams: ({ id }) => set((state) => {
      state.activeTeam = state.teamsArr.find((team) => team.id === id) || null;
    }),
  }))),
);

export default useTeamsStore;
