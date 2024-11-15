/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import {
  componentStyles,
  layoutStyles,
  size,
  utilStyles,
  whiteColor,
} from '../styles/styles';

const Homework = () => {
  return (
    <View>
      <View style={[componentStyles.banner, utilStyles.bgSecondary]}>
        <View style={[layoutStyles.container]}>
          <View style={[styles.box, styles.boxIs1]} />
          <View style={[styles.box, styles.boxIs2, styles1.boxIs2]} />
          <View style={[styles.box, styles.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner]}>
        <View style={[layoutStyles.container, styles2.container]}>
          <View style={[styles.box, styles.boxIs1]} />
          <View style={[styles.box, styles.boxIs2]} />
          <View style={[styles.box, styles.boxIs3, styles2.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner, utilStyles.bgSecondary]}>
        <View style={[layoutStyles.container, styles3.container]}>
          <View style={[styles.box, styles.boxIs1, styles3.boxIs1]} />
          <View style={[styles.box, styles.boxIs2]} />
          <View style={[styles.box, styles.boxIs3, styles3.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner]}>
        <View style={[layoutStyles.container, styles4.container]}>
          <View style={[styles.box, styles.boxIs1, styles4.boxIs1]} />
          <View style={[styles.box, styles.boxIs2, styles4.boxIs2]} />
          <View style={[styles.box, styles.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner, utilStyles.bgSecondary]}>
        <View style={[layoutStyles.container, styles5.container]}>
          <View style={[styles.box, styles.boxIs1, styles5.boxIs1]} />
          <View style={[styles.box, styles.boxIs2, styles5.boxIs2]} />
          <View style={[styles.box, styles.boxIs3, styles5.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner]}>
        <View style={[layoutStyles.container]}>
          <View style={[styles.box, styles.boxIs1, styles6.boxIs1]} />
          <View style={[styles.box, styles.boxIs2, styles6.boxIs2]} />
          <View style={[styles.box, styles.boxIs3, styles6.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner, utilStyles.bgSecondary]}>
        <View style={[layoutStyles.container, styles7.container]}>
          <View style={[styles.box, styles.boxIs1]} />
          <View style={[styles.box, styles.boxIs2]} />
          <View style={[styles.box, styles.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner]}>
        <View style={[layoutStyles.container, styles8.container]}>
          <View style={[styles.box, styles.boxIs1]} />
          <View style={[styles.box, styles.boxIs2, styles8.boxIs2]} />
          <View style={[styles.box, styles.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner, utilStyles.bgSecondary]}>
        <View style={[layoutStyles.container, styles9.container]}>
          <View style={[styles.box, styles.boxIs1, styles9.boxIs1]} />
          <View style={[styles.box, styles.boxIs2, styles9.boxIs2]} />
          <View style={[styles.box, styles.boxIs3]} />
        </View>
      </View>
      <View style={[componentStyles.banner]}>
        <View style={[layoutStyles.container, styles10.container]}>
          <View style={[styles.box, styles.boxIs1]} />
          <View style={[styles.box, styles.boxIs2, styles10.boxIs2]} />
          <View style={[styles.box, styles.boxIs3]} />
        </View>
      </View>
    </View>
  );
};

export default Homework;

const styles = StyleSheet.create({
  box: {
    width: size * 8,
    height: size * 8,
    borderWidth: size,
    borderColor: whiteColor,
  },
  boxIs1: {
    backgroundColor: '#5856D6',
  },
  boxIs2: {
    backgroundColor: '#F0A23B',
  },
  boxIs3: {
    backgroundColor: '#28C4D9',
  },
});

const styles1 = StyleSheet.create({
  boxIs2: {
    flex: 1,
  },
});

const styles2 = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  boxIs3: {
    width: '100%',
  },
});

const styles3 = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  boxIs1: {
    alignSelf: 'flex-end',
  },
  boxIs3: {
    alignSelf: 'center',
  },
});

const styles4 = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  boxIs1: {
    alignSelf: 'flex-end',
  },
  boxIs2: {
    alignSelf: 'center',
  },
});

const styles5 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxIs1: {
    height: '100%',
  },
  boxIs2: {
    height: '100%',
  },
  boxIs3: {
    height: '100%',
  },
});

const styles6 = StyleSheet.create({
  boxIs1: {
    flex: 1,
    width: '100%',
  },
  boxIs2: {
    flex: 1,
    width: '100%',
  },
  boxIs3: {
    flex: 2,
    width: '100%',
  },
});

const styles7 = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles8 = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIs2: {
    transform: [{translateX: size * 8}],
  },
});

const styles9 = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIs1: {
    transform: [{translateY: size * 8}],
  },
  boxIs2: {
    transform: [{translateX: size * 8}],
  },
});

const styles10 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIs2: {
    transform: [{translateY: size * 4}],
  },
});
