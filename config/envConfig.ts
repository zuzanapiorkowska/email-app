const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const envConfig = {
  apiUrl: getEnvironmentVariable("API_URL"),
  senderGridApiKey: getEnvironmentVariable("SENDGRID_API_KEY"),
  senderEmail: getEnvironmentVariable("SENDER_EMAIL"),
  emailProvider: getEnvironmentVariable("EMAIL_PROVIDER"),
};
