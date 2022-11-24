import { toast } from 'react-toastify';

export const notify = name => {
  toast.error(`Sorry, ${name} already exists`, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
