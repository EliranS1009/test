import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
        width: '50%',
        height: "20%",
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        position: 'relative', // Ensure that positioning of the pencil icon works
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      cardDescription: {
        fontSize: 16,
        color: '#cccccc',
      },
});

export default styles;