import { Platform } from 'react-native';

let Theme = {
    background: '#151515',
    highlight: '#222',
    text: '#ddd',
    helpText: '#fff',
    button: 'rgba(255,255,255,0.3)',
    circlesA: [
        '#FF0000',
        '#0000FF',
        '#00FF00',
    ],
    circlesB: [
        '#FFF252',
        '#FF9BF0',
        '#A704A7',
    ],
    check: 'lime',
    checkInactive: 'green',
    sad: 'red',
    selected: '#fff',
    border: '#707070',
    //indicator: '#36393F',
    indicator: 'rgba(125, 125, 125, 0.4)',
    indicatorDark: '#000',
    indicatorLight: '#fff',
    helpGreen: '#00FF00',
    helpRed: '#FF0000',
    font: Platform.OS == 'ios' ? 'courier' : 'monospace',
}

Theme.circles = Theme.circlesA.concat(Theme.circlesB);

export default Theme;