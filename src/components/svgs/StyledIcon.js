import React from "react";

const StyledIcon = (iconColor) => {
  return (
    <>
      <svg
        id="SVGRoot"
        width="64px"
        height="64px"
        version="1.1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs id="defs87">
          <clipPath id="clipPath207">
            <path id="path209" d="m37 12v-9h8v9h-8" fill="none" />
          </clipPath>
          <clipPath id="clipPath211">
            <path id="path213" d="m37 12v-9h8v9h-8" fill="none" />
          </clipPath>
          <clipPath id="clipPath215">
            <path id="path217" d="m37 12v-9h8v9h-8" fill="none" />
          </clipPath>
        </defs>
        <g id="layer1">
          <image
            id="image113"
            transform="translate(-29)"
            x="29"
            width="24"
            height="24"
            clipPath="url(#clipPath215)"
            imageRendering="optimizeQuality"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAAE+CAMAAAAj5owCAAAABGdBTUEAALGPC/xhBQAAAAFzUkdC AK7OHOkAAAMAUExURUdwTEpKSkpKSkpKSmVVWEpKSkxMTEpKSnVrbkpKSkpKSlZPU0pKSm9gXUpK SkpKSktLS0pKSkpKSk1LSlVPT2NVWbu7tUtLS0pKSk5MTkpKSk5JTEpKSktLS0pKSk9KTkxMTE5K TEtLS0pKSkpKSkpKSk1LTEtLS0tLS09PT0pKSkpKSkpKSkpKSktLS1JLT0pKSkpKSktLS0tLS0pK SktLS0tLS644fEpKSkpKSqQ+eUpKStiEEq89gLE+g6xIhKBAeLJBhbJAe7xKi7VBh85VmKpHgpA8 ZaJPgrlZkpE/cXUzXbFAhNl/E//GNHs0YI5Ecf/BMP/EMr5TlLxRkrVAhZlFeIY7abxrncVnC+CH FY87bqJYhq1hj//BMMVpDJRNeYk+bKhJGtJvUKE9dJ9QgMJ/qbVmlv/FNP/MO//JOctvDtJ3EcFa mawyc9uCFLdNW+iPJf62KI09bqg8dq9ikf/JN8tuDP/CLOeQGHMuWfCdG7dnmP/BMMxPlNF3Eago aOuePcyDWEpKSv/UZf/UaP/JOP/SUf/INv/RTv/SVP/OQf/TXv/TYP/UYv/KOv/TXP/NPv/TWv/Q S9Zwr//HNP/SVv/EMddysP/QSf/FM//PRP/CL9Joqf/SWM9np8xjpNh1stlysf+/LdRrq/+u4P/N OdRurNhvr9l4tP/QRtdsrcdeoP/MPNp7tv+8K8danf/PSNt/t8JMktBsqcRUmP+o3f+0J/upIsBT lv64KrtLkv6vJcxeoOiQGeyCw/+h27ZDifKcHcJamvCFxtFipMBIju2WG+CHF+F2t/ejIPqS0uSM GLU+eeZ7vP6Z18hipfmm2ON4ubhEjvaMzd5ytOqWyeh/wP/VTO2fIblNi//USK5Vi7ddk/GJycpr ieCAudqAFNhgpO6qT/e0N8Fjm69DhOmXHd5rruadV//SP8RooPSrJstrbNaBaPi8Qt+LvvizKcJc e/zEO75Ag/Kh0t2OZ9N7ecdwpt13taU9euiXPd+GSchnfMRkIsRlEDTFfcgAAACDdFJOUwD1UfoL y2E6Av7mD/AFxtBESNUzFQgBmdookjCLTOEYaB9xd6i3LIZaHOt/rLFVI3u9PmufXjYTaKQgbhBS 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 "
          />
          <path
            id="path186"
            d="m0 12v-12h24v24h-24zm23.698 0v-11.698h-23.396v23.396h23.396zm-15.774 8.7099c0-0.96149 0.00751-1.0118 0.15094-1.0118 0.083019 0 0.15094 0.04076 0.15094 0.09057 0 0.07044 0.020126 0.07044 0.090566 0 0.049811-0.04981 0.20186-0.09057 0.33788-0.09057 0.35756 0 0.50599 0.25572 0.46129 0.79473-0.042014 0.50664-0.19275 0.65836-0.60672 0.6107-0.28297-0.03258-0.28302-0.03253-0.28302 0.25332 0 0.22243-0.03351 0.29467-0.15094 0.32538-0.1454 0.03802-0.15094 0.0023-0.15094-0.97233zm0.8319 0.04161c0.21098-0.39421-0.055505-0.97214-0.3602-0.78118-0.15948 0.09995-0.22119 0.66927-0.08971 0.82769 0.12904 0.15548 0.35427 0.1322 0.44991-0.04651zm-5.8542 0.1953c-0.41855-0.41855-0.12938-1.2502 0.43379-1.2476 0.13689 6.03e-4 0.29569 0.0308 0.3529 0.06703 0.16249 0.10292 0.025868 0.23286-0.20127 0.19144-0.31543-0.05752-0.43104 0.06515-0.43104 0.45735 0 0.3922 0.11561 0.51487 0.43104 0.45735 0.22714-0.04142 0.36376 0.08853 0.20127 0.19144-0.20772 0.13156-0.59581 0.07382-0.78668-0.11706zm1.283 0c-0.14288-0.14288-0.18525-0.26449-0.18525-0.53173 0-0.44735 0.24125-0.71698 0.64151-0.71698 0.40026 0 0.64151 0.26963 0.64151 0.71698 0 0.26724-0.042366 0.38885-0.18525 0.53173-0.25204 0.25204-0.66048 0.25204-0.91252 0zm0.71776-0.18715c0.1881-0.35147 0.036656-0.83515-0.2615-0.83515-0.20673 0-0.33962 0.19196-0.33962 0.49057s0.1329 0.49057 0.33962 0.49057c0.10405 0 0.21716-0.06315 0.2615-0.14598zm0.75737-0.34458c0-0.66667 0.010593-0.71698 0.15094-0.71698 0.083019 0 0.15094 0.03516 0.15094 0.07813 0 0.05385 0.045353 0.05385 0.14598 0 0.20515-0.10979 0.38707-0.09722 0.53537 0.03698 0.114 0.10317 0.13711 0.10317 0.22273 0 0.052544-0.06331 0.1941-0.11511 0.31458-0.11511 0.28184 0 0.36625 0.20987 0.36625 0.91057 0 0.47307-0.014511 0.52339-0.15094 0.52339-0.13526 0-0.15094-0.05031-0.15094-0.48439 0-0.58003-0.045884-0.72315-0.23183-0.72315-0.20479 0-0.29647 0.23184-0.29647 0.74976 0 0.40748-0.01659 0.45779-0.15094 0.45779-0.13836 0-0.15094-0.05031-0.15094-0.60377 0-0.5311-0.016352-0.60377-0.13585-0.60377-0.24215 0-0.31698 0.16391-0.31698 0.69434 0 0.46289-0.014798 0.51321-0.15094 0.51321-0.14035 0-0.15094-0.05031-0.15094-0.71698zm4.0343 0.53173c-0.14288-0.14288-0.18525-0.26449-0.18525-0.53173 0-0.44735 0.24125-0.71698 0.64151-0.71698 0.40026 0 0.64151 0.26963 0.64151 0.71698 0 0.26724-0.04237 0.38885-0.18525 0.53173-0.25204 0.25204-0.66048 0.25204-0.91252 0zm0.71776-0.18715c0.1881-0.35147 0.03666-0.83515-0.2615-0.83515-0.20672 0-0.33962 0.19196-0.33962 0.49057s0.1329 0.49057 0.33962 0.49057c0.10405 0 0.21716-0.06315 0.2615-0.14598zm0.75737-0.34458c0-0.65628 0.01225-0.71698 0.14466-0.71698 0.07956 0 0.16022 0.04245 0.17924 0.09434 0.02767 0.07547 0.05459 0.07547 0.13459 0 0.12709-0.11989 0.46472-0.12208 0.58302-0.0038 0.05589 0.05589 0.09057 0.3304 0.09057 0.71698 0 0.5761-0.01212 0.62642-0.15094 0.62642-0.13758 2.6e-5 -0.15095-0.050288-0.15095-0.56838 0-0.45662-0.02428-0.57772-0.12347-0.61578-0.25821-0.09908-0.36603 0.07954-0.38927 0.64493-0.01963 0.47736-0.03912 0.53926-0.16981 0.53926-0.13617 0-0.14764-0.05567-0.14764-0.71698zm1.6947 0.53173c-0.24293-0.24293-0.25712-0.75963-0.02883-1.0499 0.33899-0.43096 1.0511-0.14974 1.0511 0.41509 0 0.21398-0.0047 0.21624-0.45283 0.21624-0.47423 0-0.51817 0.03274-0.35094 0.26144 0.07878 0.10774 0.16284 0.12945 0.37062 0.09574 0.30542-0.04956 0.39456-2e-3 0.27231 0.14532-0.14502 0.17474-0.65218 0.12531-0.86146-0.08397zm0.72041-0.71424c0-0.31272-0.38199-0.43051-0.52565-0.16208-0.11672 0.2181-0.10388 0.23138 0.22376 0.23138 0.16604 0 0.30189-0.03119 0.30189-0.0693zm0.67924 0.18251c0-0.65628 0.01225-0.71698 0.14465-0.71698 0.07956 0 0.16022 0.04245 0.17925 0.09434 0.02767 0.07547 0.05459 0.07547 0.13459 0 0.12709-0.11989 0.46471-0.12208 0.58302-0.0038 0.05589 0.05589 0.09057 0.3304 0.09057 0.71698 0 0.5761-0.01212 0.62642-0.15094 0.62642-0.13758 0-0.15094-0.05031-0.15094-0.56841 0-0.45662-0.02428-0.57772-0.12347-0.61578-0.25821-0.09908-0.36603 0.07954-0.38928 0.64493-0.01963 0.47736-0.03912 0.53926-0.16981 0.53926-0.13617 0-0.14764-0.05567-0.14764-0.71698zm1.7325 0.59973c-0.05704-0.06873-0.11754-0.34216-0.13444-0.60763-0.02202-0.34585-0.06033-0.48267-0.13515-0.48267-0.05743 0-0.10442-0.05094-0.10442-0.11321 0-0.06226 0.05094-0.11321 0.11321-0.11321 0.06289 0 0.11321-0.06709 0.11321-0.15094 0-0.11069 0.05031-0.15094 0.18868-0.15094 0.13836 0 0.18868 0.04025 0.18868 0.15094 0 0.10063 0.05032 0.15094 0.15094 0.15094 0.08386 0 0.15094 0.05032 0.15094 0.11321 0 0.06289-0.06709 0.11321-0.15094 0.11321-0.13546 0-0.15094 0.05032-0.15094 0.49057 0 0.47718 0.0053 0.49057 0.19497 0.49057 0.27334 0 0.19207 0.18277-0.094 0.2114-0.14174 0.01419-0.26599-0.02422-0.33074-0.10224zm0.81309 0.03484c-0.21709-0.12638-0.06976-0.22362 0.25912-0.17103 0.21714 0.03472 0.32312 0.0195 0.36782-0.05284 0.08839-0.14301 0.03723-0.19729-0.34546-0.36658-0.29124-0.12883-0.3365-0.17951-0.3365-0.37685 0-0.26553 0.16884-0.38483 0.54221-0.3831 0.28157 0.0013 0.50351 0.11042 0.41146 0.20229-0.03346 0.03339-0.1853 0.06071-0.33744 0.06071-0.38456 0-0.35623 0.1643 0.06301 0.3654 0.39253 0.18828 0.47107 0.40882 0.23106 0.64883-0.17007 0.17007-0.62238 0.20877-0.85528 0.07318zm-11.678-2.1675c0-0.0337 0.10592-0.13959 0.23537-0.2353 0.12945-0.09571 0.20244-0.19549 0.16219-0.22174-0.075684-0.04935-0.47303-1.1832-0.47303-1.3499 0-0.05175 0.065028-0.09408 0.14451-0.09408 0.11765 0 0.1693 0.10518 0.27795 0.56604 0.073394 0.31132 0.15637 0.56604 0.18439 0.56604 0.028021 0 0.11521-0.24623 0.19375-0.54717 0.11759-0.45056 0.17183-0.5513 0.30721-0.57058 0.16217-0.02309 0.16094-0.01234-0.091113 0.79245-0.18223 0.58186-0.31177 0.86457-0.45163 0.98567-0.19098 0.16536-0.48958 0.23156-0.48958 0.10853zm-2.2846-0.54943c-0.21708-0.12638-0.069762-0.22362 0.25912-0.17103 0.21714 0.03472 0.32312 0.0195 0.36782-0.05284 0.088386-0.14301 0.037231-0.19729-0.34546-0.36658-0.29124-0.12883-0.3365-0.17951-0.3365-0.37685 0-0.26553 0.16884-0.38482 0.54221-0.3831 0.28157 0.0013 0.50351 0.11042 0.41146 0.20229-0.033455 0.03339-0.1853 0.06071-0.33744 0.06071-0.38456 0-0.35623 0.1643 0.063012 0.3654 0.39253 0.18828 0.47107 0.40882 0.23106 0.64883-0.17007 0.17007-0.62238 0.20877-0.85528 0.07318zm1.4511-0.03484c-0.057038-0.06873-0.11754-0.34216-0.13444-0.60763-0.022022-0.34585-0.060332-0.48267-0.13515-0.48267-0.057429 0-0.10442-0.05094-0.10442-0.11321 0-0.06227 0.050943-0.11321 0.11321-0.11321 0.062893 0 0.11321-0.06709 0.11321-0.15094 0-0.11069 0.050314-0.15094 0.18868-0.15094 0.13836 0 0.18868 0.04025 0.18868 0.15094 0 0.10063 0.050314 0.15094 0.15094 0.15094 0.083857 0 0.15094 0.05032 0.15094 0.11321 0 0.06289-0.067086 0.11321-0.15094 0.11321-0.13546 0-0.15094 0.05031-0.15094 0.49057 0 0.47718 0.00532 0.49057 0.19497 0.49057 0.27334 0 0.19207 0.18277-0.094002 0.2114-0.14174 0.01419-0.26599-0.02422-0.33074-0.10224zm2.3133-0.0021c-0.025196-0.06566-0.04581-0.52415-0.04581-1.0189 0-0.84917 0.00844-0.89949 0.15094-0.89949 0.14248 0 0.15094 0.05031 0.15094 0.89759 0 0.72823 0.02136 0.90578 0.11321 0.94103 0.19164 0.07354 0.12533 0.19912-0.10513 0.19912-0.12948 0-0.23699-0.04859-0.26415-0.11938zm0.81868-0.06587c-0.24293-0.24293-0.25712-0.75963-0.028828-1.0499 0.33899-0.43096 1.0511-0.14974 1.0511 0.4151 0 0.21398-0.00474 0.21624-0.45283 0.21624-0.47423 0-0.51817 0.03274-0.35094 0.26144 0.07878 0.10774 0.16284 0.12945 0.37062 0.09573 0.30542-0.04956 0.39457-2e-3 0.27231 0.14532-0.14502 0.17474-0.65218 0.12531-0.86146-0.08397zm0.72041-0.71424c0-0.31272-0.38199-0.43051-0.52565-0.16208-0.11672 0.21809-0.10388 0.23138 0.22376 0.23138 0.16604 0 0.30189-0.03119 0.30189-0.0693zm0.75277 0.69194c-0.1314-0.16648-0.15708-0.27872-0.12969-0.56683 0.046642-0.49062 0.23197-0.68628 0.60292-0.63652l0.28344 0.03802v-0.33769c0-0.30703 0.015419-0.3355 0.16981-0.31357 0.1651 0.02345 0.1704 0.05186 0.19087 1.0241 0.01996 0.9476 0.01336 1-0.12579 1-0.080765 0-0.16241-0.04245-0.18144-0.09434-0.027672-0.07547-0.054591-0.07547-0.13459 0-0.17554 0.1656-0.49811 0.11154-0.67553-0.11321zm0.71893-0.50943c0-0.45156-6.038e-4 -0.45283-0.22358-0.45283-0.1939 0-0.23199 0.03556-0.28692 0.26783-0.038934 0.16463-0.03274 0.34832 0.016073 0.47671 0.064205 0.16887 0.11916 0.2043 0.28693 0.185 0.20066-0.02309 0.20751-0.03884 0.20751-0.47671zm-5.3019-8.1713-1.3774-0.86526 9.48e-4 -0.31193 9.479e-4 -0.31193 1.3156-0.81208c0.72359-0.44665 1.3658-0.83136 1.4272-0.85491 0.097065-0.037247 0.33498 0.24097 0.26137 0.30565-0.01374 0.012073-0.61083 0.38653-1.3269 0.83213-0.71604 0.4456-1.3003 0.83187-1.2984 0.85838 0.00192 0.026506 0.59626 0.41897 1.3208 0.87213 0.72449 0.45317 1.3173 0.84696 1.3173 0.87509 0 0.02814-0.059434 0.10219-0.13208 0.16457-0.12054 0.10351-0.25232 0.03787-1.5094-0.75185zm12.775 0.64028c-0.14256-0.20353-0.24549-0.11914 1.336-1.0954 0.65232-0.40266 1.1872-0.7539 1.1887-0.78053 0.0014-0.026627-0.36246-0.27984-0.80868-0.5627-2-1.2677-1.8426-1.1491-1.7511-1.3202 0.05248-0.098067 0.12751-0.13898 0.20226-0.1103 0.06536 0.025079 0.72681 0.4226 1.4699 0.88339l1.3511 0.83779-0.02285 0.27219c-0.02438 0.29037-0.07033 0.3244-2.3035 1.7058l-0.5448 0.337z"
            strokeWidth=".075472"
            fill={iconColor}
          />
          <path
            id="path188"
            transform="translate(-18)"
            d="m34 12v-6h5v-3h3v9h-8"
            clipPath="url(#clipPath211)"
            fill="none"
          />
          <path
            id="path188-2"
            transform="translate(-18)"
            d="m33 14v-6h5v-3h3v9h-8"
            clipPath="url(#clipPath207)"
            fill="none"
          />
        </g>
      </svg>
    </>
  );
};

export default StyledIcon;
