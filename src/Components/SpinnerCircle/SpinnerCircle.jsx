import { CircleLoader } from "react-spinners";

const SpinnerCircle = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-330px)]">
      <CircleLoader color="#179800" loading size={70} speedMultiplier={1} />
    </div>
  );
};

export default SpinnerCircle;
