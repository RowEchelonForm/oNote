import { RootState, Theme, } from '~/types';
import { MutationTree, ActionTree, } from 'vuex';

export const state = (): RootState => ({
  theme: { value: 'light', },
});

export const mutations: MutationTree<RootState> = {
  setTheme(state: RootState, theme: Theme): void {
    state.theme = theme;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ commit, }, context) {
    const theme: Theme = { value: 'light', };
    commit('setTheme', theme);
  },
};
