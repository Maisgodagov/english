import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useAppDispatch } from '@app/store/hooks';
import { seedMockCourses } from '@features/courses/model/coursesSlice';
import { hydrateProgress } from '@features/progress/model/progressSlice';
import { HomeScreen } from '@pages/home/HomeScreen';

const PREVIEW_PROGRESS = {
  streak: 5,
  weeklyMinutes: 180,
  vocabularySize: 320,
  dailyProgress: [
    { date: '2025-10-01', studiedMinutes: 30, wordsLearned: 10 },
    { date: '2025-10-02', studiedMinutes: 20, wordsLearned: 6 },
    { date: '2025-10-03', studiedMinutes: 35, wordsLearned: 12 },
    { date: '2025-10-04', studiedMinutes: 25, wordsLearned: 9 },
    { date: '2025-10-05', studiedMinutes: 28, wordsLearned: 8 },
  ],
};

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(seedMockCourses());
    dispatch(hydrateProgress(PREVIEW_PROGRESS));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 780,
    backgroundColor: '#F4F4F5',
    paddingTop: 32,
  },
});

export default App;
