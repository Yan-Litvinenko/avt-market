const banksImages: Record<number, string> = {
    1: 'sberbank',
    2: 't-bank',
    3: 'alfa',
    4: 'ATB',
    5: 'VTB',
    6: 'gazprom',
    7: 'zenit',
    8: 'ingosstrakh',
    9: 'raiffeisen',
    10: 'opening',
    11: 'expobank',
    12: 'absolute',
    13: 'MKB',
    14: 'orange',
    15: 'OTP',
    16: 'rosselkhoz',
    17: 'mail',
    18: 'renessans',
    19: 'lokobank',
    20: 'sovcombank',
    21: 'PSB',
    22: 'ural',
    23: 'homebank',
    24: 'bank-center-invest',
    25: 'drive-click',
    26: 'prim-soc-bank',
    27: 'avangard',
};

export const getBankImage = (id: number) => {
    const bankName = banksImages[id];

    if (bankName) {
        return require(`../assets/images/banks/${bankName}.svg`);
    }

    return '';
};
