import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Мое приложение
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" align="center" style={{ marginTop: '20px' }}>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          style={{ display: 'block', margin: '20px auto' }}
        >
          Открыть диалоговое окно
        </Button>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Диалоговое окно"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            В данном проекте была использованна библиотека Material-UI
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;