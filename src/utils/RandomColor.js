const hoverColor = ["greenyellow", "#9b59b6", "#e67e22", "skyblue", "#1abc9c"];
export const handleHoverEffect = () => {
  const randomNum = Math.trunc(Math.random() * 5 + 0);
  console.log(randomNum);
  return hoverColor[randomNum];
  // return hoverColor[randomNum]
};
