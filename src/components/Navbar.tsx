import * as React from 'react';

export interface INavbarProps {
}

export default function Navbar(props: INavbarProps) {
  return (
    <div>
      <div>
        <p>Tutorra</p>
      </div>
      <div>
        <p>About</p>
        <p>Pricing</p>
      </div>
    </div>
  );
}
