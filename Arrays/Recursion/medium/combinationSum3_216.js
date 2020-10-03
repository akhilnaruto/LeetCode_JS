
const _backTrack = function(startIndex, sumTillNow, bucket, result, bucketLength, sum){
   if(bucket.length === bucketLength && sumTillNow !== sum)
      return;
   if(sumTillNow >  sum)
      return;
   if(bucket.length > bucketLength)
      return;
   if(bucket.length === bucketLength && sumTillNow === sum){
       result.push([...bucket])
       return;
   }
   
   for (let i = startIndex; i<= 9; i++){
       bucket.push(i);
       sumTillNow += i;
       _backTrack(i+1, sumTillNow, bucket, result, bucketLength, sum);
       sumTillNow -= bucket.pop();
   }
}

var combinationSum3 = function(k, n) {
   const bucketLength = k;
   const sum = n;

   const startIndex =1;
   let result = [];
   let bucket = [];
   let sumTillNow = 0;

   _backTrack(startIndex, sumTillNow, bucket, result, bucketLength, sum);
   return result;
};


combinationSum3(3, 9);
