import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Theme = ({ open, setIsOpen }) => {
  const { theme, setTheme } = useTheme();
  const [color,setColor] = useState('#3771FE');

  const handleChangeColor = (e) => {
    setColor(e.target.value)
    const colorVariable = '--tp-theme-1';
    const colorVariable2 = '--tp-theme-2';
    document.documentElement.style.setProperty(colorVariable, color);
    document.documentElement.style.setProperty(colorVariable2, color);
  }

  return (
    <>
      <div className={`theme__settings transition-3 ${open ? 'theme-setting-opened' : ''}`}>
        <div className="theme__settings-btn">
          <button onClick={() => setIsOpen(true)} type="button"
            className="theme__settings-expand" id="theme-setting-toggle">
            <i className="fa-solid fa-gear"></i>
          </button>
          <button onClick={() => setIsOpen(false)} type="button" className="theme__settings-close"
            id="theme-setting-close">
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>
        <div className="theme__settings-wrapper text-center">

          <div className="theme__switch mb-30">
            <h4 className="theme__settings-title">Select your desired theme</h4>
            {/* <!-- light dark moode switcher start --> */}
            <div className="my_switcher setting-option">
              <ul>
                <li>
                  <button onClick={() => setTheme('dark')} href="#" data-theme="dark" className="setColor dark theme__switcher-btn">
                    <i className="fa-light fa-moon"></i> Dark
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme('light')} href="#" data-theme="light" className="setColor light theme__switcher-btn">
                    <i className="fa-light fa-brightness-low"></i> Light
                  </button>
                </li>
              </ul>
            </div>
            {/* <!-- light dark moode switcher end --> */}
          </div>

          <div className="theme__settings-color">
            <h4 className="theme__settings-title">Select your favorite color</h4>

            <div className="theme__settings-color-input">
              <input onChange={handleChangeColor} type="color" data-color="color" value={color} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme;