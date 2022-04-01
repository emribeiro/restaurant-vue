
export function isDesktop(){
    const width = window.innerWidth;
    return width > 767;
};

export function isSmallScreen(){
    const width = window.innerWidth;
    return width < 767;
};