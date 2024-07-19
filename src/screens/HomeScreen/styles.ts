import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.View`
    flex: 1;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textHiglight};
`;

export const StreamingList = styled.FlatList`
    margin-top: 40px;
    flex-direction: row;
`;

export const StreamingItem = styled.View`
    border-color: #fff;
    border-radius: 10px;
    margin-horizontal: 5px;
    padding: 20px;
    min-width: ${width / 2 - 30}px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const StreamingTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textHiglight};
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
`;