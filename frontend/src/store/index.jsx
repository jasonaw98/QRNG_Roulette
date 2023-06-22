import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { grid } from "./grid";
import { wheel } from "./wheel";

const useStore = create(
  devtools((set, get) => ({
    contractAddress: "0x2cA9FBCa93E7F296B4b4f75b673003CE44361180",

    wheel: wheel(set, get),
    grid: grid(set, get),

    errors: [],
    setErrors: (errors) => set({ errors: errors }),
  }))
);

export default useStore;
