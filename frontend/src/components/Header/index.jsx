import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти? ')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
    
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>projects by students</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/add-post">
                  <Button variant="contained">Добавить проект</Button>
                </a>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button variant="outlined">Войти</Button>
                </a>
                {/* <a href="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </a> */}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
