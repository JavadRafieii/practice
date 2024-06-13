import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const theme = createTheme({ direction: 'rtl' });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const labels = {
    0.5: 'نیم ستاره',
    1: '۱ ستاره',
    1.5: '۱.۵ ستاره',
    2: '۲ ستاره',
    2.5: '۲.۵ ستاره',
    3: '۳ ستاره',
    3.5: '۳.۵ ستاره',
    4: '۴ ستاره',
    4.5: '۴.۵ ستاره',
    5: '۵ ستاره',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function StarsRange() {

    const [value, setValue] = useState(3);
    const [hover, setHover] = useState(-1);
    
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        width: "fit-content",
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <span className="font-Kalameh-regular text-base text-[#F79718]">
                        {value !== null && (
                            <Box sx={{ ml: 1 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </span>
                </Box>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default StarsRange;