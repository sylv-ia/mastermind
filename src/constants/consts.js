export const genLvl = () => {
    let ans = [];

    for (let i = 0; i < 4; i++) {
        ans.push(Math.floor(Math.random() * 6))
    }

    return ans;
}

export const appConsts = {
    lvlList: {
        //'easy': 100,
        'normal': 100,
        'normal2': 100,
        'normal3': 100,
        'normal4': 100,
        'normal5': 100,
    }
}
