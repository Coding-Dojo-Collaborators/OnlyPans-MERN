/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChromeTabs from './ChromeTabs';

export default () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='d-flex justify-content-center'>
      <AppBar
        position={''}
        elevation={0}
        style={{ backgroundColor: '#E6E8EB', width: 900 }}
      >
        <Toolbar>
          <ChromeTabs
            style={{ alignSelf: 'flex-end' }}
            tabs={[
              { label: 'Latest Published' },
              { label: 'Manage Posts' },
            ]}
            tabStyle={{
              bgColor: '#E6E8EB',
              selectedBgColor: '#ffffff',
              color: 'rgba(0,0,0,0.87)',
            }}
            tabProps={{
              disableRipple: true,
            }}
            value={index}
            onChange={(e, i) => setIndex(i)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};