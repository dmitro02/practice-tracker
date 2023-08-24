import { useState } from 'react';
import {
  Paper,
  Stack,
  Box,
  Button,
  MobileStepper,
  IconButton,
  Typography,
} from '@mui/material';
import Progress from './Progress';
import Settings from './Settings';

export default function TrackerCard() {
  const [showSettings, setShowSettings] = useState(false);

  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);

  return (
    <Paper sx={{ padding: 1, height: 120 }}>
      {showSettings ? (
        <Settings closeSettings={closeSettings} />
      ) : (
        <Progress openSettings={openSettings} />
      )}
    </Paper>
  );
}
