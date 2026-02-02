// 24. Convert an array of prices to prices with 18% GST added.

const price=[100,200,300,400];
const gst=price.map((num)=>{
    const gstp=num+(18/100)*num;
    console.log(gstp);
});
