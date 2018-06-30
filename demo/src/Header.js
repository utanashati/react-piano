import React from 'react';

function Header() {
  return (
    <div style={{ background: '#333' }}>
      <div className="container">
        <div className="text-sm-center text-white py-5">
          <h1>react-piano</h1>
          <p>
            A piano keyboard for React which supports custom sounds,<br className="d-none d-sm-block" />{' '}
            touch/click/keyboard events, and programmatic playback.
          </p>
          <div className="mt-4">
            <a
              className="btn btn-outline-light btn-lg"
              href="https://github.com/iqnivek/react-piano"
            >
              View docs on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
