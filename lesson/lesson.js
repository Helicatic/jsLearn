'use strict';

// try {
//     console.log('Norm');
//     console.log(a);
//     console.log('result');
// } catch(error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
    
// } finally {
//     console.log('tugadi');
// }

// console.log('still norm');

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log(`That's click `);
    });
} catch(e) {
    console.log(e);
}

console.log('normal');