import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import {
  Stack,
  Box,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const config = {
  title: 'Pranayama 8/2/8/2',
  numberOfSessions: 5,
  penalty: true,
};

export default function Settings({ closeSettings }) {
  const { title, numberOfSessions, penalty } = config;

  const [sessionsNumber, setSessionsNumber] = useState(numberOfSessions);
  const [practiceTitle, setPracticeTitle] = useState(title);
  const [usePenalty, setUsePenalty] = useState(penalty);
  const [sessionsNumberError, setSessionsNumberError] = useState(false);

  const checkIsNumber = (val) => /^[0-9]+$/.test(val);

  const validateSessionsNumber = (val) =>
    val === '' || val === 0 || !checkIsNumber(val)
      ? setSessionsNumberError(true)
      : setSessionsNumberError(false);

  const handlePenaltyChange = () => setUsePenalty((prev) => !prev);
  const handleTitleChange = (e) => setPracticeTitle(e.target.value);

  const handleNumberChange = (e) => {
    const val = e.target.value;
    validateSessionsNumber(val);
    setSessionsNumber(val);
  };

  return (
    <Box p={1} pr={0}>
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
          onClick={closeSettings}
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
              checked={usePenalty}
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
