import 'styled-components/native'
import Colors from '~/theme/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Colors
  }
}