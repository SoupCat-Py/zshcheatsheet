import { useState } from "react";

// get :root
const root = document.querySelector(":root");

export default function Header() {
  // moon svg
  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );

  // sun svg
  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="size3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );

  // init button state
  const [isDarkMode, setDarkMode] = useState(true);

  // func to toggle dark mode
  const toggleIcon = () => {
    // change button icon
    setDarkMode(!isDarkMode);

    // set transition
    document.documentElement.style.setProperty(
      "--transition",
      "color 1s ease, background-color 1s ease",
    );

    // change :root class
    if (isDarkMode) {
      root?.classList.add("light");
    } else {
      root?.classList.remove("light");
    }

    // reset transition after 1s
    setTimeout(() => {
      document.documentElement.style.setProperty("--transition", "none");
    }, 1000);
  };

  return (
    <div className="d-flex flex-row bg-norm align-center p1 r1">
      <div className="d-flex flex-row f1 justify-start">
        <a
          className="btn bg-btn-dark color-text p05 r05 nodeco d-flex flex-row align-center justify-center"
          href="https://github.com/soupcat-py/codesheet2"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <span className="size4">project repo</span>
        </a>
      </div>

      <div className="d-flex flex-row f1 justify-center">
        <h1 className="size1 color-text margin0 padding0">
          Common&nbsp;Zshell&nbsp;Commands
        </h1>
      </div>

      <div className="d-flex flex-row f1 justify-end">
        <button
          className="btn bg-btn-dark color-text p05 r05 g025 d-flex flex-row align-center justify-center"
          onClick={toggleIcon}
        >
          {isDarkMode ? sun : moon}
        </button>
      </div>
    </div>
  );
}
