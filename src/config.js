const dev = {
  STRIPE_KEY: "pk_test_vyau0Gm6cWfeUloRJZVSlIVS00xAPBSSaU",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-m10jymus7v4u"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://il81pdww39.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_A6j6agfkK",
    APP_CLIENT_ID: "4dbmrpdomobm8qt3ukd7248nl0",
    IDENTITY_POOL_ID: "us-east-1:ad2043ea-c501-4ae2-b147-8d42e4d3da57"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_vyau0Gm6cWfeUloRJZVSlIVS00xAPBSSaU",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1g914d4qrkagl"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2e2227p5yb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_86Qk91yND",
    APP_CLIENT_ID: "2grptmhbhf1va332juqfjg1vvd",
    IDENTITY_POOL_ID: "us-east-1:05d4a593-34c4-4285-8848-79b82482a83a"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
