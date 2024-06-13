import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { styled } from '@mui/system';

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    padding: "0",
    [theme.breakpoints.up('sm')]: {

    },

}));

function Accordions() {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div className='md:pr-7'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ background: "#fcfcfd", boxShadow: "none", borderBottom: "1px solid #EAEEF0" }}>
                <StyledAccordionSummary
                    sx={{ flexDirection: "row-reverse", gap: 1 }}
                    expandIcon={expanded === 'panel1' ? <RemoveCircleOutlineOutlinedIcon /> : <AddCircleOutlineOutlinedIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h4 className='font-Kalameh-bold text-base md:text-lg text-[#1D2E39]'>پیش‌نیاز‌ها علمی برای شرکت در این فراخوان چیست؟</h4>
                </StyledAccordionSummary>
                <AccordionDetails>
                    <p className='font-Kalameh-regular text-base text-[#475A67] pr-5'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ background: "#fcfcfd", boxShadow: "none", borderBottom: "1px solid #EAEEF0" }}>
                <StyledAccordionSummary
                    sx={{ flexDirection: "row-reverse", gap: 1 }}
                    expandIcon={expanded === 'panel2' ? <RemoveCircleOutlineOutlinedIcon /> : <AddCircleOutlineOutlinedIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h4 className='font-Kalameh-bold text-base md:text-lg text-[#1D2E39]'>اینجا ناهار هم میدن یا نه؟</h4>
                </StyledAccordionSummary>
                <AccordionDetails>
                    <p className='font-Kalameh-regular text-base text-[#475A67] pr-5'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ background: "#fcfcfd", boxShadow: "none" }}>
                <StyledAccordionSummary
                    sx={{ flexDirection: "row-reverse", gap: 1 }}
                    expandIcon={expanded === 'panel3' ? <RemoveCircleOutlineOutlinedIcon /> : <AddCircleOutlineOutlinedIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h4 className='font-Kalameh-bold ttext-base md:text-lg text-[#1D2E39]'>دیگه چخبر؟</h4>
                </StyledAccordionSummary>
                <AccordionDetails>
                    <p className='font-Kalameh-regular text-base text-[#475A67] pr-5'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
        // <div>
        //     <Accordion
        //         expanded={expanded}
        //         onChange={handleExpansion}
        //         sx={{ background: "#fcfcfd", boxShadow: "none", borderBottom: "1px solid #EAEEF0" }}
        //     >
        //         <AccordionSummary
        //             sx={{ flexDirection: "row-reverse", gap: 1 }}
        //             expandIcon={expanded ?
        //                 <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: 30, color: "text-[#98A8B3]" }} /> :
        //                 <AddCircleOutlineOutlinedIcon sx={{ fontSize: 30, color: "text-[#98A8B3]" }} />}
        //             aria-controls="panel1-content"
        //             id="panel1-header"
        //         >
        //             <p className='font-Kalameh-bold text-lg text-[#1D2E39]'>پیش‌نیاز‌ها علمی برای شرکت در این فراخوان چیست؟</p>
        //         </AccordionSummary>
        //         <AccordionDetails>
        //             <p className='font-Kalameh-regular text-base text-[#475A67]'>
        //                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
        //             </p>
        //         </AccordionDetails>
        //     </Accordion>
        // </div>
    );
};

export default Accordions;