
export function isDesktop(){
    const width = window.innerWidth;
    return width > 1264;
};

export function isSmallScreen(){
    const width = window.innerWidth;
    return width < 1264;
};