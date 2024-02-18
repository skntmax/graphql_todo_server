module.exports = ` 

type todo{
    id:ID!
   custom_id:String
   userId:ID!
   title:String!
   discription:String
   CreatedOn:String
  } 

  type users{
    id:ID!
    username:String
    email:String
    website:String
  }

  type count {
     total: Int 
  }
   
 type Query {
   count:count
   hello: String
   getTodo(limit:String): [todo]
   getTodoById(id:ID!):todo
   getTodoByUserId(id:ID!):[todo]
   getAllUsers:[users]
 }
  
  
`;
