import { IconArrowUpRight } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="font-[family-name:var(--font-panamera-medium)] w-full bg-transparent border-2 border-neutralDark rounded-3xl p-10 py-7 bg-neutralLight-300 flex flex-col justify-between hover:scale-[1.03] active:scale-95 transition-transform duration-300 cursor-pointer">
      <div className="w-full flex justify-between items-center">
        <span className="tracking-[0.05em] max-w-[15ch]">
          BOOK A CALL OR SEND A MESSAGE
        </span>
        <div className="mr-[-16px]">
          <IconArrowUpRight size={72} strokeWidth={1.5} />
        </div>
      </div>
      <div className="w-full flex justify-end items-center">
        <span className="text-5xl leading-[2.5rem]">Contact</span>
      </div>
    </div>
  );
};

export default Contact;