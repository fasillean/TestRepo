var  a:number = 1 ;
var funtest = (arg1: number,...nums:number[]):number=> {
   for(var i:number=0 ; i<nums.length;i++) {
    a+=nums[i];
   }
   return a+arg1;
};
console.log(funtest(1,2,3));
