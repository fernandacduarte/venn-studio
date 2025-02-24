import styles from "./Icons.module.css";

interface IconProps { className: string, stroke?: number }

export function IconAI ({ className } : IconProps ) {

    return (
        <div className={className}>
            <svg fill="currentColor" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 512 512" xmlSpace="preserve">
                <g>
                    <g>
                        <path d="M498.095,198.122c0-25.763-9.68-50.313-27.257-69.131c-13.197-14.129-29.915-24.039-48.274-28.848
                            c0.253-2.749,0.397-5.521,0.397-8.313C422.962,41.194,381.768,0,331.133,0C300.099,0,272.631,15.49,256,39.129
                            C239.369,15.49,211.901,0,180.867,0c-50.635,0-91.828,41.194-91.828,91.828c0,2.794,0.145,5.565,0.397,8.313
                            c-18.359,4.808-35.075,14.719-48.274,28.848c-17.578,18.819-27.257,43.37-27.257,69.132c0,21.486,6.731,41.427,18.185,57.837
                            c-11.804,16.895-18.185,37.001-18.185,57.919c0,46.95,32.11,86.538,75.522,97.967c-0.249,2.761-0.39,5.537-0.39,8.327
                            c0,50.635,41.194,91.828,91.828,91.828c31.035,0,58.503-15.49,75.133-39.129C272.631,496.51,300.099,512,331.133,512
                            c50.635,0,91.828-41.194,91.828-91.828c0-2.788-0.14-5.565-0.39-8.327c43.412-11.429,75.522-51.016,75.522-97.967
                            c0-20.919-6.382-41.025-18.185-57.919C491.365,239.549,498.095,219.608,498.095,198.122z M239.304,343.088v77.084
                            c0,32.221-26.216,58.437-58.437,58.437c-32.223,0-58.437-26.216-58.437-58.437c0-1.771,0.088-3.532,0.245-5.284
                            c25.807-1.92,50.123-13.714,67.616-33.029l-24.749-22.417c-12.857,14.195-31.206,22.337-50.343,22.337
                            c-37.442,0-67.902-30.461-67.902-67.901c0-11.892,3.075-23.392,8.834-33.519c16.639,11.985,37.042,19.055,59.068,19.055v-33.391
                            c-37.442,0-67.902-30.461-67.902-67.901c0-31.399,21.722-58.325,51.228-65.815c10.151,20.567,27.843,37.177,50.093,45.523
                            l11.728-31.264c-22.678-8.507-37.916-30.504-37.916-54.737c0-32.223,26.216-58.437,58.437-58.437s58.437,26.216,58.437,58.437
                            v77.084v23.211h-13.79v-23.211h-33.391v23.211h-23.211v33.391h23.211v13.79h-23.211v33.391h23.211v13.789h-23.211v33.391h23.211
                            v23.211h33.391v-23.211h13.79V343.088z M225.516,286.485v-60.969h60.969v60.969H225.516z M455.869,280.359
                            c5.759,10.128,8.834,21.628,8.834,33.519c0,37.442-30.461,67.901-67.902,67.901c-19.137,0-37.486-8.141-50.343-22.337
                            L321.71,381.86c17.494,19.314,41.809,31.107,67.616,33.029c0.157,1.751,0.245,3.513,0.245,5.284
                            c0,32.223-26.216,58.437-58.437,58.437s-58.438-26.214-58.438-58.437v-77.084v-23.211h13.789v23.211h33.391v-23.211h23.211
                            v-33.391h-23.211v-13.789h23.211v-33.391h-23.211v-13.79h23.211v-33.391h-23.211v-23.211h-33.391v23.211h-13.789v-23.211V91.828
                            c0-32.223,26.216-58.437,58.437-58.437s58.437,26.214,58.437,58.437c0,24.232-15.238,46.229-37.916,54.737l11.728,31.264
                            c22.251-8.347,39.942-24.957,50.094-45.523c29.506,7.491,51.228,34.416,51.228,65.815c0,37.441-30.461,67.901-67.902,67.901
                            v33.391C418.827,299.414,439.23,292.343,455.869,280.359z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

// export function IconBlockchain ({ className, stroke } : IconProps) {
//     return (
//         <div className={className}>
//             <svg width='100%' height='100%' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke='currentColor' strokeWidth={`${stroke || 1}`}><polyline points="48 8 16 24 16 40 48 56"/><polyline points="16 8 48 24 48 40 16 56"/><line x1="48" y1="24" x2="32" y2="32"/><line x1="16" y1="24" x2="32" y2="32"/><line x1="32" y1="48" x2="32" y2="32"/></svg>
//         </div>
//     )
// }

export const IconBlockchain = ({
    className
}: {
    className: string
}) => {
    return (
        <div className={className}>
            <svg width="100%" height="100%" viewBox="0 0 110 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_882_238)">
                <rect x="33" y="27.5" width="42" height="42" rx="9" stroke="currentColor" strokeWidth="6"/>
                <rect x="97" y="27.5" width="42" height="42" rx="9" stroke="currentColor" strokeWidth="6"/>
                <rect x="-31" y="27.5" width="42" height="42" rx="9" stroke="currentColor" strokeWidth="6"/>
                <line x1="78" y1="48.5" x2="94" y2="48.5" stroke="currentColor" strokeWidth="6"/>
                <line x1="14" y1="48.5" x2="30" y2="48.5" stroke="currentColor" strokeWidth="6"/>
                </g>
                <defs>
                <clipPath id="clip0_882_238">
                <rect width="110" height="96" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}


export const AvailableNowIcon = () => {
    return (
      <div className="relative">
        <div className={''}>
          <svg width="10" height="10" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_209_2)">
            <circle cx="52" cy="52" r="52" fill="#F03D3D"/>
            </g>
            <defs>
            <clipPath id="clip0_209_2">
            <rect width="104" height="104" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.dotFlashOut}>
          <svg width="10" height="10" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_209_2)">
            <circle cx="52" cy="52" r="52" fill="#F03D3D"/>
            </g>
            <defs>
            <clipPath id="clip0_209_2">
            <rect width="104" height="104" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>    
    )
  }