import {themes, themeShadow, typeSizes} from '@/theme/index';
import {StyleSheet, TextInput, View} from 'react-native';

const shadows = themeShadow({color: themes.light.color, height: 1});
const Search = ({searchFilterFunction, value}: any) => {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={[styles.input, shadows.shadow]}
        placeholder="Search..."
        onChangeText={searchFilterFunction}
        value={value}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    fontSize: typeSizes.FONT_SIZE_MEDIUM,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  input: {
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: themes.light.layoutBg,
    borderColor: themes.light.primary,
    borderWidth: 1,
  },
});
