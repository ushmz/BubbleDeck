import React from 'react';
import { Path, Svg, SvgXml } from 'react-native-svg';

type Props = {
  inactive?: boolean;
  pressed?: boolean;
  on?: boolean;
};

export const ShareIcon: React.FC<Props> = (props) => {
  return (
    <Svg
      height="18"
      width="18"
      // xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#AAB8C2"
      fillOpacity={props.inactive ? 30 : props.pressed ? 50 : 100}
    >
      <Path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
      <Path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
    </Svg>
  );
};
