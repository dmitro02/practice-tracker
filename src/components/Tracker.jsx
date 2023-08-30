import { useState } from 'react';
import { Paper } from '@mui/material';
import Progress from './Progress';
import Settings from './Settings';

export default function Tracker({ data, actions }) {
  const [showSettings, setShowSettings] = useState(false);

  const {update, remove} = actions

  const toggleSettings = () => setShowSettings((prev) => !prev);

  const progressActions = {
    toggleSettings,
    update
  };

  const settingsActions = {
    toggleSettings,
    update,
    remove
  }

  return (
    <Paper elevation={2} sx={{ padding: 1, height: 120, marginTop: 2 }}>
      {showSettings ? (
        <Settings data={data} actions={settingsActions} />
      ) : (
        <Progress data={data} actions={progressActions} />
      )}
    </Paper>
  );
}
