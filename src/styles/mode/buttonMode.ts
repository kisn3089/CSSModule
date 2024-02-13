type TButtonMode = {
  [index: string]: {
    width: string;
    height: string;
    backgroundColor: string;
    color: string;
    borderRadius: string;
    border: string;
    h_background?: string;
    h_color?: string;
    cursor: string;
  };
};

export const buttonMode: TButtonMode = {
  s: {
    width: "120px",
    height: "40px",
    backgroundColor: "#cd2640",
    color: "#222",
    borderRadius: "8px",
    border: "1px solid #222",
    h_background: "#222",
    h_color: "#cd2640",
    cursor: "pointer",
  },
  xs: {
    width: "180px",
    height: "50px",
    backgroundColor: "#ddd",
    color: "#fff",
    borderRadius: "12px",
    border: "1px solid #fff",
    cursor: "pointer",
  },
  lg: {
    width: "200px",
    height: "60px",
    backgroundColor: "skyblue",
    color: "#cd2640",
    borderRadius: "20px",
    border: "1px solid #cd2640",
    cursor: "none",
  },
};
