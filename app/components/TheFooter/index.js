/**
 *
 * TheFooter
 *
 */

import React from 'react';
import { CFooter } from '@coreui/react';

function TheFooter() {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Indpro
        </a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Indpro
        </a>
      </div>
    </CFooter>
  );
}
export default TheFooter;
