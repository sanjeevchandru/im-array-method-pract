//array methods

// 1.push()
document.write("1.PUSH()"+"<br>");
document.write("------------"+"<br>");
var a=[10,"sanjeev"];
document.write("1st array elements:"+a+"<br>");

let x=a.push(37,"chandru",true);
document.write("The new array (push() is add one or more elements at end of array) :"+a+"<br>");
document.write("push() is return length of new array :"+x+"<br><br>");




// 2.pop()
document.write("2.POP()"+"<br>");
document.write("------------"+"<br>");
var b=[10,"sanjeev","chandru",36,82];
document.write("1st array elements:"+b+"<br>");

let y=b.pop();
document.write("The new array (pop() is remove the elements at end of array) :"+b+"<br>");
document.write("pop() is return removing the end elements in array :"+y+"<br><br>");



// 3.unshift()
document.write("3.UNSHIFT()"+"<br>");
document.write("------------"+"<br>");
var c=[10,"sanjeev","chandru",36,82];
document.write("1st array elements:"+c+"<br>");

let z=c.unshift(2,5);
document.write("The new array (unshift() is add one or more elements at start of array):"+c+"<br>");
document.write("unshift() is return length of new array :"+z+"<br><br>");


// 4.shift()
document.write("4.SHIFT()"+"<br>");
document.write("------------"+"<br>");
var d=[10,"sanjeev","chandru",36,82];
document.write("1st array elements:"+d+"<br>");

let p=d.shift();
document.write("The new array (shift() is remove the elements at start of array):"+d+"<br>");
document.write("shift() is return removing start of elements in array :"+p+"<br><br>");


// 5.splice()
document.write("5.SPLICE()"+"<br>");
document.write("------------"+"<br>");
var e=[10,"sanjeev","chandru",36,82];
document.write("1st array elements:"+e+"<br>");

let q=e.splice(2,1,3);
document.write("The new array (splice() is add one or more elements at index potion of array):"+e+"<br>");
document.write("splice() is return removing elements of new array :"+q+"<br><br>");



// 6.slice()
document.write("6.SLICE()"+"<br>");
document.write("------------"+"<br>");
var f=[10,"sanjeev","chandru",36,82];
document.write("1st array elements:"+f+"<br>");

let r=f.slice(2,5);
document.write("The new array (slice() is):"+f+"<br>");
document.write("slice() is return removing the elemets of new array :"+r+"<br><br>");




// 7.indexOF()
document.write("7.INDEXOF()"+"<br>");
document.write("------------"+"<br>");
var g=[10,"sanjeev","chandru",36,82];
document.write(" array elements:"+g+"<br>");
let s=g.indexOf(10);
document.write("indexOf() is return index position of  elements in array :"+s+"<br><br>");



// 8.includes()
document.write("8.INCLUDES()"+"<br>");
document.write("------------"+"<br>");
var h=[10,"sanjeev","chandru",10,82];
document.write(" array elements:"+h+"<br>");
let t=h.includes(10,3);
document.write("includes() is check the index position of element then return boolean value :"+t+"<br><br>");



// 9.concat()
document.write("9.CONCAT()"+"<br>");
document.write("------------"+"<br>");
var i=[10,"sanjeev","chandru",36,82];
var j=[1,2,3,5,7,8,9];
document.write("1st array elements:"+i+"<br>");
document.write("2nd array elements:"+j+"<br>");
let u=i.concat(j);
document.write("The 1st and 2nd arrays are doesn't change):"+"<br>");
document.write("concat() is return new array of before concating of two arrays:"+u+"<br><br>");


// 10.sort()
document.write("10.SORT()"+"<br>");
document.write("------------"+"<br>");
var i=["anbu","kathir","yogesh","aswin","sakthi-mari","thivakar"];
document.write("1st array elements:"+i+"<br>");
let v=i.sort();
document.write("The sort of array):"+i+"<br>");
document.write("concat() is return sorting array elements:"+v+"<br><br>");


