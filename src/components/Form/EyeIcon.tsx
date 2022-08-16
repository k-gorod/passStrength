/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { IEye } from './types';

const EyeIcon: React.FC<IEye> = ({ isOpen, onClick }) => (
  <div className="pass_icon" onClick={onClick}>
    {
      (isOpen ? (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0049 4.5C13.7649 4.5 16.0049 6.74 16.0049 9.5C16.0049 10.15 15.8749 10.76 15.6449 11.33L18.5649 14.25C20.0749 12.99 21.2649 11.36 21.9949 9.5C20.2649 5.11 15.9949 2 10.9949 2C9.59488 2 8.25488 2.25 7.01488 2.7L9.17488 4.86C9.74488 4.63 10.3549 4.5 11.0049 4.5ZM1.00488 1.77L3.74488 4.51C2.08488 5.8 0.784883 7.52 0.00488281 9.5C1.73488 13.89 6.00488 17 11.0049 17C12.5549 17 14.0349 16.7 15.3849 16.16L15.8049 16.58L18.7349 19.5L20.0049 18.23L2.27488 0.5L1.00488 1.77ZM6.53488 7.3L8.08488 8.85C8.03488 9.06 8.00488 9.28 8.00488 9.5C8.00488 11.16 9.34488 12.5 11.0049 12.5C11.2249 12.5 11.4449 12.47 11.6549 12.42L13.2049 13.97C12.5349 14.3 11.7949 14.5 11.0049 14.5C8.24488 14.5 6.00488 12.26 6.00488 9.5C6.00488 8.71 6.20488 7.97 6.53488 7.3ZM10.8449 6.52L13.9949 9.67L14.0149 9.51C14.0149 7.85 12.6749 6.51 11.0149 6.51L10.8449 6.52Z" fill="#4E5865" />
        </svg>
      ) : (
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z" fill="#848998" />
        </svg>

      ))
    }
  </div>
);

export default EyeIcon;