// 10. Create a discount calculator using closure that applies a fixed discount percentage.
function discountCalculator(discountPercentage) {
    return function(originalP) {
        const amountDis = (discountPercentage / 100) * originalP;
        return originalP- amountDis;
    };  
}

const tenperdis=discountCalculator(10);
console.log(tenperdis(200));

