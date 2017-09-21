//Usual Boiler Plate;

import React from 'react';
import { View } from 'react-native';


const Card = (props) => {

	return (

		<View style={styles.containerStyle}>
		{props.children} 
		</View>

		);
};

//Styling the object

const styles = {

	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		//iOs Only for next code
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		//Back to Universal
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10


	}

}

//Export the thing!

export default Card;