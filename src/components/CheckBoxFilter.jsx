import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { Cup } from '../icons/icons';

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    color: "#c4c4c4",
    borderRadius: "10px",
    padding: 0,
    "&.MuiButtonBase-root.Mui-checked": {
        color: "#1d2e39",
    }
}));

function CheckBoxFilter() {
    return (
        <>
            <p className='font-Kalameh-regular text-base text-[#1D2E39] mb-2'>تعداد ستاره‌ها</p>
            <div className="h-[50px] border border-[#c4c4c4] rounded-[10px] flex items-center gap-x-2 px-2">
                <StyledCheckbox />
                <Cup />
                <p className="font-Kalameh-regular text-base text-[#1D2E39]">فقط پیشنهاد‌های برنده</p>
            </div>
        </>
    );
};

export default CheckBoxFilter;