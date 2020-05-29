import React from 'react';

import {createDevTools} from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
      changePositionKey='ctrl-q'
      changeMonitorKey='ctrl-m'>
      <LogMonitor theme="tomorrow"/>
      <ChartMonitor />
      <SliderMonitor />
    </DockMonitor>,
);

export default DevTools;
