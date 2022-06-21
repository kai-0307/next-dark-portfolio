import { useEffect, useState } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">My Portfolio</div>
          <div>
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>Kai’s Portfolio</h1>
            <h3>・名前：中尾 海（Nakao Kai）</h3>
            <h3>・出身：大阪府門真市</h3>
            <h3>・学歴：同志社大学文学部英文学科</h3>
            <h3>・趣味：ギター、カフェ巡り、英語、格闘技</h3>
            <h3>・Skills：JavaScript, TypeScript, React, Next.js, Go</h3>
            
            <button>
            <a href = "https://twitter.com/midnightsun0307">SNS</a>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}