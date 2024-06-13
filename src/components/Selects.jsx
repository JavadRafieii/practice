import CheckBoxFilter from "./CheckBoxFilter";
import SelectStars from "./SelectStars";
import SelectFilter from "./SelectFilter";
import { Filter, Vector } from "../icons/icons";

function Selects() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 py-10 mb-10 border-b-[1px] border-[#ececec] px-5 bg-white md:bg-transparent md:px-0">
            <div className="col-span-4 xl:col-span-5 hidden md:block">
                <CheckBoxFilter />
            </div>
            <div className="col-span-4 xl:col-span-5 hidden md:block">
                <SelectStars />
            </div>
            <div className="col-span-4 xl:col-span-2 hidden md:block">
                <SelectFilter />
            </div>
            <div className="md:hidden">
                <h3 className=" font-Kalameh-bold text-lg text-[#101828] flex items-center gap-x-2">
                    <Vector />
                    پیشنهاد‌ها
                </h3>
            </div>
            <div className="md:hidden flex items-center justify-end gap-x-1">
                <Filter />
                <span className="font-Kalameh-regular text-base text-[#101828]">فیلتر‌ها</span>
            </div>
        </div>
    );
};

export default Selects;