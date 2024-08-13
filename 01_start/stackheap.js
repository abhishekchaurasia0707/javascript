//stack=================================
let name="abhishek";
let mname=name;
mname="rahul";
console.log(name);
console.log(mname);

//heap===================================
let userone={
    email:"user@gmail.com",
    upi:"user@paytm"
}
let userTwo=userone;
userTwo.email="abhishek9097indian@gmail.com";
console.log(userone.email);
console.log(userTwo.email);

//stack ke ander saare value ka copy milta h whereas heap ke ander ka value ka reference milta h==============