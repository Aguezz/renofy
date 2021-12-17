import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@mui/material/Tooltip';

import { Button } from '../../../shared-components/Button';
import { Typography } from '../../../shared-components/Typography';

export const NotificationCard = () => {
  return (
    <div className="px-3 py-2 bg-white shadow-lg rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="Whatsapp"
          className="flex-skrink w-auto h-auto"
          style={{ maxWidth: '35px', maxHeight: '35px' }}
        />
        <div className="flex-1 flex flex-col gap-1 overflow-hidden">
          <div className="flex justify-between items-center">
            <Typography className="font-semibold">Agus Stiawan</Typography>
            <Typography size="sm" className="text-gray-500">
              19:30
            </Typography>
          </div>
          <Typography className="text-sm leading-5 truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            accusantium quibusdam nostrum veniam quasi dolorem!
          </Typography>

          <div className="flex justify-between items-center">
            <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-500 rounded-full">
              Samsung M20
            </span>
            <div className="flex justify-end">
              <Tooltip title="Show detail">
                <Button size="sm">
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </Tooltip>
              <Tooltip title="Delete this notification">
                <Button size="sm" color="error">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
