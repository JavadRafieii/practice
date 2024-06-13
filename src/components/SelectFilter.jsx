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

function SelectFilter() {

    const [selected, setSelected] = useState('جدید‌ترین');

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <>
            <p className='font-Kalameh-regular text-base text-[#1D2E39] mb-2'>مرتب کردن براساس</p>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>

                    <StyledFormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">مرتب کردن براساس</InputLabel>
                        <StyledSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleChange}
                            value={selected}
                            label="یک مورد را انتخاب کنید"
                        >
                            <MenuItem value={"جدید‌ترین"}>
                                <span className="font-Kalameh-regular text-base text-[#475A67]">جدید‌ترین</span>
                            </MenuItem>
                            <MenuItem value={"تازه‌ترین"}>
                                <span className="font-Kalameh-regular text-base text-[#475A67]">تازه‌ترین</span>
                            </MenuItem>
                            <MenuItem value={"قدیمی‌ترین"}>
                                <span className="font-Kalameh-regular text-base text-[#475A67]">قدیمی‌ترین</span>
                            </MenuItem>
                        </StyledSelect>
                    </StyledFormControl>

                </ThemeProvider>
            </CacheProvider>
        </>
    );
};

export default SelectFilter;