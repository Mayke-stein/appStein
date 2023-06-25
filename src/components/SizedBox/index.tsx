import React from 'react';
import {RootContainer} from '../../theme/styles';

type SizedBoxProps = {
  width?: number;
  height?: number;
};

export const SizedBox: React.FC<SizedBoxProps> = ({width = 0, height = 0}) => {
  return <RootContainer width={width} height={height} />;
};
