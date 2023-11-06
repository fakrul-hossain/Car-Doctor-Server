/*
1. install jsonwebtoken
2. jwt.sign (payload, secret,{expiresIN:})
3. token client

// 

1.how to store token in the client side
2. memory ---> ok type
2. local storage --> ok type(xss)
3.cookies: http only

// 

1. set cookies with http only . for development secure: false
2. cors
    *app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);


3. client side axios settings
in axios set withCredentials: true

*/

// cookie gaenarator : 
// 1. node
// 2.require('crypto').randomBytes(64).toString('hex')

// 
/* 
1. to send cookies from th client make use ou added withCredentials: true
2.



*/