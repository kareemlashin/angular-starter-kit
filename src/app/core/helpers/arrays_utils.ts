
/* Check if an array is empty */
const isEmpty = (arr:any) => Array.isArray(arr) && !arr.length;

/* ######################################################################################## */

/* Close an array */
const clone = (arr:any) => arr.slice(0);


/* ######################################################################################## */

/* Compare two arrays regardless of order */
// `a` and `b` are arrays
const isEqual = (a:any, b:any) => JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());
// Examples
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, 3, 2]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false

/* ######################################################################################## */

/* Find the maximum/minimum item of an array */
const max = (arr:any) => Math.max(...arr);
const min = (arr:any) => Math.min(...arr);

/* ######################################################################################## */

/* Get the average of an array */
const average = (arr:any) => arr.reduce((a:any, b:any) => a + b, 0) / arr.length;

/* Get the sum of an array of numbers */
const sum = (arr:any) => arr.reduce((a:any, b:any) => a + b, 0);

/* ######################################################################################## */

/* Get the unique values of an array */
const unique = (arr:any) => [...new Set(arr)];
