import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { IIcon, TIconLibType } from './Icon.types';

/**
 * @reference :
 * https://oblador.github.io/react-native-vector-icons/
 */

const Icon: IIcon = props => {
  const { name, size = 24, color = '#000', style, lib } = props;
  const IconComponents = [FontAwesomeIcon, EntypoIcon, AntDesignIcon];

  const libNameIconMap: Record<TIconLibType, any> = {
    AntDesign: AntDesignIcon,
    Entypo: EntypoIcon,
    FontAwesome: FontAwesomeIcon,
  };

  let IconComponent = FontAwesomeIcon;

  //   get from the specific lib
  if (lib) {
    IconComponent = libNameIconMap[lib];
  } else {
    //  search for the icon in give order
    for (const Component of IconComponents) {
      if (Component.hasIcon(name)) {
        IconComponent = Component;
        break;
      }
    }
  }

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default Icon;
