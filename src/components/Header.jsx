import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        width: 10,
        height: 10,
        right: 8,
        top: 8,
        background: "red"
    },
}));

function Header() {
    return (
        <nav className="bg-white p-5 border-b-[1px] border-[#EAEEF0]">
            <div className="grid grid-cols-3">
                <div className='flex items-center'>
                    <span className='xl:hidden'>
                        <MenuIcon sx={{ fontSize: 35 }} />
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <figure className="w-[120px]">
                        <img src="/images/logo.png" alt="..." className="w-full" />
                    </figure>
                </div>
                <div className="flex items-center justify-end">
                    <Box>
                        <StyledBadge variant="dot">
                            <NotificationsNoneOutlinedIcon sx={{ fontSize: 30, color: "#667085" }} />
                        </StyledBadge>
                    </Box>
                </div>
            </div>
        </nav>
    );
};

export default Header;