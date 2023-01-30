import Header from '@/components/header';
import {ReactNode} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {themes} from '../theme';

const Layout = ({
  isHeader = true,
  children,
}: {
  isHeader: boolean;
  children: ReactNode;
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? themes.dark.layoutBg : themes.light.layoutBg,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isHeader ? <Header /> : null}
      <View style={{flex: 1, padding: 10}}>{children}</View>
    </SafeAreaProvider>
  );
};

export default Layout;
