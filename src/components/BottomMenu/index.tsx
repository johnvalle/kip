import React, { ForwardedRef, forwardRef, ReactNode, RefObject } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';

import styles from './styles';

// type BottomMenuProps = ReactNode & {
//   ref: RefObject<RBSheet>
// }

const BottomMenu = forwardRef<RBSheet, ReactNode>((props, ref) => {
  return (
    <RBSheet
      ref={ref}
      closeOnPressMask={true}
      customStyles={{...styles}}
    >
      {props.children}
    </RBSheet>
  )
});

export default BottomMenu;