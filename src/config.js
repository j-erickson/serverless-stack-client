export default {
  STRIPE_KEY: "pk_test_vyau0Gm6cWfeUloRJZVSlIVS00xAPBSSaU",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-application-uploader"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://q89rhnzifj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_yDMXB9TZ7",
    APP_CLIENT_ID: "57lbh7gjbc256ublrnc527pbvl",
    IDENTITY_POOL_ID: "us-east-1:0a8cccd0-6894-4eec-a7a1-1de6a8346530"
  }
};
