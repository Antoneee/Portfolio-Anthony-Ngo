import styles from "./DarkModeIcon.module.css";

const DarkModeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles["dark-mode-icon"]} h-6 w-6`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
};

export default DarkModeIcon;
