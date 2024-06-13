import { GoldCup } from "../icons/icons";
import Avatar from '@mui/material/Avatar';
import { Arrow } from "../icons/icons";
import Slider from "./Slider";
import StarsRange from "./StarsRange";
import ClickStars from "./ClickStars";

function Card() {

    return (
        <div className="w-full my-5 sm:my-10 py-5 border border-[#ececec] bg-gold md:rounded-[10px] md:p-5">
            <div className="flex flex-col md:flex-row gap-4 mb-5 px-5">
                <span className="bg-[#FFFAEB] font-Kalameh-regular text-sm text-[#FDB022] border border-[#FDB022] px-3 py-1 rounded-full flex items-center w-fit">
                    <GoldCup />
                    برنده فراخوان
                </span>
                <div className="flex items-center gap-x-4">
                    <span className="flex items-center gap-x-2">
                        <Avatar
                            alt="Remy Sharp"
                            src="/images/avatar.png"
                            sx={{ width: 30, height: 30 }}
                        />
                        <span className="font-Kalameh-bold text-sm text-[#1D2E39]">سمانه احمدی</span>
                    </span>
                    <span className="font-Kalameh-regular text-sm text-[#475A67] relative  before:absolute before:top-0 before:right-[-7px] before:content-[''] before:w-[1px] before:h-full before:bg-[#ececec]">۱۴۰۳/۰۱/۰۱</span>
                </div>
            </div>
            <div className="pb-5 px-5">
                <h4 className="font-Kalameh-bold text-lg text-[#1D2E39] mb-5">عنوان پیشنهادی که کاربر وارد کرده در این محل نمایش داده می‌شود...</h4>
                <p className=" font-Kalameh-regular text-base text-[#475A67]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجـ...</p>
            </div>
            <div className="border-y-[1px] border-[#ececec] pt-5 pb-5 relative">
                <Slider />
            </div>
            <div className="flex justify-between pt-5 px-5">
                <div className="md:hidden">
                    <ClickStars />
                </div>
                <div className="hidden md:block">
                    <StarsRange />
                </div>
                <span className="font-Kalameh-regular text-base text-[#101828] flex items-center gap-x-1">
                    مشاهده جزئیات
                    <Arrow />
                </span>
            </div>
        </div>
    );
};

export default Card;