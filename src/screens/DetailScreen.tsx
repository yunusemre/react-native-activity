import Card from '@/components/card';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

const DetailsScreen = ({route}: any) => {
  const [data, setData] = useState<any>({});
  const fetchProducts = async () => {
    const data: any = await axios.get(
      `https://dummyjson.com/products/${route.params.id}`,
    );
    setData(data?.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <View style={{flex: 1, padding: 10}}>
      <Card data={data} />
      {data?.thumbnail ? (
        <Image
          style={{
            width: '98%',
            marginHorizontal: '1%',
            height: 300,
            borderRadius: 10,
          }}
          resizeMode="contain"
          source={{uri: data?.thumbnail}}
        />
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default DetailsScreen;
