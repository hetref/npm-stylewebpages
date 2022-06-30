// function boxShadow(option) {
//     let element = document.querySelectorAll('.box-shadow');

//     if (option.boxShadowType === 'hard') {
//         option.boxShadowType = '0px'
//     }
//     else {
//         option.boxShadowType = '15px'
//     }

//     element.forEach(image => {
//         image.style.boxShadow = `10px 10px ${option.boxShadowType} 1px rgba(0, 0, 0, 0.12)`;

//         if (option.padding) {
//             image.style.padding = '1rem';
//         }
//     })
// }

// module.exports.stylewebpage = boxShadow;

module.exports = {
    boxShadow: (option) => {
        let element = document.querySelectorAll('.box-shadow');

        if (option.boxShadowType === 'hard') {
            option.boxShadowType = '0px'
        }
        else {
            option.boxShadowType = '15px'
        }

        element.forEach(image => {
            image.style.boxShadow = `10px 10px ${option.boxShadowType} 1px rgba(0, 0, 0, 0.5)`;

            if (option.padding) {
                image.style.padding = '1rem';
            }
        })
    },
    check: () => {
        console.log("You have successfully connected the package")
    }
}