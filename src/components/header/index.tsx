import {themes, typeSizes} from '@/theme/index';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableHighlight
          activeOpacity={0.5}
          style={{borderRadius: 50}}
          onPress={() => console.log('click')}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/profile.jpg')}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.headerCenterTitle}>NOTE APP</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableHighlight
          activeOpacity={0.5}
          onPress={() => console.log('click')}>
          <Icon style={styles.headerRightIcon} name="sort-amount-asc" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 5,
    backgroundColor: themes.light.primary,
    shadowColor: themes.light.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenterTitle: {
    fontSize: typeSizes.FONT_SIZE_LARGE,
    color: 'white',
    fontWeight: 'bold',
  },
  headerLeft: {
    width: 40,
    height: 40,
    justifyContent: 'flex-end',
  },
  headerRight: {
    width: 30,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightIcon: {
    color: 'white',
    fontSize: typeSizes.FONT_SIZE_LARGE,
  },
});

export default Header;
