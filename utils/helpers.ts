export function getKeyByValue(object: Record<string, any>, value: any) {
    let key = Object.keys(object).find((key) => object[key] === value && value !== "");
    return key;
}

export const awaitDomElementReady = async (element: HTMLElement | null) => {
    return new Promise<void>((resolve) => {
        const int = setInterval(() => {
            if (!!element?.offsetWidth && !!element?.offsetHeight) {
                clearInterval(int);
                resolve();
            }
        }, 100);
    });
};
