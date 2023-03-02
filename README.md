# Social Media 
## BuzzHive
BuzzHive is a social media app built with the MERN (MongoDB, Express, React, Node.js) stack. 
It allows users to create profiles, make posts, like and comment on posts, and connect with other users.


### Models
- User Model
```
{
    firstName: {string, mandatory}, lastName: {string, mandatory},   email:  {string, mandatory, valid email, unique}, password: {string, mandatory}, picturePath: { String, default: ""},
    friends: { Array,default: [] },
    location: { String}, occupation: {String}, viewedProfile: {Number},
    impressions: {Number}, createdAt: {timestamp},  updatedAt: {timestamp}
},
```
### Post 
Post Model
```

{
    userId: { String,required}, firstName: {String,required},
    lastName:  {String,required},  location: {String},
    description: {String},  picturePath: {String},
    userPicturePath: {String}, likes: { Map}, comments: { Array },
  },
```

## Register
To use the app, users need to register for an account by providing their name, email, and password.

## Login
Once registered, users can log in to the app using their email and password.

## Profile
Users can create a profile by providing their personal information, such as their name, bio, and profile picture.

## Posts
Users can create posts by writing a message and uploading a picture. They can also like and comment on posts made by other users.

## Friends
Users can send friend requests to other users and accept or decline friend requests sent to them. Once friends, they can see each other's posts and interact with them.

### Models
- User Model
```yaml
{
    firstName: {string, mandatory},
    lastName: {string, mandatory},
    email:  {string, mandatory, valid email, unique},
    password: {string, mandatory},
    picturePath: { String, default: ""},
    friends: { Array,default: [] },
    location: { String},
    occupation: {String},
    viewedProfile: {Number},
    impressions: {Number},
  

  createdAt: {timestamp},
  updatedAt: {timestamp}
},
```
### Post 
Post Model
```yaml

{
    userId: { String,required},
    firstName: {String,required},
    lastName:  {String,required},
    location: {String},
    description: {String},
    picturePath: {String},
    userPicturePath: {String},
    likes: { Map},
    comments: { Array },
  },
```
