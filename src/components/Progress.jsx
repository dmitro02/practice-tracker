import { useState } from 'react';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';

import {
  Stack,
  Box,
  Button,
  MobileStepper,
  IconButton,
  Typography,
} from '@mui/material';

const config = {
  id: "12345",
  title: 'Pranayama 8/2/8/2',
  target: 5,
  usePenalty: true,
  left: 5,
  lastSessionDate: '2023-08-22T15:59:39.136Z',
};

export default function Progress({ openSettings }) {
  const { title, target, usePenalty, left } = config;

  const step = target - left;

  const [activeStep, setActiveStep] = useState(step);

  const next = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const reset = () => setActiveStep(0);

  const isCompleted = activeStep === target;

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">{title}</Typography>
        <IconButton onClick={openSettings} aria-label="settings">
          <SettingsIcon />
        </IconButton>
      </Stack>
      <MobileStepper
        variant="progress"
        steps={target + 1}
        position="static"
        activeStep={activeStep}
        sx={{ marginTop: 1 }}
        LinearProgressProps={{
          sx: {
            height: 12,
            width: '100%',
          },
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        mt={1}
        mb={0.5}
        alignItems="center"
        sx={{ height: 30 }}
      >
        <Button
          variant="outlined"
          size="medium"
          onClick={reset}
          disabled={activeStep === 0}
        >
          Reset
        </Button>
        <Box>
          {isCompleted && (
            <DoneIcon sx={{ marginTop: 1 }} fontSize="large" color="success" />
          )}
        </Box>
        <Button
          variant="outlined"
          size="medium"
          onClick={next}
          disabled={isCompleted}
        >
          Done
          <KeyboardArrowRight />
        </Button>
      </Stack>
    </>
  );
}
