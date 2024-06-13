import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';
import { Content } from '../icons/icons';
import { Layout } from '../icons/icons';
import Steppers from './Steppers';
import Introduction from './Introduction';
import Accordions from './Accordions';
import Selects from './Selects';
import PaginatePage from './Paginate';

const StyledTabList = styled(TabList)(({ theme }) => ({
    ".MuiButtonBase-root": {
        fontFamily: "Kalameh-regular",
        fontSize: "1rem",
        color: "#98A8B3",
        gap: "5px",
    },
    ".MuiButtonBase-root.Mui-selected": {
        color: "#101828",
    },
    ".MuiTabs-indicator": {
        backgroundColor: "#101828",
    },
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
    padding: "20px",
    [theme.breakpoints.up('sm')]: {
        padding: "20px 10px"
    },
    [theme.breakpoints.up('md')]: {
        padding: "50px 0"
    },
}));


function Tabs() {

    const [value, setValue] = useState('1');

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box className="px-5 lg:px-10 xl:px-20 2xl:px-40 fixed bottom-0 right-0 z-50 w-full border-t-[1px] border-[#ececec] md:relative md:border-none" sx={{ background: "#fff", borderBottom: "1px solid #EAEEF0" }}>
                    <StyledTabList className="" onChange={handleChangeTabs}>
                        <Tab icon={<Content />} iconPosition="start" label="توضیحات" value="1" />
                        <Tab icon={<Layout />} iconPosition="start" label="پیشنهادها (۲۴۸)" value="2" />
                    </StyledTabList>
                </Box>
                <Box className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
                    <StyledTabPanel value="1">
                        <Steppers />
                        <Box className="max-w-[800px] mx-auto">
                            <Introduction />
                            <Accordions />
                        </Box>
                    </StyledTabPanel>
                    <TabPanel sx={{ background: "#FCFCFD", padding: 0 }} value="2">
                        <Selects />
                        <PaginatePage itemsPerPage={2} />
                    </TabPanel>
                </Box>
            </TabContext>
        </Box>
    );
};

export default Tabs;