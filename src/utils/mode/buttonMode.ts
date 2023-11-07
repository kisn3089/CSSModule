type TButtonMode = {
  [index: string]: {
    width: string;
    height: string;
    backgroundColor: string;
    color: string;
  };
};

export const buttonMode: TButtonMode = {
  s: {
    width: "120px",
    height: "40px",
    backgroundColor: "#fff",
    color: "#000",
  },
  xs: {
    width: "180px",
    height: "50px",
    backgroundColor: "#fff",
    color: "#000",
  },
  lg: {
    width: "200px",
    height: "60px",
    backgroundColor: "#fff",
    color: "#000",
  },
};
