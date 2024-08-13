import React, {RefObject, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Close from '../../assets/Close';
import {BottomSheetModalRef} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModalProvider/types';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

interface Props {
  component: React.ReactNode;
  bottomSheetRef:
    | ((instance: BottomSheetMethods | null) => void)
    | RefObject<BottomSheetMethods>
    | null
    | undefined;
  title: string;
  onClose: () => void;
}

const CustomBottomSheet = ({
  component,
  bottomSheetRef,
  title,
  onClose,
}: Props) => {
  const snapPoints = useMemo(() => ['50%', '100%'], []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose
      style={styles.bottomSheet}>
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetHeaderText}>{title}</Text>
          <TouchableOpacity onPress={onClose}>
            <Close />
          </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent: 'center',paddingHorizontal:20}}>
          {component}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  sheetHeaderText: {
    color: '#76BC3F',
    fontSize: 20,
    fontWeight: '500',
  },
});
