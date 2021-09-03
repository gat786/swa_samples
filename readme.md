# Azure SWA Samples with Authentication

This sample is brought to you by 

![Styava Logo](./assets/styava-logo.png)

You can join our Discord Servers from this [link](https://azure.styava.dev).

This repository contains two samples of 
1. [React Sample](./react-app)
2. [NextJs Sample](./nextjs-app)

The samples show an application with which you can log in and logout from 
different providers. 

This sample showcases sample `staticwebapp.config.json` which has routes 
mentioned in it. The json file is same for both the samples but you can change 
it according to your preferences. 

The contents of the file looks like this

```json
{
  "routes": [
      {
          "route": "/.auth/login/aad",
          "statusCode": 404
      },
      {
          "route": "/.auth/login/github",
          "statusCode": 404
      },
      {
          "route": "/login",
          "rewrite": "/.auth/login/twitter"
      },
      {
          "route": "/logout",
          "rewrite": "/.auth/logout"
      }
  ]
}
```

The file states that routes of `aad` and `github` authentication is pointed
towards 404 i.e. they are disabled. This file also makes the routes 

`/.auth/login/twitter` as `/login`

and  

`/.auth/logout` as `/logout`

both the samples use the same route to login and logout via the inbuilt Azure
SWA Authentication.
