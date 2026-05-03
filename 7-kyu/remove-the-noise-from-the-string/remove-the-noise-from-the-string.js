function removeNoise(str) {
    const noise = /[%$&/#·@|º\\ª]/g;
    return str.replace(noise, '');
}