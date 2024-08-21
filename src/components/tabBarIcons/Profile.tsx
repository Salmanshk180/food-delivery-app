import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Profile = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={27}
      fill={props.focused ? '#76BC3F' : '#838383'}
      {...props}>
      <Path
        fill={props.focused ? '#76BC3F' : '#838383'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.48 17.462c-5.157 0-9.561.78-9.561 3.902s4.376 3.93 9.56 3.93c5.157 0 9.56-.781 9.56-3.902 0-3.122-4.375-3.93-9.56-3.93Z"
        clipRule="evenodd"
      />
      <Path
        fill={props.focused ? '#76BC3F' : '#838383'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.429}
        d="M10.48 13.008A6.128 6.128 0 1 0 4.35 6.88a6.107 6.107 0 0 0 6.085 6.128h.044Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default Profile;
