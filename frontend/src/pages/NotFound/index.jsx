import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import styles from './NotFound.module.scss';
import HomeIcon from '@mui/icons-material/Home';

export const NotFound = () => (
  <div className={styles.root}>
    <h1>
      <span> ☹️ </span>
      <br />
      Ничего не найдено
    </h1>

    <p className={styles.description}>К сожалению, данная страница отсутствует</p>

    <Link to='/'>
      <Button variant='contained' type='submit' size='large' endIcon={<HomeIcon />}>
        Вернуться на главную
      </Button>
    </Link>
  </div>
);
