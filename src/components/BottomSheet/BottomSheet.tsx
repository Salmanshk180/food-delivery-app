import React, {RefObject, useCallback, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Close from '../../assets/Close';
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
  snapPointsArray?: string[];
}

const CustomBottomSheet = ({
  component,
  bottomSheetRef,
  title,
  onClose,
  snapPointsArray,
}: Props) => {
  const snapPoints = useMemo(() => snapPointsArray ?? ['50%', '100%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        onPress={() => {
          onClose();
        }}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose
      style={styles.bottomSheet}
      animationConfigs={{duration: 200}}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetHeaderText}>{title}</Text>
          <TouchableOpacity onPress={onClose}>
            <Close />
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
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
    position: 'relative',
    zIndex: -10,
  },
  contentContainer: {
    flex: 1,
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
