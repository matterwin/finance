import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { COLORS } from '../constants';

const BottomSheetWrapper = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['7%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleStyle={{ marginBottom: -10, borderRadius: 15, }}
        backgroundStyle={{ backgroundColor: COLORS.teal, borderRadius: 15, borderWidth: 1, borderColor: COLORS.tealwhite, }}
        handleIndicatorStyle={{ backgroundColor: COLORS.brightteal, width: 60, height: 5 }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.foldersTitle}>Folders</Text>
        </View>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    backgroundColor: '#1e4147',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'relative',
    zIndex: 0,
  },
  foldersTitle: {
    color: COLORS.grey,
    fontWeight: '900',
    fontSize: 20,
  }
});

export default BottomSheetWrapper;
