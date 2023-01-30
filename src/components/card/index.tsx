import {themes, typeSizes} from '@/theme/index';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Card = ({navigation, data}: any) => {
  const {title, description, id, price} = data;
  return (
    <TouchableHighlight
      activeOpacity={0.9}
      style={styles.containerBox}
      onPress={() => navigation.navigate('Details', {id: id, title: title})}>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardPrice}>{price}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  containerBox: {
    flex: 1 / 2,
    minHeight: 150,
    margin: 4,
    borderRadius: 10,
    padding: 8,
    backgroundColor: themes.light.primary,
  },
  cardTitle: {
    fontSize: typeSizes.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  cardPrice: {
    color: 'white',
  },
  cardDescription: {
    color: 'white',
  },
});
export default Card;
