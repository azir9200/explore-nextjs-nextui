export default function ChartIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`${isActive ? "stroke-primaryGreen" : "stroke-white"}`}
        d="M25.3333 25.3333H6.66666"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        className={`${isActive ? "fill-primaryGreen" : "fill-white"}`}
        d="M14.6667 18.6667V13.3334C14.6667 11.8606 13.4728 10.6667 12 10.6667C10.5273 10.6667 9.33334 11.8606 9.33334 13.3334V18.6667C9.33334 20.1395 10.5273 21.3334 12 21.3334C13.4728 21.3334 14.6667 20.1395 14.6667 18.6667Z"
      />
      <path
        className={`${isActive ? "fill-primaryGreen" : "fill-white"}`}
        d="M22.6667 18.6666V7.99998C22.6667 6.52722 21.4728 5.33331 20 5.33331C18.5272 5.33331 17.3333 6.52722 17.3333 7.99998V18.6666C17.3333 20.1394 18.5272 21.3333 20 21.3333C21.4728 21.3333 22.6667 20.1394 22.6667 18.6666Z"
      />
    </svg>
  );
}
