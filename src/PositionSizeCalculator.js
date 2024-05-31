import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Card, CardContent, CardActions } from '@mui/material';

const PositionSizeCalculator = () => {
  const [accountSize, setAccountSize] = useState('');
  const [riskPercentage, setRiskPercentage] = useState('');
  const [stopLossPips, setStopLossPips] = useState('');
  const [positionSize, setPositionSize] = useState('');

  const pipValue = 10; // Pip value for XAUUSD

  const calculatePositionSize = () => {
    const riskAmount = (accountSize * (riskPercentage / 100)).toFixed(2);
    const positionSize = (riskAmount / (stopLossPips * pipValue)).toFixed(2);
    setPositionSize(positionSize);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2em' }}>
      <Card elevation={5}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            XAUUSD Position Size Calculator
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Account Size ($)"
              type="number"
              value={accountSize}
              onChange={(e) => setAccountSize(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Risk Percentage (%)"
              type="number"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Stop Loss (Pips)"
              type="number"
              value={stopLossPips}
              onChange={(e) => setStopLossPips(e.target.value)}
              margin="normal"
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={calculatePositionSize}
            fullWidth
          >
            Calculate
          </Button>
        </CardActions>
        {positionSize && (
          <CardContent>
            <Typography variant="h6" component="h2" color="secondary">
              Position Size: {positionSize} lots
            </Typography>
          </CardContent>
        )}
      </Card>
    </Container>
  );
};

export default PositionSizeCalculator;
