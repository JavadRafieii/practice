import { Building } from "../icons/icons";
import Tabs from "../components/Tabs";
import Header from "../components/Header";

function HomePage() {
    return (
        <section className="max-w-[1990px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-12">
                <div className="hidden xl:block col-span-2 bg-white border-l-[1px] border-[#EAEEF0] p-5 sticky top-0 right-0 h-screen">
                    <div className="flex items-center gap-x-2">
                        <figure>
                            <img src="/images/logo2.png" alt="..." />
                        </figure>
                        <p className="font-Kalameh-bold textlg ">همكاران سيستم</p>
                    </div>
                </div>
                <div className="col-span-10 bg-[#FCFCFD]">
                    <Header />
                    <div className="bg-white px-5 lg:px-10 xl:px-20 2xl:px-40 pt-10 lg:pt-20 pb-10">
                        <span className="font-Kalameh-regular text-lg text-[#667985] flex items-center gap-x-2 mb-5">
                            <Building />
                            کارشناسی توسط شرکت
                        </span>
                        <h1 className="font-Kalameh-bold text-xl sm:text-2xl xl:text-3xl text-[#101828]">فراخوان حل چالش کد‌نویسی همکاران سیستم به زبان پایتون</h1>
                    </div>
                    <Tabs />
                </div>
            </div>
        </section>
    );
};

export default HomePage;