import { TextInput, StyleSheet, TextInputProps} from 'react-native';


export function Input( { ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.input} { ...rest } />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical: 8,
    },
});