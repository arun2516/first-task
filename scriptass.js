let n =4;
let first = [4,3,2,5];
let second =[3,2,5,4];

for(i=0;i<n;i++){
    let t =first[i];
    if(second.indexOf(t) === second[n-1]){
      console.log(i+1);
      break;
    }
  }