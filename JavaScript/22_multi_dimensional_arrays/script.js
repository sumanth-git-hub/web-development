const nameAndNumberList = [['Sumanth', 72], ['Sharath', 89]]
nameAndNumberList[2] = ['Sachin', 80]
console.log(nameAndNumberList[0][0])
console.log(nameAndNumberList[1][0])
console.log(nameAndNumberList)


// task given 

const ticTacToe = [
    ['X', null, null],
    [null, null, 'O'],
    ['O', null, 'X']
]
console.log(ticTacToe)


const multipleArrays = [['Digital Marketing', ['SEO', ['On page SEO'],['Off page SEO'],['Technical SEO']], ['Google Ads',['RSA'],['Display Ads'],['Video Ads'],['Performance Campaign Ads']], ['Social Media Marketing', ['Facebook Ads'],['Linked in Ads'],['Instagram Ads']], ['Email Marketing']], 
['Front End Development',['HTML'],['CSS'],['JavaScript'],['JS frameworks', ['React JS'], ['Angular JS'],['Vue JS']], ['CSS frame works', ['Bootstrap'],['Tailwind']]]]

console.log(multipleArrays)


console.log(multipleArrays[0][1], 'Access SEO')
console.log(multipleArrays[1][4], 'Access JavaScript Frame Works')


console.log(multipleArrays[0][1][3], 'Access Technical SEO')
console.log(multipleArrays[1][4][1], 'Access React JS')


const insuranceArray = [['General insurance', ['Health insurance'],['Motor insurance'],['Travel insurance'],['Pet insurance'],['Mobile insurance'],['Business insurance'],['Property insurance']],
['Life insurance', ['Term Insurance'], ['Endowment insurance'], ['Retirement plan'],['ULIP'],['Guranteed returns']]]

console.log(insuranceArray)

console.log(insuranceArray[1][1],'how i accessed term insurance')

const duplicateArray = [['Frontend Development',['HTML'],['CSS'],['JavaScript'],['JS Frame works',['React JS'],['Angular JS'],['Vue JS']],['CSS Frame works',['Tailwind'],['BootStrap']],['Git and GitHub']],['Digital Marketing',['SEO',['On page SEO'],['Off page SEO'],['Tech SEO']],['Google ads',['RSA'],['Display Ads'],['Video Ads'],['performance Campaign']],['Social Media Marketing',['FB Ads'],['Instagram Ads'],['Linkedin Ads']],['Email Marketing'],['Affiliate Marketing']]]

console.log(duplicateArray)

console.log(duplicateArray[0][5][1],'Accessed Tailwind')
