import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import CircleGeoShape from '@assets/shared/circle-geo-shape.svg';
import XGeoShape from '@assets/shared/X-geo-shape.svg';
import BookMark from '@assets/welcome screen/bookmark.svg';
import Logo from '@assets/welcome screen/undraw_books_re_8gea.svg';
import SideGeoShapes from '@assets/shared/side-geo-shapes.svg';
import GetStartedBtn from '@components/GetStartedBtn/GetStartedBtn';

const WelcomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <CircleGeoShape />
      <XGeoShape style={styles.XGeoShape} />
      <Logo style={styles.logo} height={172} width={269.88} />
      <View style={styles.appTitleView}>
        <Text style={styles.appNameText}>“Make We Read”</Text>
        <BookMark style={styles.bookmark} />
      </View>
      <Text style={styles.shortText}>
        “A room without books is like a body without a soul.”
      </Text>
      <SideGeoShapes style={styles.sideGeoShapes} />
      <GetStartedBtn />
    </View>
  );
};

export default WelcomeScreen;
