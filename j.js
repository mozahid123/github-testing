'use strict'

let flat=[[0,1],[2,3]].reduce((acc,array)=>{
  debugger;
  return acc.concat(array)
},[])
console.log(flat)

