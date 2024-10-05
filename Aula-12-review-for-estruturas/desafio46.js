//exibir os numeros de 1 a 10
// setTimeout(function() {
//     for (let i = 10; i >0; i--) {
//         console.log(i+ " segundos para a decolagem")
//     } 
//   } ,(1000))

  for (let i = 10; i > 0; i--) {
    setTimeout(function() {
        console.log(i + " segundos para a decolagem");
    }, (10 - i) * 1000);
}


// setTimeout(() => {
//     console.log('10 segundos para a decolagem')
//     setTimeout(() => {
//       console.log('9 segundos para a decolagem')
//       setTimeout(() => {
//         console.log('8 segundos para a decolagem')
//         setTimeout(() => {
//           console.log('7 segundos para a decolagem')
//           setTimeout(() => {
//             console.log('6 segundos para a decolagem')
//             setTimeout(() => {
//               console.log('5 segundos para a decolagem')
//               setTimeout(() => {
//                 console.log('4 segundos para a decolagem')
//                 setTimeout(() => {
//                   console.log('3 segundos para a decolagem')  
//                   setTimeout(() => {
//                     console.log('2 segundos para a decolagem')
//                     setTimeout(() => {
//                       console.log('1 segundos para a decolagem')
//                       setTimeout(() => {
//                         console.log('Decolou !!!')
//                         }, 1000)
//                       }, 1000)
//                     }, 1000)
//                   }, 1000)
//                 }, 1000)
//               }, 1000)
//             }, 1000)
//           }, 1000)
//         }, 1000)
//     }, 1000)
//   }, 0)