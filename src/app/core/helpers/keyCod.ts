export class text {
    truncateText(string: any, chars: any) {
        if (string.length > chars) {
            return string.substring(0, chars) + "...";
        } else {
            return string;
        }
    }
    reverse = (str: any) => str.split('').reverse().join('');
    /* ######################################################################################## */
    /* Check if a string contains only letters */
    isAlpha = (str: any) => /^[A-Z]+$/i.test(str);
    /* ######################################################################################## */
    /* Check if a value is base64 encoded */
    isBase64 = (str: any) => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(str);
    /* ######################################################################################## */
    /* Check if a string contains only digits */
    isNumeric = (str: any) => !/[^0-9]/.test(str);
}