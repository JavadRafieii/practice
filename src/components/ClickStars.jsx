import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';
import StarsRange from './StarsRangeMobile';
import StarIcon from '@mui/icons-material/Star';


function ClickStars() {

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={<StarsRange />}
                    placement="top"
                >
                    <Button onClick={handleTooltipOpen}>
                        <StarIcon sx={{ color: "#FDB022" }} />
                        <span className='font-Kalameh-regular text-base text-[#FDB022]'>۳</span>
                    </Button>
                </Tooltip>
            </div>
        </ClickAwayListener>
    );
};

export default ClickStars;