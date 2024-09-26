import { FC, PropsWithChildren } from 'react';
import { DeviceFrameset } from 'react-device-frameset';

import 'react-device-frameset/styles/marvel-devices.css';
import 'react-device-frameset/styles/device-emulator.css';

import './MacbookFrame.css';

// import 'react-device-frameset/styles/marvel-devices.min.css';

export const MacbookFrame: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="frame">
      <DeviceFrameset
        zoom={1} // Controls the size of the frame
        device="MacBook Pro">
        {children}
      </DeviceFrameset>
    </div>
  );
};
