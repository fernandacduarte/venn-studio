import { IconArrowUpRight } from "@tabler/icons-react";
// import BlurCard from "../BlurCard/BlurCard";
import SimpleCard from "../SimpleCard/SimpleCard";
import Link from "next/link";
import styles from "./Contact.module.css"
import { AvailableNowIcon } from "../Icons/Icons";

const Contact = () => {
  return (
    // <BlurCard>
    // <BlurCard backgroundColor="rgba(127, 181, 187, 0.4)">
    // <SimpleCard backgroundColor="rgba(159, 140, 170, 0.8)">
    // <SimpleCard backgroundColor="linear-gradient(340deg, rgba(250, 250, 250, 0.2) 50%, rgba(250, 250, 250, 0.1) 100%)">
    <SimpleCard backgroundColor="rgba(255, 255, 255, 0.2)">
      <Link className={styles.parent} href="/contact">
        <div className="h-full flex flex-col justify-between items-center font-medium">
          <div className="w-full flex flex-col items-start">
            <div className="w-full flex justify-between items-center mt-[-12px]">
              <span className="text-[0.65rem] sm:text-xs min-[860px]:text-sm xl:text-base tracking-[0.05em] max-w-[15ch]">
                BOOK A CALL OR SEND A MESSAGE
              </span>
              <div className="mr-[-18px] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] rotate-45">
                <IconArrowUpRight size={'1em'} strokeWidth={1.2} />
              </div>
            </div>
            <div className="flex gap-2 items-center sm:absolute lg:static top-4 left-5">
              <AvailableNowIcon/>
              <span className="text-xs lg:text-sm text-slate-500">Available now</span>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <span className={`text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[2.5rem] ${styles.contact__highlight}`}>Contact</span>
          </div>
        </div>
      </Link>
    </SimpleCard>
  );
};

export default Contact;

