import {v4 as uuidv4}  from 'uuid';

let users = [];

// method for creating new user.
export const createuser = (req,res)=>{
    const user = req.body;
    const id=uuidv4();
    users.push({...user, Id: id });
    res.send('received');
    console.log(users);
}

// method for fetching all users.
export const getusers = (req,res)=>{
    res.send(users);
}

// method to search a user by user id.
export const getuser = (req,res)=>{
    const id=req.params.id;

    const founduser= users.find((user)=> user.Id===id);

    res.send(founduser);
}

// method to delete a user.
export const deleteuser =(req,res)=>{
    const id=req.params.id;

    users=users.filter((user) => user.Id!=id);
    res.redirect('/');
} 

// method to update a user details.
export const updateuser =(req,res)=>{
    const {id}=req.params;
    const {name,lastname,age}=req.body;

    const user = users.find((user)=> user.Id==id);

    if(name){
        user.name=name;
    }
    if(lastname){
        user.lastname=lastname;
    }
    if(age)
    {
        user.age=age;
    }
    console.log("updated");
}
