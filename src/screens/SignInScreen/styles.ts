import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textHiglight};
    text-align: center;
    margin-top: 20px;
    margin-bottom: 100px;
`;

export const MusicAnimation = styled(LottieView)`
    width: 100%;
    height: 300px;
    margin-top: 20px;
`;