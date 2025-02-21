import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

// this is for onBoarding state

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHasOnboarded: () => {
        set((state) => {
          return {
            ...state,
            hasFinishedOnboarding: !state.hasFinishedOnboarding,
          };
        });
      },
    }),
    {
      name: "plantly-user-store", // our key for the store
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
