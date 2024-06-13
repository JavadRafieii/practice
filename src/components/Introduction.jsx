import { Vector } from "../icons/icons";

function Introduction() {
    return ( 
        <div className="pt-12">
            <h2 className="font-Kalameh-bold text-xl md:text-2xl text-[#101828] flex items-center gap-x-2">
                <Vector/>
                معرفی فراخوان
            </h2>
            <div className="my-5 md:my-10 md:pr-7">
                <p className="font-Kalameh-regular text-base text-[#475A67] leading-9">به تابستون چلنج خوش اومدی!</p>
                <p className="font-Kalameh-regular text-base text-[#475A67] leading-9">
                    تابستون چلنج برای همه‌ست. جونیور یا سنیور، محصل یا شاغل، بک یا فرانت، فرقی نداره؛ چون قراره تو تابستون‌چلنج به همه‌مون خوش بگذره و باهم تفریح کنیم.
                </p>
                <p className="font-Kalameh-regular text-base text-[#475A67] leading-9">
                    ۷ روز، ۷ چالش؛ هر روز با یک چالش متفاوت و باحال روبه‌رو میشی. سطح بعضی از چالش‌ها آسونه و بعضی‌هاش هم متوسط یا یکم سخته و خلاصه همه مدل چالشی داریم.
                </p>
            </div>
            <h3 className="font-Kalameh-bold text-xl md:text-2xl text-[#101828] flex items-center gap-x-2 mb-5 md:mb-10 md:pr-7">
                <Vector />
                ویدیوی معرفی فراخوان
            </h3>
            <figure className="md:px-7">
                <img src="/images/video.png" alt="..." className="w-full"/>
            </figure>
            <h3 className="font-Kalameh-bold text-xl md:text-2xl text-[#101828] flex items-center gap-x-2 my-5 md:my-10 md:pr-7">
                <Vector />
                سوالات متداول
            </h3>
        </div>
     );
};

export default Introduction;