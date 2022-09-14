import React from 'react';

type ILogo = {
  className?: string;
};

export const OrangeLogo = ({ className }: ILogo): JSX.Element => {
  return (
    <svg
      className={className}
      viewBox='0 0 60 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='60' height='30' fill='#F5F5F5' />
      <rect x='-282' y='-51' width='382' height='132' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_0_1'
            transform='scale(0.0026178 0.00757576)'
          />
        </pattern>
        <image
          id='image0_0_1'
          width='382'
          height='132'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export const VodacomLogo = ({ className }: ILogo): JSX.Element => {
  return (
    <svg
      className={className}
      viewBox='0 0 95 45'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='95' height='45' fill='#F5F5F5' />
      <rect x='-181' y='-43' width='382' height='132' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_0_1'
            transform='scale(0.0026178 0.00757576)'
          />
        </pattern>
        <image
          id='image0_0_1'
          width='382'
          height='132'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export const AfricellLogo = ({ className }: ILogo): JSX.Element => {
  return (
    <svg
      className={className}
      viewBox='0 0 80 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='80' height='50' fill='#F5F5F5' />
      <rect x='-18' y='-38' width='382' height='132' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_0_1'
            transform='scale(0.0026178 0.00757576)'
          />
        </pattern>
        <image
          id='image0_0_1'
          width='382'
          height='132'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export const AirtelLogo = ({ className }: ILogo): JSX.Element => {
  return (
    <svg
      viewBox='0 0 80 50'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='80' height='50' fill='#F5F5F5' />
      <rect x='-100' y='-38' width='382' height='132' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_0_1'
            transform='scale(0.0026178 0.00757576)'
          />
        </pattern>
        <image
          id='image0_0_1'
          width='382'
          height='132'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};
