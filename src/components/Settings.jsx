import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import {
  Stack,
  Box,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export default function Settings({ data, actions }) {
  const { title, target, usePenalty } = data;

  const {toggleSettings, update, remove} = actions

  const [sessionsNumber, setSessionsNumber] = useState(target);
  const [practiceTitle, setPracticeTitle] = useState(title);
  const [shouldUsePenalty, setShouldUsePenalty] = useState(usePenalty);
  const [sessionsNumberError, setSessionsNumberError] = useState(false);

  const checkIsNumber = (val) => /^[0-9]+$/.test(val);

  const validateSessionsNumber = (val) =>
    val === '' || val === 0 || !checkIsNumber(val)
      ? setSessionsNumberError(true)
      : setSessionsNumberError(false);

  const handlePenaltyChange = () => setShouldUsePenalty((prev) => !prev);
  const handleTitleChange = (e) => setPracticeTitle(e.target.value);

  const handleNumberChange = (e) => {
    const val = e.target.value;
    validateSessionsNumber(val);
    setSessionsNumber(val);
  };

  const deleteTracker = () => remove(data.id)

  const updateTracker = () => {
    const newTarget = parseInt(sessionsNumber)
    const {target: oldTarget, left: oldLeft} = data
    const newData = {
      ...data,
      target: newTarget,
      title: practiceTitle,
      usePenalty: shouldUsePenalty,
      left: newTarget - oldTarget + oldLeft 
    }
    update(newData)
    toggleSettings()
  }

  return (
    <Box p={1} pr={0} pt={0}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        mb={1}
      >
        <TextField
          id="title"
          value={practiceTitle}
          onChange={handleTitleChange}
          label="Practice Title"
          variant="standard"
          size="small"
          fullWidth
        />
        <IconButton
          color="error"
          onClick={deleteTracker}
          disabled={sessionsNumberError}
          aria-label="settings"
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        <IconButton
          color="success"
          onClick={updateTracker}
          disabled={sessionsNumberError}
          aria-label="settings"
        >
          <CheckCircleOutlineIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <TextField
          id="sessions"
          value={sessionsNumber}
          onChange={handleNumberChange}
          error={sessionsNumberError}
          label="Number of Sessions"
          variant="standard"
          size="small"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={shouldUsePenalty}
              onChange={handlePenaltyChange}
            />
          }
          label="Use penalty"
          sx={{marginLeft: 1}}
        />
      </Stack>
    </Box>
  );
}
