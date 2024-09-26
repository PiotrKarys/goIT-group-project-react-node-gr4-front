import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import { ExitModal } from '../ExitModal/ExitModal';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Users/AuthOperations';

export const UserMenu = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    setShowModal(false);
    dispatch(logOut());
  };

  return (
    <nav className={css.userMenuWrapper}>
      <div className={css.userMenuAvatar}>
        <p className={css.userMenuLetter}>U</p>
      </div>
      <p className={css.usernameText}>user</p>
      <div className={css.userMenuRectangle}></div>
      <button className={css.userMenuLogout} onClick={handleLogoutClick}>
        <svg
          className={css.logoutIcon}
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <p className={css.logoutText}>Exit</p>
      </button>

      {showModal && (
        <ExitModal onClose={handleCloseModal} onConfirm={handleConfirmLogout} />
      )}
    </nav>
  );
};
