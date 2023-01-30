import Card from '@/components/card';
import Search from '@/components/search';
import axios from 'axios';
import {useEffect, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const fetchProducts = async () => {
    const data: any = await axios.get('https://dummyjson.com/products');
    setData(data?.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredList = useMemo(() => {
    const response = data.filter((res: any) =>
      res.title.toLowerCase().includes(value?.toLowerCase()),
    );
    return response;
  }, [value, data]);
  return (
    <View style={{flex: 1, padding: 10}}>
      <Search value={value} searchFilterFunction={setValue} />

      <View style={{flex: 1}}>
        <FlatList
          data={filteredList}
          renderItem={({item}: any) => (
            <Card navigation={navigation} data={item} />
          )}
          keyExtractor={item => item?.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
