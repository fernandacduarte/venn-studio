import { IconArrowUpRight } from "@tabler/icons-react";
// import BlurCard from "../BlurCard/BlurCard";
import SimpleCard from "../SimpleCard/SimpleCard";

const Contact = () => {
  return (
    // <BlurCard>
    // <BlurCard backgroundColor="rgba(127, 181, 187, 0.4)">
    // <SimpleCard backgroundColor="rgba(159, 140, 170, 0.8)">
    // <SimpleCard backgroundColor="linear-gradient(340deg, rgba(250, 250, 250, 0.2) 50%, rgba(250, 250, 250, 0.1) 100%)">
    <SimpleCard backgroundColor="rgba(255, 255, 255, 0.2)">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="w-full flex justify-between items-center mt-[-12px]">
          <span className="font-[family-name:var(--font-panamera-medium)] tracking-[0.05em] max-w-[15ch]">
            BOOK A CALL OR SEND A MESSAGE
          </span>
          <div className="mr-[-18px] rotate-45">
            <IconArrowUpRight size={64} strokeWidth={1.2} />
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <span className="font-[family-name:var(--font-panamera-medium)] text-5xl leading-[2.5rem]">Contact</span>
        </div>
      </div>
    </SimpleCard>
  );
};

export default Contact;