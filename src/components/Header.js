// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
//Make a component
const Header = (props) => {

	const { textStyle, viewStyle } = styles;
		return (
			<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
			</View>
	);
};

//New object underneath called styles

const styles = {

viewStyle: {
backgroundColor: '#AABBCC',
alignItems:  'center',
justifyContent:  'center',
height: 60,
paddingTop: 15,
elevation: 5,
// Below is only iOs Compatible

// shadowColor: '#000',
// shadowOffset: {
// 	width: 0,
// 	height: 2
// },
// shadowOpacity: 0.2,
position: 'relative'

},

textStyle: {

	fontSize: 35
}

};

//Make the component available to other parts of the app

export default Header;