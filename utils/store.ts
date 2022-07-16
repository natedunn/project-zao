import create from 'zustand';

type State = {
  editor: {
    hovered: string;
    setHovered: (hovered: string) => void;
    selected: string;
    setSelected: (selected: string) => void;
  };
};

const useStore = create<State>((set) => ({
  editor: {
    hovered: null,
    selected: null,
    setHovered: (hovered) => set((state) => ({ editor: { ...state.editor, hovered } })),
    setSelected: (selected) => set((state) => ({ editor: { ...state.editor, selected } })),
  },
}));

export default useStore;
