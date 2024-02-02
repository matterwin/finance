import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import BottomSheet from '@gorhom/bottom-sheet';

const BottomSheetWrapper = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}> 
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: '#1e4147' }}
        >
          <View style={styles.contentContainer}>
            <Text>Folders</Text>
          </View>
        </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 120,
    // backgroundColor: 'red'
  },
  contentContainer: {
    flex: 1,
    // marginBottom: 50,
    alignItems: 'center',
    backgroundColor: '#1e4147',
    paddingTop: 50
  },
});

export default BottomSheetWrapper;
