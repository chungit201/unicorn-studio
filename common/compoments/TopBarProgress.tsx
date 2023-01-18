import TopProgressBar from "react-topbar-progress-indicator";

TopProgressBar.config({
  barColors: {
    "0": "#e55f0a",
    "1.0": "#e15f07"
  },
  shadowBlur: 1
});

const ProgressBarComponent = () => {
  // @ts-ignore
  return <TopProgressBar />;
};

export default ProgressBarComponent;
