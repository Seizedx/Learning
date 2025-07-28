import { 
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function PickerItem(props) {

    let currencyItem = props.currency.map((item, index) => {
        return <Picker.Item value={item.key} key={index} label={item.key} />
    })

    return (
        <Picker
        selectedValue={props.currencySelected}
        onValueChange={(value) => props.onChange(value)}
        >
            {currencyItem}
        </Picker>
    )
}

 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#101215',
//         paddingTop: 30,
//     },
// });