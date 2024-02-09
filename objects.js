const myObj={
    "name": "john",
    "age":12,
    "email":"test@test.com",    //,this is called trailing comma
    "password":"12yuy561",
    "key":"whatever",
    "posts":["p1","p2"],
    "getposts": function(){
        //console.log("Yayy posts");
        return this.posts;
    }
}
 //console.log(myObj.getposts);
 //console.log(myObj.getposts());
//console.log(myObj.posts);

//console.log(myObj);
// console.log(myObj.name);
// console.log(myObj["email"]);

//for..in
// for(let key in myObj){
//    console.log(key);
// }
// for(let key in myObj){
//     console.log(myObj.key);
//  }
//for(let key in myObj){
    // console.log(myObj[key]);
//     console.log(key,typeof key);
//  }

//const mObj={};
//console.log(newObj);
// const newObj={
//     age:42,
// };
// newObj.name="kim";
// newObj.getName=function(){
//     return this.name;
// }
// console.log(newObj);
// console.log(newObj.getName());
function Student(name,age){
    this.name=name;
    this.age=age;
    this.getName=function(){
        return this.name;
    }

}





