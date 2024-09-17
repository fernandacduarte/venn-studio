import styles from './SimpleCard.module.css';

const SimpleCard = ({ children, backgroundColor = '' }: { children: React.ReactNode, backgroundColor?: string }) => {
  return (
    <div 
      className={`z-10 overflow-hidden h-full w-full rounded-3xl p-10 flex-grow bg-transparent relative hover:scale-[1.03] active:scale-95 transition-transform duration-300 cursor-pointer ${styles['blur-background']}`}
      // style={{ ...(backgroundColor ? { background: backgroundColor } : {}), boxShadow: 'rgba(149, 157, 165, 0.3) 0px 8px 24px' }}
      style={{ ...(backgroundColor ? { background: backgroundColor } : {}), boxShadow: 'rgba(149, 157, 165, 0.3) 0px 4px 24px' }}
    > 
      {children}
    </div>
  );
};

export default SimpleCard;