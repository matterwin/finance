import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { COLORS } from '../constants';

const BottomSheetWrapper = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '80%'], []);

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
        backgroundStyle={{ backgroundColor: '#1e4147', borderRadius: 20 }}
        handleIndicatorStyle={{ backgroundColor: COLORS.grey }}
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
    alignItems: 'center',
    backgroundColor: '#1e4147',
  },
  foldersTitle: {
    color: COLORS.grey,
    fontWeight: '900',
    fontSize: 15
  }
});

export default BottomSheetWrapper;
