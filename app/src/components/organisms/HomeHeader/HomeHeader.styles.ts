import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  logoWrapper: {
    width: 150,
  },
  logo: {
    height: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  divider: {
    flex: 1,
  },
});

export default styles;
