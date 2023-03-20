import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import styles from './ActionBtns.module.scss';
import axios from '../../../axios';

const ActionButtons = ({ type, text, fileUrl, setFileUrl }) => {
  const inputRef = React.useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();

      const files = event.target.files[0];
      formData.append(type, files);
      const { data } = await axios.post(`/upload-${type}`, formData);
      setFileUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании статьи 1');
    }
  };

  const onClickRemoveFile = () => {
    setFileUrl('');
  };

  return (
    <div className={styles.ButtonsWrapper}>
      <Button onClick={() => inputRef.current.click()} variant='outlined' size='large'>
        Загрузить {text}
      </Button>

      <input ref={inputRef} type='file' accept={`${type}/*`} onChange={handleChangeFile} hidden />

      {fileUrl && (
        <Button
          variant='contained'
          color='error'
          size='medium'
          endIcon={<DeleteIcon />}
          onClick={onClickRemoveFile}>
          Удалить {text}
        </Button>
      )}
    </div>
  );
};

export default ActionButtons;
