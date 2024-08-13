import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function NonVeg(props: {isVeg: boolean}) {
  return (
    <Svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
      <Path
        d="M0.526401 0H16.3775V16.4402H0V0H0.526401ZM8.18787 3.5738C10.7536 3.5738 12.8342 5.65434 12.8342 8.2201C12.8342 10.7859 10.7536 12.8646 8.18787 12.8646C5.62211 12.8646 3.54157 10.7841 3.54157 8.2201C3.54336 5.65434 5.62211 3.5738 8.18787 3.5738ZM15.3247 1.0528H1.0528V15.3874H15.3247V1.0528Z"
        fill={props.isVeg ? '#76BC3F' : '#E23E3E'}
      />
    </Svg>
  );
}
