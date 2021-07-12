import * as React from 'react';
import { Image, FlatList } from 'react-native';

import { Text } from '../../components/Themed';

import styles from './styles'

// Define Data Type and Strucure for typescript
interface HomeCategoryProps {
  category: {
    id: string,
    title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }   
}

const HomeCategory = (props: HomeCategoryProps) => {
    const {category} = props;
  return (
<>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
      horizontal
      data={category.movies} 
      renderItem={({item}) => (
        <Image style={styles.image} source={{ uri: item.poster }}/>
      )}
      
      />
   </>
  );
}

export default HomeCategory;


