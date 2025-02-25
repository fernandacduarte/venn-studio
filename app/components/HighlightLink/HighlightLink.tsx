import styles from "./HighlightLink.module.css";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const HighlightLink = ({
    name,
    href
}:{
    name: string,
    href: string
}) => {
    return (
        <Link href={href}>
            <div className="w-full flex gap-2 items-center">
                <h2 className={`${styles.highlight}`}>
                    {name}
                </h2>
                <h2><IconArrowRight size={'1em'} stroke={2} /></h2>
            </div>
        </Link>        
    )
}

export default HighlightLink;