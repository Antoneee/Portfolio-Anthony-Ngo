import styles from "./CheckIcon.module.css";

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles["check-icon"]} h-6 w-6`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <linearGradient id="gradient" x2="1" y2="1">
        <stop offset="0%" stopColor="#4776e6" />
        <stop offset="100%" stopColor="#8e54e9" />
      </linearGradient>
      ;
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default CheckIcon;
