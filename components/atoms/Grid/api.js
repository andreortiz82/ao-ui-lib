// Grid Props
// TODO: Split into Row and Col

export const api = {
  align: {
    control: {
      type: "top | middle | bottom | stretch | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'top' | 'middle' | 'bottom' | 'stretch'}",
    },
    description: "Vertical alignment",
    default: "top",
  },
  gutter: {
    control: {
      type: "number | object | array",
    },
    description:
      "Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time [horizontal, vertical]",
    default: "0",
  },
  justify: {
    control: {
      type: "start | end | center | space-around | space-between | space-evenly | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'}",
    },
    description: "Horizontal arrangement",
    default: "start",
  },
  wrap: {
    control: {
      type: "boolean",
    },
    description: "Auto wrap line",
    default: "true",
  },
};
