let config = {
  props: {
    selectable: true,
    selected: null
  },
  nodes: {
    root: {
      root: "rounded",
      selected: "bg-primary-trans"
    },
    container: {
      root: "ml-6"
    },
    listItem: {
      root: "flex items-center"
    },
    icon: {
      root: "pr-1"
    }
  }
};

export default config;
