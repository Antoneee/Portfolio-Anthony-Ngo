import styles from "./PreviousIcon.module.css";

const PreviousIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles["previous-icon"]} h-6 w-6`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <linearGradient id="gradient" x2="1" y2="1">
        <stop offset="0%" stopColor="#4776e6" />
        <stop offset="100%" stopColor="#8e54e9" />
      </linearGradient>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
};

export default PreviousIcon;
