import React from 'react';

type IBulb = { className?: string };
const Bulb = ({ className }: IBulb): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='svg2'
      viewBox='0 0 134.84 180.53'
      version='1.0'
      className={className}
    >
      <defs id='defs4'>
        <filter id='filter4881'>
          <feBlend id='feBlend4883' in2='BackgroundImage' mode='multiply' />
        </filter>
        <linearGradient
          id='linearGradient4890'
          y2='661.48'
          gradientUnits='userSpaceOnUse'
          x2='42.25'
          y1='672.61'
          x1='-36.158'
        >
          <stop id='stop4262' stopColor='#e3dbdb' offset='0' />
          <stop id='stop4268' stopColor='#c8b7b7' offset='.49241' />
          <stop id='stop4264' stopColor='#e3dedb' offset='1' />
        </linearGradient>
        <radialGradient
          id='radialGradient4892'
          gradientUnits='userSpaceOnUse'
          cy='562.42'
          cx='-15.052'
          gradientTransform='matrix(.33086 1.2146 -1.1751 .32011 650.84 401.34)'
          r='67.42'
        >
          <stop id='stop4254' stopColor='#fff6d5' offset='0' />
          <stop id='stop4256' stopColor='#fd5' offset='1' />
        </radialGradient>
        <radialGradient
          id='radialGradient4894'
          gradientUnits='userSpaceOnUse'
          cy='640.85'
          cx='-28.422'
          gradientTransform='matrix(.163 1.9542 -1.7989 .15005 1154 575.11)'
          r='39.344'
        >
          <stop id='stop4276' stopColor='#e3dbdb' stop-opacity='0' offset='0' />
          <stop
            id='stop4282'
            stopColor='#d7cecb'
            stopOpacity='.43922'
            offset='.80281'
          />
          <stop id='stop4280' stopColor='#c8b7b7' offset='1' />
        </radialGradient>
      </defs>
      <g id='layer1' transform='translate(-535.16 -291.12)'>
        <g id='g4885' transform='translate(602.05 -224.25)'>
          <path
            id='path4244'
            d='m42.25 627.06c-21.657 18.45-54.196 24.75-78.688 9.6 1.494 3.41 2.376 6.15 2.376 7.96 0 23.21-0.513 51.29 34.593 51.29 35.107 0 34.594-28.08 34.594-51.29 0-3.29 2.993-9.68 7.125-17.56z'
            fill='url(#linearGradient4890)'
          />
          <path
            id='path4239'
            d='m0.53125 515.38c-47.053 0-62.957 27.14-67.093 47.62-3.491 17.28 22.061 55.24 30.124 73.66 24.492 15.15 57.031 8.85 78.688-9.6 10.426-19.86 28.337-49.39 25.375-64.06-4.136-20.48-20.04-47.63-67.094-47.62z'
            fill='url(#radialGradient4892)'
          />
          <path
            id='path4270'
            filter='url(#filter4881)'
            d='m42.25 627.06c-21.657 18.45-54.196 24.75-78.688 9.6 1.494 3.41 2.376 6.15 2.376 7.96 0 23.21-0.513 51.29 34.593 51.29 35.107 0 34.594-28.08 34.594-51.29 0-3.29 2.993-9.68 7.125-17.56z'
            fill='url(#radialGradient4894)'
          />
        </g>
      </g>
    </svg>
  );
};

export default Bulb;
