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

export default function Progress({ data, actions }) {
  const { title, target, usePenalty, left } = data;

  const {toggleSettings, update} = actions

  const step = target - left;

  const moveProgress = () => {
    const newData = {
      ...data,
      left: data.left - 1,
      last: new Date().toISOString(),
    }
    update(newData)
  }

  const resetProgress = () => {
    const newData = {
      ...data,
      left: data.target,
      last: '',
    }
    update(newData)
  }

  const isCompleted = step === target;

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">{title}</Typography>
        <IconButton onClick={toggleSettings} aria-label="settings">
          <SettingsIcon />
        </IconButton>
      </Stack>
      <MobileStepper
        variant="progress"
        steps={target + 1}
        position="static"
        activeStep={step}
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
          onClick={resetProgress}
          disabled={step === 0}
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
          onClick={moveProgress}
          disabled={isCompleted}
        >
          Done
          <KeyboardArrowRight />
        </Button>
      </Stack>
    </>
  );
}
