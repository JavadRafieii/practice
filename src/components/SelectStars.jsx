import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Star } from '../icons/icons';

const theme = createTheme({ direction: 'rtl' });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const StyledSelect = styled(Select)(({ theme }) => ({
    height: "50px",
    borderRadius: "10px",
    background: "#fff",
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #475A67",
    },

    ".MuiFormLabel-root": {
        fontFamily: "Kalameh-regular",
        color: "#98A8B3",
        lineHeight: "19px",
    },
    ".MuiInputLabel-root.Mui-focused": {
        color: "#98A8B3",
        fontSize: "15px"
    },
    ".MuiPaper-root": {
        boxShadow: "none"
    }
}));

function SelectStars() {

    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <>
            <p className='font-Kalameh-regular text-base text-[#1D2E39] mb-2'>تعداد ستاره‌ها</p>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>

                    <StyledFormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">یک مورد را انتخاب کنید</InputLabel>
                        <StyledSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleChange}
                            value={selected}
                            label="یک مورد را انتخاب کنید"
                        >
                            <MenuItem value={"همه پیشنهاد‌ها"}>
                                <span className="font-Kalameh-regular text-base text-[#475A67]">همه پیشنهاد‌ها</span>
                            </MenuItem>
                            <MenuItem value={5}>
                                <span className="flex items-center gap-x-1">
                                    <Star /><Star /><Star /><Star /><Star />
                                    <span className="font-Kalameh-regular text-base text-[#faaf00]">۵ ستاره</span>
                                </span>
                            </MenuItem>
                            <MenuItem value={4}>
                                <span className="flex items-center gap-x-1">
                                    <Star /><Star /><Star /><Star />
                                    <span className="font-Kalameh-regular text-base text-[#faaf00]">۴ ستاره</span>
                                </span>
                            </MenuItem>
                            <MenuItem value={3}>
                                <span className="flex items-center gap-x-1">
                                    <Star /><Star /><Star />
                                    <span className="font-Kalameh-regular text-base text-[#faaf00]">۳ ستاره</span>
                                </span>
                            </MenuItem>
                            <MenuItem value={2}>
                                <span className="flex items-center gap-x-1">
                                    <Star /><Star />
                                    <span className="font-Kalameh-regular text-base text-[#faaf00]">۲ ستاره</span>
                                </span>
                            </MenuItem>
                            <MenuItem value={1}>
                                <span className="flex items-center gap-x-1">
                                    <Star />
                                    <span className="font-Kalameh-regular text-base text-[#faaf00]">۱ ستاره</span>
                                </span>
                            </MenuItem>
                            <MenuItem value={"یک مورد را انتخاب کنید"}>
                                <span className="font-Kalameh-regular text-base text-[#475A67]">بدون ستاره</span>
                            </MenuItem>
                        </StyledSelect>
                    </StyledFormControl>

                </ThemeProvider>
            </CacheProvider>
        </>
    );
};

export default SelectStars;