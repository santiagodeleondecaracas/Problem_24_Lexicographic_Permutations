/*
The following algorithm generates the next permutation lexicographically after a given permutation. It changes the given permutation in-place.

1.- Find the largest index k such that a[k] < a[k + 1]. If no such index exists, the permutation is the last permutation.
2.- Find the largest index l greater than k such that a[k] < a[l].
3.- Swap the value of a[k] with that of a[l].
4.- Reverse the sequence from a[k + 1] up to and including the final element a[n].
For example, given the sequence [1, 2, 3, 4] (which is in increasing order), and given that the index is zero-based, the steps are as follows:

Index k = 2, because 3 is placed at an index that satisfies condition of being the largest index that is still less than a[k + 1] which is 4.
Index l = 3, because 4 is the only value in the sequence that is greater than 3 in order to satisfy the condition a[k] < a[l].
The values of a[2] and a[3] are swapped to form the new sequence [1, 2, 4, 3].
The sequence after k-index a[2] to the final element is reversed. Because only one value lies after this index (the 3),
 the sequence remains unchanged in this instance. Thus the lexicographic successor of the initial state is permuted: [1, 2, 4, 3].
Following this algorithm, the next lexicographic permutation will be [1, 3, 2, 4], and the 24th permutation will be [4, 3, 2, 1] at which point a[k] < a[k + 1] does not exist, indicating that this is the last permutation.

This method uses about 3 comparisons and 1.5 swaps per permutation, amortized over the whole sequence, not counting the initial sort.
*/

         let array = [0,1,2,3,4,5,6,7,8,9];
         let kValue = 0;
         let kIndex = 0;
         let lValue = 0;
         let lIndex = 0;
         let buffer = 0;
         let mark = 0;
         let reversionStartIndex = 0;
         let arrayLength = array.length;
         let totalOfPermutations = 0;
         let limitOfPermutations = 999999;
         let jointArrayNumber=0;                                 
                                 while(totalOfPermutations<limitOfPermutations){
                                    for(let k = 0;k<array.length;k++){
                                        if(array[k]<array[k+1]){
                                              kValue = array[k];
                                              kIndex = k;
                                      };
                                  };
  
                              for(let l = 0;l<array.length;l++){
                                      if(array[kIndex]<array[l]){
                                          lValue=array[l];
                                          lIndex = l;
                                  };
                              };
                              
                          buffer = array[kIndex]; 
                          array[kIndex] = array[lIndex];
                          array[lIndex] = buffer;
  
                          reversionStartIndex = kIndex+1;
                
                           for(let i = reversionStartIndex;i<reversionStartIndex+(Math.floor((array.length-reversionStartIndex)/2));i++){
                              buffer=array[i];
                              array[i]=array[arrayLength-1-mark];
                              array[arrayLength-1-mark] = buffer;
                              mark = mark + 1; 
                             };
                 
                             kValue = 0;
                             kIndex = 0;
                             lValue = 0;
                             lIndex = 0;
                             buffer = 0;
                             mark = 0;
                             reversionStartIndex = 0;
                             totalOfPermutations = totalOfPermutations + 1;

                            };

                            jointArrayNumber=Number(array.join(""));

                                   
               console.log(jointArrayNumber);

                            