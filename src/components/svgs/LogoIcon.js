import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },

  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 0.5,

      ease: "easeInOut",
    },
  },
};

const LogoIcon = () => {
  return (
    <svg
      id="SVGRoot"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 240 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="layer1">
        <g
          id="layer1-3"
          transform="matrix(4.7682 0 0 4.7682 -500.66 -494.01)"
          fill="#fff"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            id="path7989"
            transform="scale(.26458)"
            d="m408.22 495.18c-4.1896-0.55192-9.0336-4.3668-10.546-8.3053-0.74187-1.9322-0.72947-5.0806 0.0288-7.3236 1.2062-3.5678 4.0074-6.9198 7.8885-9.4394 4.9429-3.209 8.2714-4.4064 18.637-6.7043 1.3215-0.29295 2.7826-0.76365 3.2469-1.046 0.95505-0.5808 0.95711-0.4295-0.052-3.8304-1.0937-3.6861-1.5347-7.3461-1.5294-12.694 8e-3 -7.8912 1.0226-12.894 3.7406-18.443 3.2315-6.5973 6.7343-10.155 12.899-13.102 3.378-1.6148 4.7791-2.0203 6.9448-2.0097 4.5082 0.0221 9.3707 1.9154 12.014 4.6781 3.48 3.6366 4.6775 7.4183 4.6662 14.735-7e-3 4.7515-0.45948 8.0826-1.5357 11.315-0.42535 1.2774-2.4111 5.6508-4.4128 9.7188l-3.6394 7.3963 1.9464-0.16519c4.3474-0.36898 4.8098-0.85178 18.461-19.277l7.9683-10.755 0.30513-4.4194c0.16782-2.4307 0.31285-5.684 0.32229-7.2296 0.0202-3.2985-0.0995-3.4963-2.0978-3.4674-2.0919 0.0302-3.1866 0.78158-7.3584 5.05-3.6054 3.689-4.4163 4.3356-4.4163 3.5215 0-0.69903 2.5458-4.1489 4.5523-6.169 3.792-3.8176 6.8757-5.5782 9.7893-5.5892 2.0722-8e-3 3.3468 0.62789 4.2091 2.0992 0.59494 1.0152 0.64211 1.3268 0.64052 4.2304-2e-3 3.7067-0.64303 11.43-2.0304 24.462-0.55516 5.2151-1.0786 10.846-1.1632 12.513-0.14091 2.7767-0.11189 3.0817 0.34654 3.6427l0.50032 0.61225 2.9615-0.55758c1.6288-0.30667 3.5426-0.77836 4.2527-1.0482 0.71016-0.26984 1.3311-0.45077 1.3798-0.40206 0.0487 0.0487-0.19436 0.42482-0.54018 0.83579-0.8957 1.0645-3.3881 2.318-6.4631 3.2503l-2.6516 0.80403-0.0789 4.0075c-0.20927 10.625 1.463 18.365 4.591 21.248 1.8964 1.748 3.7534 1.9397 6.2985 0.64992 1.3954-0.70712 4.2154-3.3176 4.2154-3.9022 0-0.2097-0.39813-1.0424-0.88474-1.8505-1.2274-2.0383-1.6693-3.4627-1.8284-5.8934-0.31308-4.7844 1.5383-7.5447 6.3258-9.4318 2.1968-0.86592 3.5278-1.0113 5.4865-0.59926 2.3518 0.49473 7.3383 2.1278 12.038 3.9427 4.2373 1.6362 4.6125 1.6536 5.6048 0.26008 0.86432-1.2138 2.3499-4.5143 2.2546-5.009-0.10521-0.54635-0.99422-0.76639-3.2608-0.80709-4.9575-0.089-10.779-3.0076-13.6-6.8184-1.9321-2.61-2.2997-5.4183-1.255-9.5883 0.6537-2.6093 0.50032-3.6755-1.0119-7.0339-3.1049-6.8955-3.3488-16.705-0.55317-22.244 1.588-3.1457 6.1321-7.8736 8.8482-9.206 1.3937-0.68368 4.534-0.89725 6.6707-0.45367 2.1752 0.45157 4.2945 1.6327 5.5973 3.1195 2.2458 2.5631 4.3629 7.535 5.4129 12.712 1.0935 5.3915 0.28849 20.388-1.4333 26.701-0.38904 1.4266-0.3858 1.5019 0.0795 1.8507 0.70239 0.52655 2.6142 0.27432 3.1756-0.41896 0.76706-0.94728 1.4857-3.2624 3.0226-9.7374 2.7774-11.701 5.5901-18.818 10.084-25.516 2.7274-4.065 5.598-6.7836 8.6913-8.2311 5.0689-2.372 9.325 0.73115 11.499 8.3841 0.75189 2.6466 0.92434 6.9792 0.40378 10.144-1.7751 10.793-9.3264 21.978-19.365 28.682-2.1551 1.4393-7.4962 4.1624-10.297 5.2497-1.8362 0.71287-1.8655 0.73877-2.6769 2.3683-0.45123 0.90614-1.284 2.9544-1.8506 4.5517-2.2548 6.3569-2.3118 7.3265-0.52452 8.9216 1.9226 1.716 13.742 7.2188 20.672 9.624 6.9368 2.4078 11.527 3.2863 16.327 3.1247 3.893-0.1311 4.5613-0.4041 7.2738-2.9715 3.1357-2.968 3.8261-2.9017 1.6753 0.16093-3.1904 4.543-7.3901 6.4745-14.038 6.4563-9.2032-0.0252-19.921-4.2279-32.15-12.607-1.7092-1.1711-3.2503-2.1841-3.4247-2.251-0.1796-0.0689-1.0527 0.80659-2.0136 2.019-3.2313 4.0775-6.0637 6.1015-10.153 7.2556-1.5794 0.44572-2.6569 0.5663-5.0394 0.56394-4.9039-5e-3 -9.0158-1.0033-12.567-3.0515l-1.9832-1.1439-0.55375 0.49768c-2.8314 2.5447-5.0482 4.2384-6.4493 4.9275-1.5132 0.74425-1.8906 0.82289-3.9497 0.82289-2.107 0-2.3937-0.0635-3.8482-0.85233-3.8756-2.1019-6.0408-6.079-6.8912-12.658-0.13465-1.0417-0.3209-4.8771-0.4139-8.5232l-0.16908-6.6291h-16.605l-5.7362 5.4532c-8.8901 8.4516-8.9708 8.5836-5.2124 8.5304 3.8592-0.0546 6.5588-1.4406 11.124-5.7112 3.7981-3.5532 4.777-4.1177 3.0176-1.7402-2.3449 3.1687-6.7085 6.4746-10.498 7.9533-2.1938 0.85605-3.2476 1.1078-5.8846 1.4059-2.7486 0.31075-5.4525 1.5247-10.199 4.579-7.2857 4.6882-12.791 7.818-15.989 9.0904-5.2197 2.0767-12.96 3.303-17.268 2.7356zm14.237-4.3458c3.377-0.79865 5.4489-1.5867 8.9437-3.4018 4.9422-2.5668 10.639-6.6771 11.95-8.6216 0.70315-1.0434 0.70815-1.1897 0.0527-1.5405-0.88364-0.47291-1.855-0.0414-5.2086 2.3137-7.6562 5.3767-13.526 8.0721-19.233 8.8318-2.1879 0.29125-8.947 0.18131-10.078-0.16393-1.6585-0.50627 0.42867-0.99724 5.8715-1.3812 6.8532-0.48342 10.528-1.2873 14.389-3.148 3.044-1.4669 7.3394-4.4021 10.594-7.2395 0.23941-0.2087-0.14823-0.64219-6.5539-7.3292l-3.5489-3.7048-5.7987 1.3695c-11.577 2.7343-16.624 4.5012-20.646 7.2279-2.7609 1.872-3.8753 4.4079-3.6685 8.3476 0.19569 3.7284 1.3824 5.2434 5.8885 7.5177 3.0188 1.5236 4.4973 1.7715 9.849 1.6513 3.7097-0.0833 5.0334-0.2174 7.1973-0.72918zm98.815-3.4407c4.8248-1.234 9.1812-4.2559 10.687-7.413 0.56426-1.1833 0.30823-2.0371-0.84603-2.8214-1.7219-1.1701-2.2242-0.968-5.6591 2.2768-2.3683 2.2372-4.9583 4.0782-6.9252 4.9224-1.3929 0.59785-3.3738 0.90765-4.0685 0.63628-0.41171-0.16085-0.39415-0.21241 0.17316-0.50842 0.34724-0.18119 1.0291-0.41381 1.5152-0.51695 2.8709-0.60906 9.5857-5.559 10.386-7.6562 0.22896-0.60003 0.16846-0.75107-0.53752-1.3419-0.87892-0.73558-3.9189-1.9602-6.7753-2.7292-4.0423-1.0884-9.1501-1.177-11.055-0.19172-2.2094 1.1425-4.6441 5.0416-4.6445 7.4379-2.6e-4 1.687 0.31005 1.6984 1.7184 0.063 0.59801-0.69441 1.2515-1.2626 1.4521-1.2626 0.50982 0 0.44951 0.9253-0.14582 2.2373-0.27941 0.61575-0.49953 1.6448-0.49953 2.3352 0 1.0552 0.12786 1.3759 0.8809 2.2094 1.0828 1.1985 3.2622 2.2081 5.4366 2.5184 2.9785 0.42512 6.8101 0.34108 8.9076-0.19537zm-74.67-11.786c2.9746-2.0013 11.439-10.192 11.84-11.458 0.13868-0.43694 0.0669-0.68565-0.2688-0.9311-1.5721-1.1496-4.1437 0.62373-9.4026 6.4836-1.1842 1.3195-2.5891 3.0702-3.122 3.8904-1.5967 2.4575-1.14 3.423 0.95301 2.0148zm87.883-1.4906c0.75361-0.75361 1.3919-2.1388 2.5374-5.507 1.3328-3.9186 1.1082-4.8968-1.0678-4.6515-1.8688 0.21064-3.0061 1.6265-4.4213 5.5042-1.0055 2.7551-0.94494 3.9138 0.24639 4.7141 1.1121 0.74708 1.9162 0.72931 2.7053-0.0598zm-91.154-1.1043c3.6195-2.9109 8.5767-9.009 8.0354-9.8849-0.65501-1.0598-18.051 1.8388-18.051 3.0078 0 0.458 1.7029 2.797 3.118 4.2828 1.7372 1.8239 4.2398 3.5772 5.1059 3.5772 0.31323 0 1.1195-0.44233 1.7918-0.98294zm-3.1972-11.653c11.274-0.77016 13.141-1.2012 15.218-3.5133 1.9765-2.2001 5.77-9.8542 7.5161-15.165 1.3675-4.1593 1.86-7.4265 1.6893-11.205-0.16436-3.6375-0.623-5.5593-2.057-8.6192-1.7805-3.7992-4.4474-6.4762-7.8457-7.8755-1.8148-0.74725-2.4542-0.86131-4.8936-0.8729-4.8419-0.023-9.1914 2.0635-13.305 6.3828-4.5752 4.8034-7.6412 12.165-8.7163 20.927-0.36323 2.9602-0.14944 9.5356 0.39 11.995 0.32305 1.473 1.912 7.3172 2.2821 8.3935 0.0723 0.21029 0.46053 0.27118 1.1899 0.18664 0.59542-0.069 4.435-0.35449 8.5324-0.63439zm92.314 0.24413c0.2369-0.3833 0.8729-3.5158 0.8729-4.2993 0-1.008-0.62675-1.3763-4.0406-2.3742-4.313-1.2607-6.6404-2.3147-9.4755-4.2914-1.3242-0.92326-2.6034-1.6396-2.8427-1.5919-0.68626 0.13686-0.58601 2.5471 0.16589 3.9882 2.0719 3.971 6.1743 7.3024 10.385 8.4327 1.6382 0.43982 4.6956 0.52395 4.9355 0.13581zm6.0611-0.55043c0.62207-0.57521 1.0788-1.3741 1.5268-2.6705 0.81421-2.3562 0.67625-2.5697-1.6611-2.5697-2.1018 0-3.0336 0.5733-3.0336 1.8665 0 0.45085-0.17737 1.417-0.39416 2.147-0.50417 1.6977-0.25843 2.0474 1.4389 2.0474 1.0434 0 1.3734-0.12758 2.1231-0.82075zm-61.078-1.3187c3.2738-0.24177 3.2833-0.25249 4.2546-4.8054 1.2749-5.976 2.3661-16.289 1.7235-16.289-1.2628 0-14.738 18.512-14.738 20.247 0 0.65009 0.451 0.82588 2.5254 0.98436 1.8706 0.14291 2.6787 0.12509 6.2347-0.13753zm70.235-1.2651c6.8906-3.3301 10.955-6.8606 15.236-13.234 3.2725-4.8724 5.7609-10.706 7.1889-16.852 0.61844-2.662 0.69916-3.5143 0.71469-7.5466 0.0205-5.3088-0.22524-6.515-1.6272-7.9888-1.1979-1.2593-2.4472-1.3423-3.9364-0.26152-2.6836 1.9477-6.6259 7.051-8.8169 11.414-3.303 6.5766-9.7194 23.617-9.7194 25.812 0 0.69482 0.0535 0.73949 0.69448 0.57986 1.6979-0.42287 6.5982-5.077 8.4235-8.0003 1.3992-2.241 2.1529-3.1696 2.3848-2.9384 0.28063 0.27995-1.0096 2.7166-2.4365 4.6015-2.0255 2.6756-4.4136 5.076-7.3143 7.3516-3.1162 2.4448-4.3833 4.084-4.8115 6.2245-0.53927 2.6957-0.0382 2.8002 4.0201 0.8389zm-13.854-4.9789c0.75909-0.47406 1.2769-1.8753 1.6503-4.4657 0.84844-5.8862 1.2122-19.295 0.64818-23.895-1.1493-9.3752-4.7052-14.128-11.28-15.076-2.6336-0.37986-3.614-0.0365-5.9715 2.0913-4.2928 3.8745-7.0609 10.051-7.0645 15.763-2e-3 2.3193 0.72779 6.1321 1.9562 10.228 0.87828 2.9283 1.2968 3.7881 1.8438 3.7881 0.26499 0 1.6332-1.0796 3.0404-2.3991 2.4075-2.2575 3.0696-2.7238 3.0696-2.1621 0 0.13035-0.68476 1.1457-1.5217 2.2564-1.9713 2.6161-2.8776 4.564-2.6609 5.7191 0.31416 1.6746 4.0768 5.1069 7.4735 6.8175 3.2973 1.6605 7.3203 2.2698 8.8166 1.3353z"
            fill="#fff"
            strokeWidth=".25254"
          />
        </g>
      </g>
    </svg>
  );
};

export default LogoIcon;
